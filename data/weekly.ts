import { WeeklyEntry } from "@/lib/types";

export const weeklyEntries: WeeklyEntry[] = [
  {
    id: "2025-03-w2",
    title: "2025 年 03 月 · 第 2 周",
    year: 2025,
    month: 3,
    week: 2,
    dateRange: "03/10 - 03/16",
    summary: "项目进入稳定期，开始把注意力放在复盘节奏与长期目标上。",
    tags: ["review/weekly", "tech/frontend", "life/fitness"],
    highlights: ["完成首页结构与时间轴布局", "恢复每周三次力量训练"],
    reflections: ["工作节奏平稳但深度思考不足", "需要把周记拆解成更小的行动"],
    plans: ["整理 3 篇文章大纲", "设计标签体系与搜索体验"],
    events: [
      {
        time: "Tue",
        title: "时间轴 UI 走查",
        detail: "确认 Year/Month/Week 的信息密度与交互层级。",
        tags: ["tech/frontend"]
      },
      {
        time: "Thu",
        title: "复盘模板优化",
        detail: "把周记拆分为目标/事件/总结三段式结构。",
        tags: ["review/weekly"]
      }
    ],
    relatedArticles: ["design-year-month-week-system"]
  },
  {
    id: "2025-03-w1",
    title: "2025 年 03 月 · 第 1 周",
    year: 2025,
    month: 3,
    week: 1,
    dateRange: "03/03 - 03/09",
    summary: "明确博客定位与 Apple 风格方向，完成基础信息架构。",
    tags: ["review/weekly", "strategy/brand"],
    highlights: ["确定技术栈：Next.js + MDX + Tailwind", "完成首页结构草案"],
    reflections: ["内容沉淀有待系统化"],
    plans: ["启动内容模板", "搜集 10 个参考案例"],
    events: [
      {
        time: "Mon",
        title: "结构方案定稿",
        detail: "完成 Year → Month → Week 的整体结构定义。",
        tags: ["strategy/brand"]
      },
      {
        time: "Fri",
        title: "视觉风格校准",
        detail: "对 Apple 官网的排版节奏进行拆解。",
        tags: ["design/visual"]
      }
    ],
    relatedArticles: []
  }
];
