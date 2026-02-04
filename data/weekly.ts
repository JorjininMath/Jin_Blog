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
      "完成本学期助教工作与批改任务",
      "完成 CKME-CP 论文撰写与修改",
      "启动一个 LLM 相关的小型 Demo 项目"
    ],
    thisWeekJobSummary:
      "本周求职进展将在此更新。可写投递数量、面试安排、跟进状态等简短总结。",
    plans: [],
    events: [
      {
        time: "Sat",
        title: "博客部署与配置",
        detail: "完成 Vercel 部署、SSH 密钥与 GitHub 关联。",
        tags: ["tech/frontend"]
      },
      {
        time: "Sun",
        title: "内容时间线更新",
        detail: "将周记时间线更新至 2026 年 2 月第 1 周。",
        tags: ["review/weekly"]
      }
    ],
    relatedArticles: ["design-year-month-week-system"]
  }
];
