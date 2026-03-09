import { TimelineCard } from "@/components/TimelineCard";
import { StatsCard } from "@/components/StatsCard";
import { getWeeklyEntriesByYear } from "@/lib/content";

const MONTH_ZH = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];

export default function HomePage() {
  const grouped = getWeeklyEntriesByYear();

  return (
    <div className="lg:grid lg:grid-cols-[160px_1fr_220px] lg:gap-10">

      {/* Left: Year / Month sticky nav */}
      <aside className="hidden lg:block">
        <div className="sticky top-24 space-y-6">
          <p className="text-xs font-medium uppercase tracking-widest text-mist">导航</p>
          {grouped.map(({ year, months }) => (
            <div key={year} className="space-y-1">
              <a
                href={`#year-${year}`}
                className="block text-sm font-semibold text-ink transition hover:text-glow"
              >
                {year}
              </a>
              <div className="pl-3 space-y-0.5">
                {months.map(({ month, entries }) => (
                  <a
                    key={month}
                    href={`#year-${year}-month-${month}`}
                    className="flex items-center justify-between text-xs text-mist transition hover:text-ink"
                  >
                    <span>{month.toString().padStart(2, "0")} 月</span>
                    <span className="text-mist/50">{entries.length}w</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* Center: Grouped timeline */}
      <main className="min-w-0 space-y-16 pt-4">
        <section>
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
        </section>

        {grouped.map(({ year, months }) => (
          <section key={year} id={`year-${year}`} className="space-y-10">
            <h2 className="border-b border-black/[0.06] pb-3 font-apple-title font-semibold text-ink">
              {year}
            </h2>
            {months.map(({ month, entries }) => (
              <div key={month} id={`year-${year}-month-${month}`} className="space-y-4">
                <p className="section-title">
                  {month.toString().padStart(2, "0")} 月 · {MONTH_ZH[month - 1]}
                </p>
                <div className="grid gap-4">
                  {entries.map((entry) => (
                    <TimelineCard key={entry.id} entry={entry} />
                  ))}
                </div>
              </div>
            ))}
          </section>
        ))}
      </main>

      {/* Right: Stats card */}
      <aside className="hidden lg:block">
        <div className="sticky top-24">
          <StatsCard />
        </div>
      </aside>

    </div>
  );
}
