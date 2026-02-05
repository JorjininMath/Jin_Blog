import { notFound } from "next/navigation";
import Link from "next/link";
import { getAILearningEntry } from "@/lib/content";
import { TagPill } from "@/components/TagPill";

type PageProps = {
  params: { slug: string };
};

export default function AILearningDetailPage({ params }: PageProps) {
  const entry = getAILearningEntry(params.slug);

  if (!entry) {
    notFound();
  }

  return (
    <article className="space-y-8">
      <header className="glass-card p-8">
        <p className="section-title">AI Learning</p>
        <h2 className="mt-3 text-3xl font-semibold">{entry.title}</h2>
        <p className="mt-2 text-sm text-mist">
          {entry.date} · {entry.topic}
        </p>
        <p className="mt-4 text-sm text-mist">{entry.summary}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {entry.tags.map((tag) => (
            <TagPill key={tag} tag={tag} />
          ))}
        </div>
      </header>

      <section className="glass-card p-8">
        <div className="space-y-4 text-sm leading-7 text-mist">
          {entry.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      {entry.resources && entry.resources.length > 0 ? (
        <section className="glass-card p-6">
          <p className="section-title">Resources</p>
          <ul className="mt-4 space-y-2">
            {entry.resources.map((res) => (
              <li key={res.url}>
                <a
                  href={res.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-glow hover:underline"
                >
                  {res.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </article>
  );
}
