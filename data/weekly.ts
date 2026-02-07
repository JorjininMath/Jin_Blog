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
  }
];
