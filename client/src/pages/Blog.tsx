import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { trpc } from "@/lib/trpc";
import { Calendar, Tag, ArrowRight, BookOpen, Search } from "lucide-react";

const CATEGORIES = [
  { value: "", label: "Sve kategorije" },
  { value: "psihologija", label: "Psihologija" },
  { value: "parapsihologija", label: "Parapsihologija" },
  { value: "alternativni-pristupi", label: "Alternativni pristupi" },
  { value: "ostalo", label: "Ostalo" },
];

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

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("");
  const [search, setSearch] = useState("");

  const { data: posts, isLoading } = trpc.blog.list.useQuery(
    activeCategory ? { category: activeCategory } : undefined
  );

  const filtered = posts?.filter(p =>
    search
      ? p.title.toLowerCase().includes(search.toLowerCase()) ||
        (p.excerpt ?? "").toLowerCase().includes(search.toLowerCase())
      : true
  );

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-violet-50 via-purple-50 to-background overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-violet-400 blur-3xl" />
          <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-purple-400 blur-3xl" />
        </div>
        <div className="container max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-100 text-violet-700 text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              Istraživački blog
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Članci i istraživanja
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dubinska istraživanja iz psihologije, parapsihologije i alternativnih pristupa razumijevanju ljudske psihe.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 z-30 bg-background/95 backdrop-blur border-b border-border shadow-sm">
        <div className="container max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
          {/* Category tabs */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(cat => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.value
                    ? "bg-violet-600 text-white shadow-sm"
                    : "bg-muted text-muted-foreground hover:bg-violet-50 hover:text-violet-700"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
          {/* Search */}
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Pretraži članke..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-violet-300"
            />
          </div>
        </div>
      </section>

      {/* Posts grid */}
      <section className="py-16">
        <div className="container max-w-6xl mx-auto px-4">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="rounded-2xl bg-muted animate-pulse h-80" />
              ))}
            </div>
          ) : !filtered || filtered.length === 0 ? (
            <div className="text-center py-24">
              <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-30" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Nema objavljenih članaka</h3>
              <p className="text-muted-foreground">
                {search ? "Nema rezultata za vaš upit." : "Uskoro dolaze novi istraživački članci."}
              </p>
            </div>
          ) : (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            >
              {filtered.map(post => (
                <motion.article
                  key={post.id}
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                  className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
                >
                  {/* Image */}
                  {post.imageUrl ? (
                    <div className="h-48 overflow-hidden">
                      <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ) : (
                    <div className="h-48 bg-gradient-to-br from-violet-100 to-purple-100 flex items-center justify-center">
                      <BookOpen className="w-12 h-12 text-violet-300" />
                    </div>
                  )}

                  <div className="p-6 flex flex-col flex-1">
                    {/* Category + Date */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${CATEGORY_COLORS[post.category] ?? "bg-gray-100 text-gray-700"}`}>
                        <Tag className="w-3 h-3 inline mr-1" />
                        {CATEGORY_LABELS[post.category] ?? post.category}
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {formatDate(post.createdAt)}
                      </span>
                    </div>

                    <h2 className="text-lg font-serif font-bold text-foreground mb-2 group-hover:text-violet-700 transition-colors line-clamp-2">
                      {post.title}
                    </h2>

                    {post.excerpt && (
                      <p className="text-sm text-muted-foreground line-clamp-3 mb-4 flex-1">
                        {post.excerpt}
                      </p>
                    )}

                    <Link href={`/blog/${post.slug}`}>
                      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-violet-600 hover:text-violet-800 transition-colors mt-auto cursor-pointer">
                        Pročitaj više
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Link>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </main>
  );
}
