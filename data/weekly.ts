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
        title: "Proposal meeting paper — reviewer-response checklist",
        detail: `Section-by-section revision checklist (Priority: A=must-fix, B=strongly suggested, C=polish).

--- 0. Global consistency and claims (do first) ---
[A0] Align claimed coverage target with data/design: state clearly (i) random X~P_X marginal coverage, or (ii) fixed test design/grid. One explicit sentence in preliminaries/method; experiments use same target.
[A1] Resolve “designed Stage-2 calibration (X)” vs exchangeability: add paragraph — choose one: (1) calibration X from same P_X as test, (2) coverage conditional on fixed test design, (3) weighted/covariate-shift conformal. Theorem/claim and experiments no longer in tension.

--- 1. Introduction ---
[B1] Split contributions (2–4 bullets): CKME conditional CDF + surrogate/smoothing + error decomposition; DCP interval by CDF inversion; two-stage budget and sampling. Tie each to a section.
[C1] Scope: one sentence — 1D experiments now; higher-dim discussed later.

--- 2. Problem setup / Preliminaries ---
[A2] Define exchangeability where first used: augmented sample exchangeable ⇒ joint distribution invariant to permutations (split conformal rank).
[A3] Define target set and output: full set / smallest interval covering it / central connected component; match implementation and metrics.

--- 3. Conditional CDF via CKME ---
[A4] State kernels and RKHS: specify k_X, k_Y (e.g. bounded, characteristic), normalization.
[A5] Surrogate g_{t,h}: lemma/remark — in H_Y or approximation with bound; how constants depend on h.
[B2] Numerical monotonicity: implementation note — rearrangement/isotonic on t-grid, or quantify violations and handling.

--- 4. DCP construction ---
[A6] Exact calibration score S_i and split quantile rule (finite-sample corrected if used).
[A7] Inversion: t-grid definition and range; how endpoints computed; interpolation between grid points.
[B3] Why score yields central interval: |F-1/2|≤q and relation to quantiles.

--- 5. Two-stage procedure ---
[A8] Algorithm 2: make three Stage-2 strategies explicit — LHS; score-proportional p_diag(x)∝S^(0)(x); mixture p_γ. Remove unused symbols.
[A9] Define score S^(0)(x): definition, intuition (uncertainty/miscalibration proxy), how computed from preliminary CDF.
[B4] Budget equation: total budget in terms of (n_0,r_0), (n_1,r_1), Stage-2 allocation.

--- 6. Theory ---
[A10] Theorem 1: cite primary CKME result + conditions (bounded kernels, regularization scaling).
[A11] Decomposition: CKME error (x); surrogate smoothing bias (h); grid/discretization (m). Each term has an order and a knob.
[A12] Coverage guarantee matches calibration design (see A1); no over-claiming.
[B5] Remark: better F̂ reduces conformal inflation / tightens bands.

--- 7. Experiments ---
[A13] Train/cal/test split and what is exchangeable; replication protocol.
[A14] Exp1 undercoverage diagnosis: monotonicity violation rate; PIT histogram F̂(Y|X); sensitivity to h, grid (table/figure, can be appendix).
[B6] Parameter tuning: CV objective (CRPS / CDF error / MMD), folds, Stage-1 only.
[B7] Baselines: comparable budget and tuning; state explicitly.
[C2] Report std/CI across macro-reps for coverage and width.

--- 8. Discussion / Limitations / Future ---
[A15] Limitation: designed calibration covariates; calibration/test covariate mismatch; how you plan to address.
[B8] Future (4–6 items): validity under covariate shift / adaptive design; monotone CDF (rearrangement/isotonic); tail-aware tuning; two-stage efficiency theory; scalable CKME (Nyström) and higher-dim X; group-conditional worst-bin coverage.

Response format when fixing: Reviewer comment → Response: “We clarified…” → Change made: “Added in Sec. X, lines …; updated Algorithm 2; …”`,
        tags: ["research/ckme-cp", "review/paper"]
      }
    ],
    relatedArticles: []
  }
];
