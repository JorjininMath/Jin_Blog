import Link from "next/link";
import { TimelineCard } from "@/components/TimelineCard";
import { getWeeklyEntries, getAllTags } from "@/lib/content";

export default function HomePage() {
  const weeklyEntries = getWeeklyEntries();
  const tags = getAllTags().slice(0, 8);

  return (
    <div className="space-y-24 pb-16">
      <section className="pt-4">
        <p className="section-title">Timeline Overview</p>
        <h2 className="mt-4 font-apple-hero font-semibold text-ink">
          年-月-周结构化记录，
          <br />
          结合复盘与公开表达
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-mist">
          这里记录每周的关键事件、复盘与计划，同时输出文章与观点。整体视觉参考
          Apple 官网风格，保持克制与秩序。
        </p>
        <div className="mt-8 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-graphite px-4 py-2 text-xs font-medium text-mist"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex items-end justify-between border-b border-black/[0.06] pb-4">
          <div>
            <p className="section-title">Weekly Notes</p>
            <h3 className="mt-2 font-apple-title font-semibold text-ink">
              最新周记
            </h3>
          </div>
          <Link
            href="/articles"
            className="text-sm font-medium text-glow transition hover:underline"
          >
            Explore Articles →
          </Link>
        </div>
        <div className="grid gap-6">
          {weeklyEntries.map((entry) => (
            <TimelineCard key={entry.id} entry={entry} />
          ))}
        </div>
      </section>
    </div>
  );
}
