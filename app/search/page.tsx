"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { searchContent } from "@/lib/content";
import { TagPill } from "@/components/TagPill";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const results = useMemo(() => searchContent(query), [query]);

  return (
    <div className="space-y-8">
      <div>
        <p className="section-title">Search</p>
        <h2 className="mt-2 text-2xl font-semibold">搜索内容</h2>
        <p className="mt-3 text-sm text-mist">
          支持标题、摘要、正文与标签匹配。
        </p>
      </div>

      <div className="glass-card p-6">
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="输入关键词，例如: review / Apple / 周记"
          className="w-full rounded-xl border border-black/[0.08] bg-graphite/50 px-4 py-3 text-sm text-ink placeholder:text-mist focus:border-glow focus:outline-none focus:ring-1 focus:ring-glow"
        />
      </div>

      <section className="space-y-4">
        <h3 className="text-lg font-semibold">周记结果</h3>
        {results.weekly.length === 0 ? (
          <p className="text-sm text-mist">暂无匹配周记。</p>
        ) : (
          <div className="grid gap-4">
            {results.weekly.map((entry) => (
              <div key={entry.id} className="glass-card p-5">
                <Link
                  href={`/week/${entry.year}/${entry.month}/${entry.week}`}
                  className="text-lg font-semibold text-ink transition hover:text-glow"
                >
                  {entry.title}
                </Link>
                <p className="mt-2 text-sm text-mist">{entry.summary}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {entry.tags.map((tag) => (
                    <TagPill key={tag} tag={tag} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="space-y-4">
        <h3 className="text-lg font-semibold">文章结果</h3>
        {results.articles.length === 0 ? (
          <p className="text-sm text-mist">暂无匹配文章。</p>
        ) : (
          <div className="grid gap-4">
            {results.articles.map((article) => (
              <div key={article.slug} className="glass-card p-5">
                <Link
                  href={`/article/${article.slug}`}
                  className="text-lg font-semibold text-ink transition hover:text-glow"
                >
                  {article.title}
                </Link>
                <p className="mt-2 text-sm text-mist">{article.summary}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <TagPill key={tag} tag={tag} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
