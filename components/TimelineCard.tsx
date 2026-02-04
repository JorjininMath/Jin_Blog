import Link from "next/link";
import { WeeklyEntry } from "@/lib/types";
import { TagPill } from "@/components/TagPill";

type TimelineCardProps = {
  entry: WeeklyEntry;
};

export const TimelineCard = ({ entry }: TimelineCardProps) => {
  return (
    <div className="glass-card p-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-mist">
            {entry.year} / {entry.month.toString().padStart(2, "0")} · W{entry.week}
          </p>
          <h3 className="mt-2 text-xl font-semibold">{entry.title}</h3>
          <p className="mt-3 text-sm text-mist">{entry.summary}</p>
        </div>
        <Link
          href={`/week/${entry.year}/${entry.month}/${entry.week}`}
          className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-mist transition hover:border-glow hover:text-white"
        >
          Read
        </Link>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {entry.tags.map((tag) => (
          <TagPill key={tag} tag={tag} />
        ))}
      </div>
    </div>
  );
};
