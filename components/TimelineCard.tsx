import Link from "next/link";
import { WeeklyEntry } from "@/lib/types";
import { TagPill } from "@/components/TagPill";

type TimelineCardProps = {
  entry: WeeklyEntry;
};

export const TimelineCard = ({ entry }: TimelineCardProps) => {
  return (
    <div className="group rounded-2xl bg-graphite/50 px-6 py-6 transition hover:bg-graphite/70">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-mist">
            {entry.year} / {entry.month.toString().padStart(2, "0")} · W
            {entry.week}
          </p>
          <h3 className="mt-2 text-xl font-semibold tracking-tight text-ink">
            {entry.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-mist">
            {entry.summary}
          </p>
        </div>
        <Link
          href={`/week/${entry.year}/${entry.month}/${entry.week}`}
          className="rounded-full bg-ink px-4 py-2 text-xs font-medium uppercase tracking-wider text-white transition hover:opacity-90"
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
