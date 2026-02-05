import { Article } from "@/lib/types";

export const articles: Article[] = [
  {
    slug: "llamaindex-pr-contribution-experience",
    title: "技术实录：LlamaIndex 开源贡献全流程（从 Fork 到 Review）",
    date: "2026-02-05",
    summary: "记录向顶级开源 LLM 框架 LlamaIndex 提交 PR 的工程规范、实现细节与 Review 协作经验。",
    tags: ["tech/open-source", "ai/llm", "review/experience"],
    readingTime: "8 min",
    content: [
      "本文记录向顶级开源 LLM 框架 LlamaIndex 提交 PR 的技术细节与协作经验。这不仅是一次代码提交，更是对工业级开源项目标准流程的深度实操。",
      "初次贡献应避免大幅改动核心逻辑（Core Logic），而是通过 Example-level PR 切入。动机上，在 RAG 场景中低置信度检索的处理是一个高频痛点。设计原则有三：无侵入性（不改动核心代码、不引入新依赖、不变更 API）、可复制性（展示清晰、可运行、离线的推荐模式）、以及工程意义——这类 PR 更容易进入 Review，因为它在提供价值的同时不会给维护者带来破坏现有系统的风险。",
      "成熟项目如 LlamaIndex 的门槛通常在于严格的工程规范。包管理上项目全面使用 uv 进行环境隔离与同步。自动化规范检查方面，本地通过 uv sync 后必须运行 uv run pre-commit run --all-files，涵盖 ruff、mypy、black 及文档格式化。核心教训是：本地能跑代码 ≠ 符合 PR 标准；自动化检查通过是获得 Maintainer 关注的入场券。",
      "示例（Example）不等于玩具代码，必须模拟真实的工程边界。关键设计点包括：Dry-run 检索（利用 response_mode=\"no_text\" 预检检索质量，降低 Token 成本）、逻辑门控（显式打印 similarity_scores 并设置 max_score < cutoff 的 fallback）、环境解耦（使用 MockEmbedding + MockLLM 保证离线可复现）。在 Review 中维护者指出 Mock 向量的分布应更具代表性，说明 Reviewer 关注的是语义逻辑的严密性，而非仅仅是代码跑通。",
      "Fork 仓库提交 PR 后页面会出现各种状态提示。审批墙（Review required、Workflows awaiting approval）是标准安全流程。若检查显示为 Expected 或 Waiting，说明 Maintainer 尚未手动批准运行 CI 脚本——这不是报错，也无需改代码，只需等待。",
      "成熟项目的 Review 更多是在讨论项目风格和用户预期：例如代码应放在 .py 示例库还是 Jupyter Notebook、代码是否会误导用户在生产环境产生反模式。应对策略是认可建议、解释动机，并明确表示愿意遵循项目的最终架构决定。",
      "开源维护是批处理工作模式。建议 3 天内不催促；若 CI 跑完且 5–7 天无回应，可进行一次礼貌的轻提醒（Ping），初衷应是「是否需要更多上下文」而非催促合并。",
      "视角的切换是最大收获。一个容易被 Merge 的 PR 通常具备：Scope 足够小（解决一个具体问题）、低维护成本（不破坏现有结构、逻辑清晰）、尊重节奏（通过规范格式减轻审查负担）。",
      "总结：开源贡献本质上是加入一个复杂的协作系统。当你开始考虑代码的长期维护成本和用户误用风险时，你的 PR 离合并就不远了。"
    ]
  },
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
