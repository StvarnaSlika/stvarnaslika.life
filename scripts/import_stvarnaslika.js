#!/usr/bin/env node
/**
 * scripts/import_stvarnaslika.js
 *
 * Usage:
 *   node scripts/import_stvarnaslika.js https://stvarnaslika.life
 *
 * What it does:
 * - Tries to fetch sitemap.xml from the provided base URL and extract URLs.
 * - If sitemap is unavailable, crawls the homepage to find potential article links.
 * - For each candidate URL it fetches the page, extracts title, first paragraph (excerpt),
 *   og:image (as imageUrl), published date (when present), and the main article HTML.
 * - Writes Markdown files to ./imported/<slug>.md with YAML frontmatter and HTML content
 *   (Streamdown/Streamdown-friendly HTML). Also creates a JSON index at ./imported/index.json
 *
 * Dependencies: axios, cheerio
 * Install: pnpm add -w axios cheerio
 */

const fs = require('fs');
const path = require('path');
const axios = require('axios');
const cheerio = require('cheerio');
const { URL } = require('url');

if (process.argv.length < 3) {
  console.error('Usage: node scripts/import_stvarnaslika.js <baseUrl>');
  process.exit(1);
}

const baseUrl = process.argv[2].replace(/\/$/, '');
const outputDir = path.join(process.cwd(), 'imported');

async function fetchUrl(url) {
  try {
    const res = await axios.get(url, { timeout: 15000, headers: { 'User-Agent': 'StvarnaSlika-Importer/1.0' } });
    return res.data;
  } catch (err) {
    console.warn('Failed to fetch', url, err.message);
    return null;
  }
}

function slugFromUrl(url) {
  try {
    const u = new URL(url);
    const parts = u.pathname.split('/').filter(Boolean);
    if (parts.length === 0) return 'home';
    return parts.join('-').toLowerCase();
  } catch (e) {
    return url.replace(/[^a-z0-9]+/gi, '-').toLowerCase();
  }
}

function toFrontmatter(obj) {
  const lines = ['---'];
  for (const k of Object.keys(obj)) {
    const v = obj[k];
    if (v === undefined || v === null) continue;
    if (typeof v === 'string' && v.includes('\n')) {
      lines.push(`${k}: |\n  ${v.replace(/\n/g, '\n  ')}`);
    } else {
      lines.push(`${k}: ${JSON.stringify(v)}`);
    }
  }
  lines.push('---\n');
  return lines.join('\n');
}

async function parseSitemap(xml) {
  const urls = [];
  try {
    const matches = xml.matchAll(/<loc>(.*?)<\/loc>/g);
    for (const m of matches) {
      const u = m[1].trim();
      if (u) urls.push(u);
    }
  } catch (e) {
    // ignore
  }
  return urls;
}

function pickExcerpt($) {
  // prefer article > p, then first p in content, then meta description
  const selectors = ['article p', '.article p', '.post p', 'main p', 'p'];
  for (const s of selectors) {
    const el = $(s).first();
    if (el && el.text().trim().length > 20) return el.text().trim();
  }
  const metaDesc = $('meta[name="description"]').attr('content');
  if (metaDesc) return metaDesc.trim();
  return '';
}

function pickTitle($) {
  const h1 = $('h1').first().text().trim();
  if (h1) return h1;
  const metaTitle = $('meta[property="og:title"]').attr('content') || $('title').text();
  return (metaTitle || '').trim();
}

function pickImage($) {
  const og = $('meta[property="og:image"]').attr('content');
  if (og) return og;
  const img = $('article img').first().attr('src') || $('img').first().attr('src');
  if (img) return img;
  return '';
}

function pickDate($) {
  const time = $('time[datetime]').attr('datetime') || $('meta[property="article:published_time"]').attr('content');
  if (time) return time;
  // try reading date-like strings
  const datetext = $('time').first().text().trim();
  if (datetext && datetext.length > 6) return datetext;
  return null;
}

async function findArticleLinksFromHomepage(html) {
  const $ = cheerio.load(html);
  const links = new Set();
  $('a[href]').each((i, el) => {
    const href = $(el).attr('href');
    if (!href) return;
    // normalize
    let full;
    try {
      full = new URL(href, baseUrl).toString();
    } catch (e) { return; }
    // heuristics: contains /blog, /clanak, or has date-like path or longer path
    if (/\/blog|\/posts|\/clanak|\/article|\/article\//i.test(full) || /\/[0-9]{4}\/\d{2}\/\d{2}\//.test(full)) {
      links.add(full);
    }
  });
  return Array.from(links);
}

async function main() {
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

  console.log('Trying sitemap...');
  const sitemapUrl = `${baseUrl}/sitemap.xml`;
  const sitemapContent = await fetchUrl(sitemapUrl);
  let urls = [];

  if (sitemapContent) {
    urls = await parseSitemap(sitemapContent);
    console.log(`Found ${urls.length} URLs in sitemap`);
  }

  if (!urls || urls.length === 0) {
    console.log('No sitemap found or empty. Crawling homepage for article links...');
    const home = await fetchUrl(baseUrl);
    if (!home) { console.error('Failed to fetch homepage. Exiting.'); process.exit(1); }
    const found = await findArticleLinksFromHomepage(home);
    console.log(`Found ${found.length} candidate article links from homepage`);
    urls = found;
  }

  // Filter to same-host and unique
  urls = urls
    .map(u => u.split('#')[0])
    .filter(u => u.startsWith(baseUrl))
    .filter((v,i,a) => a.indexOf(v)===i);

  console.log(`Processing ${urls.length} article URLs`);

  const index = [];
  for (const url of urls) {
    console.log('Fetching', url);
    const html = await fetchUrl(url);
    if (!html) continue;
    const $ = cheerio.load(html);
    const title = pickTitle($) || 'Untitled';
    const excerpt = pickExcerpt($) || '';
    const imageUrl = pickImage($) || '';
    const date = pickDate($) || new Date().toISOString();

    // extract main article html - try article, main, .post, .content
    let contentHtml = '';
    const candidates = ['article', 'main', '.post', '.content', '.article', '#content'];
    for (const sel of candidates) {
      if ($(sel).length) {
        contentHtml = $(sel).first().html();
        if (contentHtml && contentHtml.trim().length > 50) break;
      }
    }
    if (!contentHtml) {
      // fallback: use body
      contentHtml = $('body').html() || '';
    }

    const slug = slugFromUrl(url);
    const filename = path.join(outputDir, `${slug}.md`);

    const fm = {
      title,
      slug,
      date,
      excerpt,
      imageUrl,
      sourceUrl: url,
      category: 'ostalo',
      importedAt: new Date().toISOString(),
    };

    const md = `${toFrontmatter(fm)}\n${contentHtml}\n`;
    try {
      fs.writeFileSync(filename, md, 'utf8');
      console.log('Wrote', filename);
      index.push({ title, slug, url, excerpt, imageUrl, date, filename: `imported/${slug}.md` });
    } catch (e) {
      console.warn('Failed to write file for', url, e.message);
    }
  }

  // write index
  fs.writeFileSync(path.join(outputDir, 'index.json'), JSON.stringify(index, null, 2), 'utf8');
  console.log('Done. Wrote index.json with', index.length, 'entries in', outputDir);
  console.log('Now you can review imported markdown files and either:');
  console.log('- copy content into the DB using the admin create post flow, or');
  console.log('- adapt them into static markdown-based workflow, or');
  console.log('- send me the imported files and I can create DB entries if you provide DB access or run the importer locally.');
}

main().catch(err => { console.error(err); process.exit(1); });
