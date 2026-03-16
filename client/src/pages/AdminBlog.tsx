import { useEffect, useState } from "react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import { useAuth } from "@/_core/hooks/useAuth";
import { getLoginUrl } from "@/const";
import { toast } from "sonner";
import {
  Plus, Pencil, Trash2, Eye, EyeOff, ArrowLeft,
  BookOpen, Calendar, Tag, Save, X, Loader2
} from "lucide-react";
import { Button } from "@/components/ui/button";

const CATEGORIES = [
  { value: "psihologija", label: "Psihologija" },
  { value: "parapsihologija", label: "Parapsihologija" },
  { value: "alternativni-pristupi", label: "Alternativni pristupi" },
  { value: "ostalo", label: "Ostalo" },
];

const CATEGORY_LABELS: Record<string, string> = {
  psihologija: "Psihologija",
  parapsihologija: "Parapsihologija",
  "alternativni-pristupi": "Alternativni pristupi",
  ostalo: "Ostalo",
};

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[čć]/g, "c").replace(/[šš]/g, "s").replace(/[žž]/g, "z")
    .replace(/đ/g, "d").replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-").replace(/-+/g, "-").trim();
}

function formatDate(date: Date | string) {
  return new Date(date).toLocaleDateString("hr-HR", { day: "numeric", month: "short", year: "numeric" });
}

type PostForm = {
  title: string; slug: string; excerpt: string; content: string;
  category: "psihologija" | "parapsihologija" | "alternativni-pristupi" | "ostalo";
  imageUrl: string; seoTitle: string; seoDescription: string;
  published: "draft" | "published";
};

const emptyForm: PostForm = {
  title: "", slug: "", excerpt: "", content: "",
  category: "psihologija", imageUrl: "", seoTitle: "", seoDescription: "",
  published: "draft",
};

export default function AdminBlog() {
  const { user, loading, isAuthenticated } = useAuth();
  const [view, setView] = useState<"list" | "create" | "edit">("list");
  const [editId, setEditId] = useState<number | null>(null);
  const [form, setForm] = useState<PostForm>(emptyForm);
  const [deleteConfirm, setDeleteConfirm] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Admin — Blog CMS | Stvarna Slika";
  }, []);

  const utils = trpc.useUtils();
  const { data: posts, isLoading } = trpc.blog.adminList.useQuery(undefined, {
    enabled: isAuthenticated && user?.role === "admin",
  });

  const createMutation = trpc.blog.create.useMutation({
    onSuccess: () => {
      toast.success("Članak uspješno kreiran!");
      utils.blog.adminList.invalidate();
      utils.blog.list.invalidate();
      setView("list");
      setForm(emptyForm);
    },
    onError: (e) => toast.error(e.message),
  });

  const updateMutation = trpc.blog.update.useMutation({
    onSuccess: () => {
      toast.success("Članak uspješno ažuriran!");
      utils.blog.adminList.invalidate();
      utils.blog.list.invalidate();
      setView("list");
      setEditId(null);
      setForm(emptyForm);
    },
    onError: (e) => toast.error(e.message),
  });

  const deleteMutation = trpc.blog.delete.useMutation({
    onSuccess: () => {
      toast.success("Članak obrisan.");
      utils.blog.adminList.invalidate();
      utils.blog.list.invalidate();
      setDeleteConfirm(null);
    },
    onError: (e) => toast.error(e.message),
  });

  // Auth guard
  if (loading) {
    return (
      <main className="pt-20 min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-violet-600" />
      </main>
    );
  }

  if (!isAuthenticated) {
    return (
      <main className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Prijava potrebna</h2>
          <a href={getLoginUrl()} className="px-6 py-3 bg-violet-600 text-white rounded-xl font-medium hover:bg-violet-700 transition-colors">
            Prijavi se
          </a>
        </div>
      </main>
    );
  }

  if (user?.role !== "admin") {
    return (
      <main className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Pristup odbijen</h2>
          <p className="text-muted-foreground">Nemate admin ovlasti.</p>
        </div>
      </main>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (view === "edit" && editId !== null) {
      updateMutation.mutate({ id: editId, ...form });
    } else {
      createMutation.mutate(form);
    }
  };

  const startEdit = (post: any) => {
    setForm({
      title: post.title, slug: post.slug, excerpt: post.excerpt ?? "",
      content: post.content, category: post.category,
      imageUrl: post.imageUrl ?? "", seoTitle: post.seoTitle ?? "",
      seoDescription: post.seoDescription ?? "", published: post.published,
    });
    setEditId(post.id);
    setView("edit");
  };

  const handleTitleChange = (title: string) => {
    setForm(f => ({ ...f, title, slug: view === "create" ? slugify(title) : f.slug }));
  };

  // ===== FORM VIEW =====
  if (view === "create" || view === "edit") {
    const isSaving = createMutation.isPending || updateMutation.isPending;
    return (
      <main className="pt-20 min-h-screen bg-muted/30">
        <div className="container max-w-4xl mx-auto px-4 py-10">
          <div className="flex items-center gap-3 mb-8">
            <button onClick={() => { setView("list"); setForm(emptyForm); setEditId(null); }}
              className="p-2 rounded-lg hover:bg-muted transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-2xl font-serif font-bold">
              {view === "create" ? "Novi članak" : "Uredi članak"}
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-card rounded-2xl border border-border p-6 space-y-5">
              <h2 className="font-semibold text-foreground">Osnovne informacije</h2>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Naslov *</label>
                <input type="text" required value={form.title} onChange={e => handleTitleChange(e.target.value)}
                  placeholder="Npr. Jungovi arhetipovi i kolektivno nesvjesno"
                  className="w-full px-4 py-2.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-violet-300 text-foreground" />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Slug (URL) *</label>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">/blog/</span>
                  <input type="text" required value={form.slug}
                    onChange={e => setForm(f => ({ ...f, slug: e.target.value }))}
                    placeholder="jungovi-arhetipovi"
                    pattern="[a-z0-9-]+"
                    className="flex-1 px-4 py-2.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-violet-300 text-foreground font-mono text-sm" />
                </div>
                <p className="text-xs text-muted-foreground mt-1">Samo mala slova, brojevi i crtice.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Kategorija *</label>
                  <select value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value as any }))}
                    className="w-full px-4 py-2.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-violet-300 text-foreground">
                    {CATEGORIES.map(c => <option key={c.value} value={c.value}>{c.label}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Status</label>
                  <select value={form.published} onChange={e => setForm(f => ({ ...f, published: e.target.value as any }))}
                    className="w-full px-4 py-2.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-violet-300 text-foreground">
                    <option value="draft">Skica (draft)</option>
                    <option value="published">Objavljeno</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Kratki opis (excerpt)</label>
                <textarea rows={2} value={form.excerpt} onChange={e => setForm(f => ({ ...f, excerpt: e.target.value }))}
                  placeholder="Kratki opis koji se prikazuje na listi članaka..."
                  className="w-full px-4 py-2.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-violet-300 text-foreground resize-none" />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">URL slike</label>
                <input type="url" value={form.imageUrl} onChange={e => setForm(f => ({ ...f, imageUrl: e.target.value }))}
                  placeholder="https://..."
                  className="w-full px-4 py-2.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-violet-300 text-foreground" />
              </div>
            </div>

            {/* Content */}
            <div className="bg-card rounded-2xl border border-border p-6 space-y-3">
              <div className="flex items-center justify-between">
                <h2 className="font-semibold text-foreground">Sadržaj članka *</h2>
                <span className="text-xs text-muted-foreground">Podržava Markdown formatiranje</span>
              </div>
              <textarea
                required
                rows={18}
                value={form.content}
                onChange={e => setForm(f => ({ ...f, content: e.target.value }))}
                placeholder={`## Uvod\n\nNapišite sadržaj članka ovdje...\n\n## Poglavlje 1\n\nKoristite **bold**, *italic*, ## naslove, - liste...\n\n> Citirani tekst`}
                className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-violet-300 text-foreground font-mono text-sm resize-y"
              />
            </div>

            {/* SEO */}
            <div className="bg-card rounded-2xl border border-border p-6 space-y-4">
              <h2 className="font-semibold text-foreground">SEO (opcionalno)</h2>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  SEO naslov <span className="text-muted-foreground">({form.seoTitle.length}/60)</span>
                </label>
                <input type="text" maxLength={60} value={form.seoTitle}
                  onChange={e => setForm(f => ({ ...f, seoTitle: e.target.value }))}
                  placeholder="Ostavite prazno za automatski naslov"
                  className="w-full px-4 py-2.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-violet-300 text-foreground" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  SEO opis <span className="text-muted-foreground">({form.seoDescription.length}/160)</span>
                </label>
                <textarea rows={2} maxLength={160} value={form.seoDescription}
                  onChange={e => setForm(f => ({ ...f, seoDescription: e.target.value }))}
                  placeholder="Ostavite prazno za automatski opis"
                  className="w-full px-4 py-2.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-violet-300 text-foreground resize-none" />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 justify-end">
              <Button type="button" variant="outline" onClick={() => { setView("list"); setForm(emptyForm); setEditId(null); }}>
                <X className="w-4 h-4 mr-2" /> Odustani
              </Button>
              <Button type="submit" disabled={isSaving} className="bg-violet-600 hover:bg-violet-700 text-white">
                {isSaving ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Save className="w-4 h-4 mr-2" />}
                {view === "create" ? "Objavi članak" : "Spremi promjene"}
              </Button>
            </div>
          </form>
        </div>
      </main>
    );
  }

  // ===== LIST VIEW =====
  return (
    <main className="pt-20 min-h-screen bg-muted/30">
      <div className="container max-w-5xl mx-auto px-4 py-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Link href="/">
                <span className="text-sm text-muted-foreground hover:text-violet-600 transition-colors cursor-pointer flex items-center gap-1">
                  <ArrowLeft className="w-3 h-3" /> Povratak na stranicu
                </span>
              </Link>
            </div>
            <h1 className="text-2xl font-serif font-bold text-foreground">Blog CMS</h1>
            <p className="text-sm text-muted-foreground">Upravljajte člancima i istraživanjima</p>
          </div>
          <Button onClick={() => { setForm(emptyForm); setView("create"); }}
            className="bg-violet-600 hover:bg-violet-700 text-white">
            <Plus className="w-4 h-4 mr-2" /> Novi članak
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Ukupno", value: posts?.length ?? 0, icon: BookOpen, color: "text-violet-600" },
            { label: "Objavljeno", value: posts?.filter(p => p.published === "published").length ?? 0, icon: Eye, color: "text-emerald-600" },
            { label: "Skice", value: posts?.filter(p => p.published === "draft").length ?? 0, icon: EyeOff, color: "text-amber-600" },
            { label: "Kategorije", value: new Set(posts?.map(p => p.category)).size ?? 0, icon: Tag, color: "text-blue-600" },
          ].map(stat => (
            <div key={stat.label} className="bg-card rounded-xl border border-border p-4 flex items-center gap-3">
              <stat.icon className={`w-8 h-8 ${stat.color} opacity-80`} />
              <div>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Posts table */}
        <div className="bg-card rounded-2xl border border-border overflow-hidden">
          {isLoading ? (
            <div className="p-8 text-center">
              <Loader2 className="w-8 h-8 animate-spin text-violet-600 mx-auto" />
            </div>
          ) : !posts || posts.length === 0 ? (
            <div className="p-16 text-center">
              <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-3 opacity-30" />
              <p className="text-foreground font-medium mb-1">Nema članaka</p>
              <p className="text-sm text-muted-foreground mb-4">Kreirajte prvi istraživački članak.</p>
              <Button onClick={() => { setForm(emptyForm); setView("create"); }}
                className="bg-violet-600 hover:bg-violet-700 text-white">
                <Plus className="w-4 h-4 mr-2" /> Novi članak
              </Button>
            </div>
          ) : (
            <div className="divide-y divide-border">
              {posts.map(post => (
                <div key={post.id} className="flex items-start gap-4 p-5 hover:bg-muted/40 transition-colors">
                  {/* Thumbnail */}
                  <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-muted">
                    {post.imageUrl
                      ? <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
                      : <div className="w-full h-full flex items-center justify-center"><BookOpen className="w-6 h-6 text-muted-foreground opacity-40" /></div>
                    }
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                        post.published === "published" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"
                      }`}>
                        {post.published === "published" ? "Objavljeno" : "Skica"}
                      </span>
                      <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                        {CATEGORY_LABELS[post.category] ?? post.category}
                      </span>
                    </div>
                    <h3 className="font-semibold text-foreground truncate">{post.title}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {formatDate(post.createdAt)} · /blog/{post.slug}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-1 flex-shrink-0">
                    {post.published === "published" && (
                      <a href={`/blog/${post.slug}`} target="_blank" rel="noopener noreferrer"
                        className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-violet-600">
                        <Eye className="w-4 h-4" />
                      </a>
                    )}
                    <button onClick={() => startEdit(post)}
                      className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-blue-600">
                      <Pencil className="w-4 h-4" />
                    </button>
                    {deleteConfirm === post.id ? (
                      <div className="flex items-center gap-1">
                        <button onClick={() => deleteMutation.mutate({ id: post.id })}
                          className="px-3 py-1.5 text-xs bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                          Potvrdi
                        </button>
                        <button onClick={() => setDeleteConfirm(null)}
                          className="px-3 py-1.5 text-xs bg-muted text-muted-foreground rounded-lg hover:bg-border transition-colors">
                          Odustani
                        </button>
                      </div>
                    ) : (
                      <button onClick={() => setDeleteConfirm(post.id)}
                        className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-red-600">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
