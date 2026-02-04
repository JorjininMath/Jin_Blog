import Link from "next/link";
import { getArticles } from "@/lib/content";
import { TagPill } from "@/components/TagPill";

export default function ArticlesPage() {
  const articles = getArticles();

  return (
    <div className="space-y-8">
      <div>
        <p className="section-title">Articles</p>
        <h2 className="mt-2 text-2xl font-semibold">观点与思考</h2>
        <p className="mt-3 text-sm text-mist">
          独立文章与深度讨论，支持标签与关联周记。
        </p>
      </div>

      <div className="grid gap-6">
        {articles.map((article) => (
          <article key={article.slug} className="glass-card p-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-mist">
                  {article.date} · {article.readingTime}
                </p>
                <h3 className="mt-2 text-xl font-semibold">{article.title}</h3>
              </div>
              <Link
                href={`/article/${article.slug}`}
                className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-mist transition hover:border-glow hover:text-white"
              >
                Read
              </Link>
            </div>
            <p className="mt-3 text-sm text-mist">{article.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <TagPill key={tag} tag={tag} />
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
