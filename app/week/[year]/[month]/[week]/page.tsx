import { notFound } from "next/navigation";
import { getWeeklyEntry, getArticle } from "@/lib/content";
import { TagPill } from "@/components/TagPill";

type PageProps = {
  params: { year: string; month: string; week: string };
};

export default function WeeklyPage({ params }: PageProps) {
  const year = Number(params.year);
  const month = Number(params.month);
  const week = Number(params.week);
  const entry = getWeeklyEntry(year, month, week);

  if (!entry) {
    notFound();
  }

  return (
    <div className="space-y-10">
      <section className="glass-card p-8">
        <p className="section-title">Weekly Review</p>
        <h2 className="mt-3 text-3xl font-semibold">{entry.title}</h2>
        <p className="mt-2 text-sm text-mist">{entry.dateRange}</p>
        <p className="mt-4 text-sm text-mist">{entry.summary}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {entry.tags.map((tag) => (
            <TagPill key={tag} tag={tag} />
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="glass-card p-6">
          <p className="section-title">Highlights</p>
          <ul className="mt-4 space-y-2 text-sm text-mist">
            {entry.highlights.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
        <div className="glass-card p-6">
          <p className="section-title">Reflections</p>
          <ul className="mt-4 space-y-2 text-sm text-mist">
            {entry.reflections.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="glass-card p-6">
        <p className="section-title">Events</p>
        <div className="mt-4 space-y-4">
          {entry.events.map((event) => (
            <div key={event.title} className="rounded-xl border border-black/[0.08] bg-white/50 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-mist">
                {event.time}
              </p>
              <h3 className="mt-2 text-lg font-semibold">{event.title}</h3>
              <p className="mt-2 text-sm text-mist">{event.detail}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {event.tags.map((tag) => (
                  <TagPill key={tag} tag={tag} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="glass-card p-6">
        <p className="section-title">Next Week</p>
        <ul className="mt-4 space-y-2 text-sm text-mist">
          {entry.plans.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </section>

      {entry.relatedArticles.length > 0 ? (
        <section className="glass-card p-6">
          <p className="section-title">Related Articles</p>
          <div className="mt-4 space-y-3">
            {entry.relatedArticles.map((slug) => {
              const article = getArticle(slug);
              if (!article) return null;
              return (
                <div key={slug} className="rounded-xl border border-black/[0.08] bg-white/50 p-4">
                  <h3 className="text-lg font-semibold">{article.title}</h3>
                  <p className="mt-2 text-sm text-mist">{article.summary}</p>
                </div>
              );
            })}
          </div>
        </section>
      ) : null}
    </div>
  );
}
