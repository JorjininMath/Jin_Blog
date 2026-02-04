import { Article } from "@/lib/types";

export const articles: Article[] = [
  {
    slug: "design-year-month-week-system",
    title: "如何设计年-月-周的个人知识系统",
    date: "2025-03-12",
    summary: "从时间结构与复盘习惯出发，搭建可持续的个人知识库。",
    tags: ["tech/knowledge", "review/method"],
    readingTime: "6 min",
    content: [
      "为什么选择年-月-周？因为它既能纵览年度节奏，也能给每周一个清晰的叙事窗口。",
      "周记是核心，但真正有价值的是复盘后的行动清单与跟踪机制。",
      "Apple 风格强调克制与秩序，因此排版要留白、层级要清晰，尽量减少噪音。",
      "建议为每条内容加上标签前缀，帮助搜索与聚合。"
    ]
  },
  {
    slug: "apple-style-visual-language",
    title: "Apple 风格的视觉语言拆解",
    date: "2025-03-05",
    summary: "拆解 Apple 官网的排版、节奏与视觉秩序，提炼可复用的设计规则。",
    tags: ["design/visual", "review/method"],
    readingTime: "5 min",
    content: [
      "Apple 视觉的核心不是高饱和度，而是节奏、层级与材质感。",
      "背景色要深、对比要低，重点内容通过留白与细线强化。",
      "字体层级一定要明确，标题大胆、正文克制、注释轻量。"
    ]
  }
];
