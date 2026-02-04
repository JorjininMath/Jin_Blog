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
    plans: ["保持每周一篇周记更新", "补充 2 月计划与目标"],
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
  },
  {
    id: "2026-01-w4",
    title: "2026 年 01 月 · 第 4 周",
    year: 2026,
    month: 1,
    week: 4,
    dateRange: "01/27 - 02/02",
    summary: "一月的最后一周，收尾与规划并行。",
    tags: ["review/weekly", "strategy/planning"],
    highlights: ["完成年度目标拆解", "博客项目收尾与上线准备"],
    reflections: ["节奏比强度重要"],
    plans: ["二月坚持周记更新", "整理标签与搜索体验"],
    events: [
      {
        time: "Mon",
        title: "年度目标拆解",
        detail: "把 2026 年目标拆到季度与月度。",
        tags: ["strategy/planning"]
      },
      {
        time: "Fri",
        title: "博客上线准备",
        detail: "检查部署与内容，准备正式对外。",
        tags: ["tech/frontend"]
      }
    ],
    relatedArticles: []
  }
];
