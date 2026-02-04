import { notFound } from "next/navigation";
import { getArticle } from "@/lib/content";
import { TagPill } from "@/components/TagPill";

type PageProps = {
  params: { slug: string };
};

export default function ArticlePage({ params }: PageProps) {
  const article = getArticle(params.slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="space-y-8">
      <header className="glass-card p-8">
        <p className="section-title">Article</p>
        <h2 className="mt-3 text-3xl font-semibold">{article.title}</h2>
        <p className="mt-2 text-sm text-mist">
          {article.date} · {article.readingTime}
        </p>
        <p className="mt-4 text-sm text-mist">{article.summary}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <TagPill key={tag} tag={tag} />
          ))}
        </div>
      </header>

      <section className="glass-card p-8">
        <div className="space-y-4 text-sm leading-7 text-mist">
          {article.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>
    </article>
  );
}
