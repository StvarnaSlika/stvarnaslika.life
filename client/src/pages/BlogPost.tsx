import { Link, useParams } from "wouter";
import { motion } from "framer-motion";
import { trpc } from "@/lib/trpc";
import { Streamdown } from "streamdown";
import { Calendar, Tag, ArrowLeft, BookOpen } from "lucide-react";

const CATEGORY_COLORS: Record<string, string> = {
  psihologija: "bg-blue-100 text-blue-700",
  parapsihologija: "bg-violet-100 text-violet-700",
  "alternativni-pristupi": "bg-emerald-100 text-emerald-700",
  ostalo: "bg-gray-100 text-gray-700",
};

const CATEGORY_LABELS: Record<string, string> = {
  psihologija: "Psihologija",
  parapsihologija: "Parapsihologija",
  "alternativni-pristupi": "Alternativni pristupi",
  ostalo: "Ostalo",
};

function formatDate(date: Date | string) {
  return new Date(date).toLocaleDateString("hr-HR", {
    day: "numeric", month: "long", year: "numeric", timeZone: "Europe/Zagreb",
  });
}

export default function BlogPost() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug ?? "";

  const { data: post, isLoading, error } = trpc.blog.getBySlug.useQuery({ slug }, { enabled: !!slug });

  if (isLoading) {
    return (
      <main className="pt-20 min-h-screen">
        <div className="container max-w-3xl mx-auto px-4 py-16">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-muted rounded w-3/4" />
            <div className="h-4 bg-muted rounded w-1/2" />
            <div className="h-64 bg-muted rounded-2xl" />
            <div className="space-y-2">
              {[1,2,3,4,5].map(i => <div key={i} className="h-4 bg-muted rounded" />)}
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (error || !post) {
    return (
      <main className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-30" />
          <h1 className="text-2xl font-bold text-foreground mb-2">Članak nije pronađen</h1>
          <p className="text-muted-foreground mb-6">Traženi članak ne postoji ili je uklonjen.</p>
          <Link href="/blog">
            <span className="inline-flex items-center gap-2 px-6 py-3 bg-violet-600 text-white rounded-xl font-medium hover:bg-violet-700 transition-colors cursor-pointer">
              <ArrowLeft className="w-4 h-4" />
              Povratak na blog
            </span>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-20">
      {/* Hero */}
      {post.imageUrl && (
        <div className="relative h-72 md:h-96 overflow-hidden">
          <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>
      )}

      <article className="container max-w-3xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Back link */}
          <Link href="/blog">
            <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-violet-600 transition-colors mb-6 cursor-pointer">
              <ArrowLeft className="w-4 h-4" />
              Povratak na blog
            </span>
          </Link>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${CATEGORY_COLORS[post.category] ?? "bg-gray-100 text-gray-700"}`}>
              <Tag className="w-3 h-3 inline mr-1" />
              {CATEGORY_LABELS[post.category] ?? post.category}
            </span>
            <span className="text-sm text-muted-foreground flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {formatDate(post.createdAt)}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4 leading-tight">
            {post.title}
          </h1>

          {/* Excerpt */}
          {post.excerpt && (
            <p className="text-lg text-muted-foreground mb-8 pb-8 border-b border-border italic font-serif">
              {post.excerpt}
            </p>
          )}

          {/* Content */}
          <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-foreground prose-p:text-foreground/80 prose-a:text-violet-600 prose-strong:text-foreground prose-blockquote:border-violet-400 prose-blockquote:text-muted-foreground">
            <Streamdown>{post.content}</Streamdown>
          </div>

          {/* Footer */}
          <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              Objavljeno: {formatDate(post.createdAt)}
              {post.updatedAt && post.updatedAt !== post.createdAt && (
                <span> · Ažurirano: {formatDate(post.updatedAt)}</span>
              )}
            </p>
            <Link href="/blog">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 border border-border rounded-xl text-sm font-medium hover:bg-muted transition-colors cursor-pointer">
                <ArrowLeft className="w-4 h-4" />
                Svi članci
              </span>
            </Link>
          </div>
        </motion.div>
      </article>
    </main>
  );
}
