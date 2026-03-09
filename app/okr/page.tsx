import { getKRCompletionRatio, getLatestMonthlyOKR } from "@/lib/content";
import { OKRStatus } from "@/lib/types";

const statusLabelMap: Record<OKRStatus, string> = {
  not_started: "Not Started",
  on_track: "On Track",
  at_risk: "At Risk",
  done: "Done"
};

const statusClassMap: Record<OKRStatus, string> = {
  not_started: "bg-graphite text-mist",
  on_track: "bg-blue-100 text-blue-700",
  at_risk: "bg-amber-100 text-amber-700",
  done: "bg-emerald-100 text-emerald-700"
};

export default function OkrPage() {
  const okr = getLatestMonthlyOKR();

  if (!okr) {
    return (
      <section className="glass-card p-8">
        <p className="section-title">OKR Dashboard</p>
        <h2 className="mt-3 text-3xl font-semibold">No OKR data yet</h2>
        <p className="mt-3 text-sm text-mist">
          Add monthly OKR data in `data/okr.ts` to render this page.
        </p>
      </section>
    );
  }

  const completionRatio = getKRCompletionRatio(okr);

  return (
    <div className="space-y-8">
      <section className="glass-card p-8">
        <p className="section-title">OKR Dashboard</p>
        <h2 className="mt-3 text-3xl font-semibold">
          {okr.year} / {okr.month.toString().padStart(2, "0")}
        </h2>
        <p className="mt-2 text-sm text-mist">{okr.theme}</p>
        <p className="mt-4 text-sm text-mist">Overall completion: {completionRatio}%</p>
      </section>

      <section className="space-y-6">
        {okr.objectives.map((objective) => (
          <article key={objective.id} className="glass-card p-6">
            <p className="section-title">{objective.id.toUpperCase()}</p>
            <h3 className="mt-2 text-xl font-semibold">{objective.title}</h3>
            <p className="mt-2 text-sm text-mist">{objective.why}</p>

            <div className="mt-4 space-y-3">
              {objective.keyResults.map((kr) => {
                const latestProgress = kr.progress[kr.progress.length - 1];
                const latestScore = latestProgress ? `${Math.round(latestProgress.score * 100)}%` : "0%";

                return (
                  <div
                    key={kr.id}
                    className="rounded-xl border border-black/[0.08] bg-white/60 p-4"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="text-sm font-semibold text-ink">{kr.title}</p>
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${statusClassMap[kr.status]}`}
                      >
                        {statusLabelMap[kr.status]}
                      </span>
                    </div>

                    <div className="mt-2 grid gap-1 text-sm text-mist md:grid-cols-2">
                      <p>Metric: {kr.metric}</p>
                      <p>Target: {kr.target}</p>
                      <p>Current: {kr.current}</p>
                      <p>Latest score: {latestScore}</p>
                    </div>

                    {latestProgress?.note ? (
                      <p className="mt-2 text-xs text-mist">
                        Note ({latestProgress.weekId}): {latestProgress.note}
                      </p>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </article>
        ))}
      </section>

      {okr.nonOkrOps && okr.nonOkrOps.length > 0 ? (
        <section className="glass-card p-6">
          <p className="section-title">Non-OKR Operations</p>
          <ul className="mt-4 space-y-2 text-sm text-mist">
            {okr.nonOkrOps.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  );
}
