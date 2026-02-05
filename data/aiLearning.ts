import { AILearningEntry } from "@/lib/types";

export const aiLearningEntries: AILearningEntry[] = [
  {
    slug: "llm-basics-and-prompting",
    title: "LLM 基础与 Prompting",
    date: "2026-02-01",
    topic: "LLM / Prompting",
    summary: "梳理大模型基本概念与 prompt 设计思路，为后续 demo 打基础。",
    tags: ["ai/llm", "ai/prompting"],
    resources: [
      { label: "OpenAI Prompt Engineering Guide", url: "https://platform.openai.com/docs/guides/prompt-engineering" }
    ],
    content: [
      "LLM 的输入输出形式与 token 概念。",
      "Few-shot 与 chain-of-thought 等常见 prompt 模式。",
      "下一步：动手写一个小 demo 做检索或生成任务。"
    ]
  },
  {
    slug: "demo-project-setup",
    title: "LLM Demo 项目起步",
    date: "2026-02-02",
    topic: "LLM / Project",
    summary: "选定技术栈并搭好本地 demo 骨架，便于后续迭代。",
    tags: ["ai/llm", "ai/demo"],
    content: [
      "目标：一个可运行的 LLM 小应用（如 RAG 或简单 agent）。",
      "技术选型：本地可跑优先，考虑 Ollama + LangChain 或直接 API。",
      "本周完成环境与第一个可演示版本。"
    ]
  }
];
