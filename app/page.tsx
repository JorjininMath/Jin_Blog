import Link from "next/link";
import { TimelineCard } from "@/components/TimelineCard";
import { getWeeklyEntries, getAllTags } from "@/lib/content";

export default function HomePage() {
  const weeklyEntries = getWeeklyEntries();
  const tags = getAllTags().slice(0, 8);

  return (
    <div className="space-y-16">
      <section className="glass-card px-8 py-12">
        <p className="section-title">Timeline Overview</p>
        <h2 className="mt-4 text-3xl font-semibold">
          年-月-周结构化记录，结合复盘与公开表达
        </h2>
        <p className="mt-4 max-w-2xl text-sm text-mist">
          这里记录每周的关键事件、复盘与计划，同时输出文章与观点。整体视觉参考
          Apple 官网风格，保持克制与秩序。
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 px-3 py-1 text-xs text-mist"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="section-title">Weekly Notes</p>
            <h3 className="mt-2 text-2xl font-semibold">最新周记</h3>
          </div>
          <Link
            href="/articles"
            className="text-xs uppercase tracking-[0.2em] text-mist transition hover:text-white"
          >
            Explore Articles
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
