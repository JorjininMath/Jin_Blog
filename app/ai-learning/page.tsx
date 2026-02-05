import Link from "next/link";
import { getAILearningEntries } from "@/lib/content";
import { TagPill } from "@/components/TagPill";

export default function AILearningPage() {
  const entries = getAILearningEntries();

  return (
    <div className="space-y-8">
      <div>
        <p className="section-title">AI Learning</p>
        <h2 className="mt-2 text-2xl font-semibold">AI 学习记录</h2>
        <p className="mt-3 text-sm text-mist">
          记录学习主题、笔记与资源，便于回顾与检索。
        </p>
      </div>

      <div className="grid gap-6">
        {entries.map((entry) => (
          <article key={entry.slug} className="glass-card p-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-mist">
                  {entry.date} · {entry.topic}
                </p>
                <h3 className="mt-2 text-xl font-semibold">{entry.title}</h3>
              </div>
              <Link
                href={`/ai-learning/${entry.slug}`}
                className="rounded-full bg-ink px-4 py-2 text-xs font-medium uppercase tracking-wider text-white transition hover:opacity-90"
              >
                Read
              </Link>
            </div>
            <p className="mt-3 text-sm text-mist">{entry.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {entry.tags.map((tag) => (
                <TagPill key={tag} tag={tag} />
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
