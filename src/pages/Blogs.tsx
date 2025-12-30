"use client";
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

type Post = {
  id: string;
  title: string;
  excerpt: string;
  tags: string[];
  date: string;
  image?: string;
};

const samplePosts: Post[] = [
  {
    id: "1",
    title: "Designing for Scale: Inventory UIs that Work",
    excerpt:
      "Patterns and decisions for building inventory dashboards that remain useful as your catalog grows.",
    tags: ["ui", "inventory", "design"],
    date: "2025-08-12",
    image:
      "https://images.unsplash.com/photo-1506765515384-028b60a970df?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=1",
  },
  {
    id: "2",
    title: "Faster Syncs: Optimizing Inventory Updates",
    excerpt:
      "How to design background syncs and prioritize events so stock stays accurate without slowing your app.",
    tags: ["backend", "performance"],
    date: "2025-05-06",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=2",
  },
  {
    id: "3",
    title: "Using Predictions to Reduce Overstock",
    excerpt:
      "A practical walkthrough of machine learning signals you can use to reduce holding costs and stockouts.",
    tags: ["ml", "ops"],
    date: "2025-01-20",
    image:
      "https://images.unsplash.com/photo-1526378720772-5f9a2f9f6b2e?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=3",
  },
  {
    id: "4",
    title: "Designing Resilient Inventory APIs",
    excerpt:
      "API design patterns that keep inventory consistent across distributed systems and transient failures.",
    tags: ["api", "backend"],
    date: "2024-11-03",
    image:
      "https://images.unsplash.com/photo-1532619675605-5e1a6a0b3b45?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=4",
  },
  {
    id: "5",
    title: "UX Patterns that Reduce Picking Errors",
    excerpt:
      "Small interface changes that have outsized effects on warehouse picking accuracy and speed.",
    tags: ["ux", "ops"],
    date: "2025-03-15",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=5",
  },
  {
    id: "6",
    title: "Real-time Alerts Without the Noise",
    excerpt:
      "How to prioritize and surface the right inventory alerts so teams act, not panic.",
    tags: ["alerts", "productivity"],
    date: "2025-07-08",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=6",
  },
];

export default function Blogs() {
  const [q, setQ] = useState("");
  const [tag, setTag] = useState<string | null>(null);

  const tags = useMemo(() => {
    const all = new Set<string>();
    samplePosts.forEach((p) => p.tags.forEach((t) => all.add(t)));
    return Array.from(all);
  }, []);

  const filtered = useMemo(() => {
    return samplePosts.filter((p) => {
      if (tag && !p.tags.includes(tag)) return false;
      if (!q) return true;
      const s = q.toLowerCase();
      return (
        p.title.toLowerCase().includes(s) || p.excerpt.toLowerCase().includes(s)
      );
    });
  }, [q, tag]);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-16 mt-6 md:mt-12">
        <motion.header
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl text-center"
        >
          <h1 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl">
            Insights from {" "}
            <span className="gradient-text">E-IMS</span>
          </h1>
          <p className="mx-auto mb-6 max-w-2xl text-lg text-muted-foreground">
            Articles, guides and best practices for managing inventory,
            improving ops, and scaling e-commerce.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
            <input
              aria-label="Search posts"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search posts — try ‘inventory’ or ‘ml’"
              className="w-full max-w-lg rounded-md border border-border bg-input px-4 py-2 text-sm shadow-sm placeholder:text-muted-foreground"
            />

            <div className="mt-2 sm:mt-0 sm:ml-4 flex items-center gap-4">
              <label htmlFor="tag-filter" className="sr-only">
                Filter posts by tag
              </label>
              <select
                id="tag-filter"
                value={tag ?? ""}
                onChange={(e) =>
                  setTag(e.target.value === "" ? null : e.target.value)
                }
                className="rounded-md border border-border bg-input px-3 py-2 text-sm"
              >
                <option value="">All</option>
                {tags.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>

              <div className="text-sm text-muted-foreground">
                Filtering:{" "}
                <span className="font-medium text-foreground">
                  {tag ?? "All"}
                </span>
                {q ? (
                  <span className="ml-2 text-muted-foreground">
                    · search "{q}"
                  </span>
                ) : null}
              </div>
            </div>
          </div>
        </motion.header>

        <motion.section
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.06 },
            },
          }}
          className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((post, i) => (
            <motion.article
              key={post.id}
              variants={{
                hidden: { opacity: 0, y: 12 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="group relative overflow-hidden rounded-xl border border-border bg-card shadow-sm flex flex-col h-full"
            >
              <Link
                to={`/blog/${post.id}`}
                className="block flex flex-col h-full"
              >
                <div className="h-44 w-full overflow-hidden bg-slate-800 flex-shrink-0">
                  {post.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-muted-foreground">
                      No image
                    </div>
                  )}
                </div>

                <div className="p-4 flex-1 flex flex-col">
                  <div className="mb-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <time className="text-xs text-muted-foreground">
                        {new Date(post.date).toLocaleDateString()}
                      </time>
                    </div>
                    <div className="flex items-center gap-2">
                      {post.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-muted px-2 py-0.5 text-xs"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {post.title}
                  </h3>
                  <p className="mb-4 text-sm text-muted-foreground flex-1">
                    {post.excerpt}
                  </p>

                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm font-medium text-primary">
                      Read More
                    </span>
                    <span className="text-xs text-muted-foreground">→</span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.section>

        {filtered.length === 0 && (
          <div className="mt-12 text-center text-muted-foreground">
            No posts found.
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}
