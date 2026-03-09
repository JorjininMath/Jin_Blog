import Link from "next/link";
import { getWeeklyEntries, getArticles, getAILearningEntries, getTagCounts } from "@/lib/content";

export const StatsCard = () => {
  const weeks = getWeeklyEntries().length;
  const articleCount = getArticles().length;
  const aiCount = getAILearningEntries().length;
  const topTags = getTagCounts().slice(0, 8);

  return (
    <div className="rounded-2xl bg-graphite/50 px-5 py-5 space-y-5">
      <p className="text-xs font-medium uppercase tracking-widest text-mist">Overview</p>
      <div className="space-y-2.5">
        <StatRow label="周记" value={weeks} />
        <StatRow label="文章" value={articleCount} />
        <StatRow label="AI 笔记" value={aiCount} />
      </div>
      <div className="border-t border-black/[0.06] pt-4">
        <p className="mb-3 text-xs font-medium uppercase tracking-widest text-mist">热门标签</p>
        <div className="flex flex-wrap gap-1.5">
          {topTags.map(({ tag, count }) => (
            <Link
              key={tag}
              href={`/tags/${encodeURIComponent(tag)}`}
              className="rounded-full bg-white px-2.5 py-1 text-[11px] font-medium text-mist transition hover:text-ink"
            >
              {tag}{" "}
              <span className="text-mist/50">{count}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

const StatRow = ({ label, value }: { label: string; value: number }) => (
  <div className="flex items-center justify-between">
    <span className="text-sm text-mist">{label}</span>
    <span className="text-sm font-semibold text-ink">{value}</span>
  </div>
);
