import { WeeklyEntry } from "@/lib/types";

export const weeklyEntries: WeeklyEntry[] = [
  {
    id: "2026-02-w1",
    title: "2026 年 02 月 · 第 1 周",
    year: 2026,
    month: 2,
    week: 1,
    dateRange: "02/01 - 02/07",
    summary: "新年首月收尾，开启二月第一周；博客部署完成，开始更新内容与节奏。",
    tags: ["review/weekly", "tech/frontend", "life/routine"],
    highlights: ["博客上线 Vercel，SSH 与 GitHub 配置完成", "确定 2026 年周记更新节奏"],
    reflections: ["内容产出需要更稳定的时间块", "把周记当作每周固定复盘入口"],
    thisWeekPlans: [
      "持续投递简历并积极跟进求职机会",
      "完成本星期助教工作与批改任务",
      "完成 CKME-CP 论文撰写与修改",
      "启动一个 LLM 相关的小型 Demo 项目"
    ],
    plans: [],
    events: [
      {
        time: "This Week",
        title: "Job Situation",
        detail: `Applied this week (4):

• Uber — Graduate 2026 PhD Scientist II, Operations Research or ML (Mobility and Delivery Tech), US. Under review; may reach out if background meets staffing needs.

• Lila Sciences — Operations Research Scientist I/II, Robotics. Application submitted. Mission: scientific superintelligence. Team will review; will be in touch if experience aligns. CEO: Geoff von Maltzahn.

• ByteDance — Machine Learning Engineer Graduate (E-Commerce Risk Control) - 2026 Start (PhD), San Jose. 简历筛选. 通过内推投递. Submitted 2026-02-07.

• ByteDance — Machine Learning Engineer Graduate (E-Commerce Supply Chain & Logistics) - 2026 Start (PhD), San Jose. 简历筛选. 通过内推投递. Submitted 2026-02-07.`,
        tags: ["job"]
      }
    ],
    relatedArticles: ["design-year-month-week-system"]
  },
  {
    id: "2026-02-w2",
    title: "2026 年 02 月 · 第 2 周",
    year: 2026,
    month: 2,
    week: 2,
    dateRange: "02/08 - 02/14",
    summary: "聚焦 Search-Only RAG 实验，总结检索层工程化优化与评测体系。",
    tags: ["review/weekly", "ai/rag", "tech/search"],
    highlights: [
      "完成 Search-Only RAG 系统首轮实验与评测",
      "梳理检索层工程化模式与意图感知重排逻辑"
    ],
    reflections: [
      "RAG 的上限更多受限于检索而非生成，需要优先把检索层打磨扎实",
      "规则式意图识别在复杂语句下存在边界，需要考虑轻量模型接入"
    ],
    thisWeekPlans: [
      "TA：SSD 期中加考已定；在 Canvas 建活动并考前提醒学生",
      "整理 Search-Only RAG 实验文档并抽象为可复用模式",
      "设计下一步基于 Cross-Encoder 的重排方案",
      "继续维护本周求职节奏与反馈跟进"
    ],
    plans: [],
    events: [
      {
        time: "This Week",
        title: "TA: SSD 期中加考 — 时间地点已定",
        detail: `【已定】时间与教室已确定，OneDrive 已更新，已邮件 Esra。

场次与地点：
• Feb 25 (Tue) 3:30–5:30pm — Durham 222
• Feb 27 (Thu) 9:00–11:00am — Durham 222

待办：
• 在 Canvas 上创建对应考试活动（两场时间与 Dur 222）。
• 考前提醒：在考试日前发邮件/公告提醒 SSD 学生时间与地点。`,
        tags: ["ta", "life/routine"]
      },
      {
        time: "This Week",
        title: "Search-Only RAG 实验完成",
        detail:
          "构建纯检索 Search-Only RAG 系统，采用两阶段检索（向量基础召回 + 意图感知重排），并在 Amazon Reviews 数据上完成 Hit@N 与 Avg Best Rank 等指标评测。",
        tags: ["ai/rag", "tech/search"]
      }
    ],
    relatedArticles: []
  },
  {
    id: "2026-02-w3",
    title: "2026 年 02 月 · 第 3 周",
    year: 2026,
    month: 2,
    week: 3,
    dateRange: "02/15 - 02/21",
    summary: "Proposal / 论文修订周：按 reviewer-response checklist 逐条修订 CKME-CP 稿。",
    tags: ["review/weekly", "research/ckme-cp", "life/routine"],
    highlights: [],
    reflections: [],
    thisWeekPlans: [
      "按 checklist 完成 Global consistency (A0–A1) 与 Problem setup (A2–A3)",
      "修订 Conditional CDF / DCP / Two-stage 各节并对照实验",
      "补全 Theory 与 Experiments 的假设与诊断"
    ],
    plans: [],
    events: [
      {
        time: "This Week",
        title: "Proposal meeting paper — CKME-CP revision checklist (v2)",
        detail: `Legend: ✅ done · 🟡 partially done · ❌ not done

------- 0. Global consistency and claims -------
[A0] Coverage target aligned with design: ✅ Regime-wise marginal coverage stated; calibration/test (X) i.i.d. from same strategy-induced input distribution.
[A1] Designed Stage-2 (X) vs exchangeability resolved: ✅ Regime-wise exchangeability/validity framing; theorem/claims consistent with experiments.

------- 1. Introduction -------
[B1] Contributions split and mapped to sections: ✅ "Threefold" contributions clear and section-aligned.
[C1] Scope statement (1D now; higher-dim later): 🟡 1D in experiments section; explicit scope sentence in Intro still weak/missing.

------- 2. Problem setup / Preliminaries -------
[A2] Define exchangeability at first use: ✅ Definition where split conformal is introduced.
[A3] Define target set/output and match implementation: 🟡 Set/interval matches implementation via grid endpoints; "which component / central connected / smallest interval" wording could be more explicit.

------- 3. Conditional CDF via CKME -------
[A4] Kernels + RKHS assumptions stated clearly: 🟡 Bounded-kernel in theory; clean "kernel choice + bounded/characteristic/normalization" in methods not fully centralized.
[A5] Surrogate (g_{t,h}) membership/bound: 🟡 Uniform RKHS bound (Assumption 1) and (h)-dependence discussed; no lemma/remark for logistic surrogate in H_Y (or approximation) yet.
[B2] Numerical monotonicity handling (rearrangement/isotonic or report violations): ❌ No monotonicity-enforcement note or violation quantification yet.

------- 4. DCP construction -------
[A6] Calibration score + split quantile rule: ✅ Score S_i and finite-sample corrected quantile rule explicit.
[A7] Inversion implementation details (grid, range, endpoints, interpolation): 🟡 Grid inversion and endpoint selection present; grid range rule + interpolation between grid points not fully described.
[B3] Why score yields a central interval: 🟡 Intuition present; short "centrality ↔ quantile band" explanation not fully spelled out.

------- 5. Two-stage procedure -------
[A8] Algorithm 2 makes 3 Stage-2 strategies explicit: ✅ LHS / diagnostic-weighted / mixture clear; unused symbols removed.
[A9] Define diagnostic S^(0)(x) (formal definition + computation): 🟡 Concept/intuition (uncertainty proxy) stated; exact formula used in experiments should be written explicitly.
[B4] Budget equation and comparability: 🟡 B_1=n_0 r_0, B_2=n_1 r_1 appear; single clean "total budget + allocation + baseline matching" statement still missing.

------- 6. Theory -------
[A10] Cite primary CKME result + conditions: 🟡 Theorem clean; direct citation to core CKME consistency at Thm 1 would strengthen.
[A11] Error decomposition (CKME + smoothing (h) + grid (m)): ✅ All three terms with knobs/orders.
[A12] Coverage guarantee matches calibration design: ✅ Validity consistent with regime-wise exchangeability.
[B5] Remark: better F̂ tightens bands (reduces inflation): 🟡 Mentioned intuitively; not a clean theory remark yet.

------- 7. Experiments -------
[A13] Split/train/cal/test + exchangeability + replication protocol: 🟡 Splits described; macro-rep protocol (what is re-drawn each rep, counts) should be one paragraph.
[A14] Undercoverage diagnostics (monotonicity rate, PIT histogram, sensitivity to h, grid): 🟡 Appendix has score vs interval coverage + grid-size effect; PIT/monotonicity-rate and explicit (h)-sensitivity still missing.
[B6] Parameter tuning details (objective, folds, Stage-1 only): 🟡 Candidate grids/losses listed; fold structure and "tune only on Stage-1" should be stated procedurally.
[B7] Baselines fairness (budget + tuning): 🟡 Baselines described; "same total budget + tuning protocol" needs explicit statement.
[C2] Report variability across macro-reps (std/CI): ❌ Tables show means only; add std/CI or error bars.

------- 8. Discussion / Limitations / Future -------
[A15] Limitation: designed calibration covariates / mismatch risk: 🟡 Discussed implicitly; one crisp limitation sentence + planned fix direction still needed.
[B8] Future items (4–6): 🟡 Some present; still missing/weak: covariate-shift conformal validity, monotone CDF enforcement, tail-aware tuning, two-stage efficiency theory, scalable CKME (Nyström), worst-bin/group-conditional coverage.

------- Biggest remaining work (short) -------
❌ [B2] Monotonicity enforcement/violation report
🟡 [A9] Formal definition of S^(0)(x)
🟡 [A7] Grid range + interpolation details
🟡 [A13] Replication protocol paragraph
❌ [C2] Add std/CI across macro-reps
🟡 [A15] One explicit limitation sentence

Response format when fixing: Reviewer comment → Response: “We clarified…” → Change made: “Added in Sec. X, lines …; updated Algorithm 2; …”`,
        tags: ["research/ckme-cp", "review/paper"]
      }
    ],
    relatedArticles: []
  }
];
