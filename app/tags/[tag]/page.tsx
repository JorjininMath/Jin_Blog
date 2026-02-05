import Link from "next/link";
import { filterByTag } from "@/lib/content";
import { TagPill } from "@/components/TagPill";

type PageProps = {
  params: { tag: string };
};

export default function TagDetailPage({ params }: PageProps) {
  const tag = decodeURIComponent(params.tag);
  const { weekly, articles, aiLearning } = filterByTag(tag);

  return (
    <div className="space-y-10">
      <header className="glass-card p-6">
        <p className="section-title">Tag</p>
        <h2 className="mt-2 text-2xl font-semibold">#{tag}</h2>
        <p className="mt-3 text-sm text-mist">
          与该标签相关的周记、文章与 AI 学习记录。
        </p>
      </header>

      <section className="space-y-4">
        <h3 className="text-lg font-semibold">周记</h3>
        {weekly.length === 0 ? (
          <p className="text-sm text-mist">暂无周记。</p>
        ) : (
          <div className="grid gap-4">
            {weekly.map((entry) => (
              <div key={entry.id} className="glass-card p-5">
                <Link
                  href={`/week/${entry.year}/${entry.month}/${entry.week}`}
                  className="text-lg font-semibold"
                >
                  {entry.title}
                </Link>
                <p className="mt-2 text-sm text-mist">{entry.summary}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {entry.tags.map((entryTag) => (
                    <TagPill key={entryTag} tag={entryTag} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="space-y-4">
        <h3 className="text-lg font-semibold">文章</h3>
        {articles.length === 0 ? (
          <p className="text-sm text-mist">暂无文章。</p>
        ) : (
          <div className="grid gap-4">
            {articles.map((article) => (
              <div key={article.slug} className="glass-card p-5">
                <Link
                  href={`/article/${article.slug}`}
                  className="text-lg font-semibold"
                >
                  {article.title}
                </Link>
                <p className="mt-2 text-sm text-mist">{article.summary}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {article.tags.map((articleTag) => (
                    <TagPill key={articleTag} tag={articleTag} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="space-y-4">
        <h3 className="text-lg font-semibold">AI Learning</h3>
        {!aiLearning || aiLearning.length === 0 ? (
          <p className="text-sm text-mist">暂无 AI 学习记录。</p>
        ) : (
          <div className="grid gap-4">
            {aiLearning.map((entry) => (
              <div key={entry.slug} className="glass-card p-5">
                <Link
                  href={`/ai-learning/${entry.slug}`}
                  className="text-lg font-semibold"
                >
                  {entry.title}
                </Link>
                <p className="mt-2 text-sm text-mist">{entry.summary}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {entry.tags.map((t) => (
                    <TagPill key={t} tag={t} />
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
