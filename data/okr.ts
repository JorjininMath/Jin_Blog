import { MonthlyOKR } from "@/lib/types";

export const monthlyOKRs: MonthlyOKR[] = [
  {
    id: "2026-03",
    year: 2026,
    month: 3,
    theme: "Research execution, career momentum, and capability building",
    objectives: [
      {
        id: "o1",
        title: "推进 CKME-CP 到可汇报、可投稿状态",
        why: "研究主线决定长期竞争力，需要持续把结果沉淀为可复用资产。",
        keyResults: [
          {
            id: "o1-kr1",
            title: "完成量化估计（quantile estimation）理论章节与配套实验",
            metric: "Theory section drafted + experiment rounds completed",
            target: "Section drafted + >= 1 experiment round with summary",
            current: "Not started",
            status: "not_started",
            progress: [
              {
                weekId: "2026-03-w1",
                score: 0.3,
                note: "Collected CKME-CP progress points for presentation."
              }
            ]
          },
          {
            id: "o1-kr2",
            title: "完成 conditional coverage 试验实验并写下记录",
            metric: "Experiment rounds completed",
            target: ">= 1 trial run with notes written",
            current: "Round 1 in progress",
            status: "on_track",
            progress: [
              {
                weekId: "2026-03-w1",
                score: 0.3,
                note: "Started CDF consistency and conditional coverage experiments."
              }
            ]
          },
          {
            id: "o1-kr3",
            title: "产出 WSC 12 页投稿版本",
            metric: "WSC draft page count",
            target: "Draft <= 12 pages exported/shared",
            current: "Not started",
            status: "not_started",
            progress: []
          },
          {
            id: "o1-kr4",
            title: "每周形成一次研究推进记录",
            metric: "Weekly evidence count",
            target: ">= 4 weekly updates in March",
            current: "1/4",
            status: "on_track",
            progress: [
              {
                weekId: "2026-03-w1",
                score: 0.3,
                note: "Research updates logged in weekly note."
              }
            ]
          }
        ]
      },
      {
        id: "o2",
        title: "建立稳定求职漏斗并提升有效反馈率",
        why: "稳定投递和跟进节奏比短期冲刺更可持续。",
        keyResults: [
          {
            id: "o2-kr1",
            title: "3 月新增投递数量达标",
            metric: "Applications submitted",
            target: ">= 60",
            current: "0/60",
            status: "not_started",
            progress: []
          },
          {
            id: "o2-kr2",
            title: "每周完成跟进行动",
            metric: "Follow-up actions",
            target: ">= 8 total",
            current: "0/8",
            status: "not_started",
            progress: []
          },
          {
            id: "o2-kr3",
            title: "获取实质性招聘进展",
            metric: "Meaningful pipeline events",
            target: ">= 3 (OA/interview/HR call)",
            current: "1/3",
            status: "on_track",
            progress: [
              {
                weekId: "2026-03-w2",
                score: 0.3,
                note: "Completed interview with Zhiyuan (3.12); reviewed sensor noise handling, multi-objective optimization, and RAG project deep-dives."
              }
            ]
          }
        ]
      },
      {
        id: "o3",
        title: "将学习与复盘转化为公开内容资产",
        why: "对外表达会倒逼结构化思考，并形成长期复利。",
        keyResults: [
          {
            id: "o3-kr1",
            title: "发布 AI 学习或技术复盘",
            metric: "Posts published",
            target: ">= 2",
            current: "2/2",
            status: "completed",
            progress: [
              {
                weekId: "2026-03-w2",
                score: 1.0,
                note: "Published '从 Shape 到 Stride：为什么转置后 Tensor 会变成 Non-Contiguous?' (3.9); finished AI learning articles for 01 project (3.10). Target met."
              }
            ]
          },
          {
            id: "o3-kr2",
            title: "每周周记按时更新",
            metric: "Weekly notes coverage",
            target: "4/4 weeks in March",
            current: "2/4",
            status: "on_track",
            progress: [
              {
                weekId: "2026-03-w1",
                score: 0.3,
                note: "March week 1 note published."
              },
              {
                weekId: "2026-03-w2",
                score: 0.5,
                note: "Week 2 note published covering midterm grading, AI learning articles, and interview prep."
              }
            ]
          },
          {
            id: "o3-kr3",
            title: "每周完成一次复盘并写下周 Top 3",
            metric: "Weekly review sessions",
            target: ">= 4",
            current: "2/4",
            status: "on_track",
            progress: [
              {
                weekId: "2026-03-w1",
                score: 0.3,
                note: "Weekly reflection captured with next actions."
              },
              {
                weekId: "2026-03-w2",
                score: 0.5,
                note: "Reviewed week completions against OKR; identified O1 research gap, strong O3 delivery."
              }
            ]
          }
        ]
      },
      {
        id: "o4",
        title: "保持面试编程能力热度",
        why: "求职管道活跃，面试随时可能到来，编程手感必须持续维护。",
        keyResults: [
          {
            id: "o4-kr1",
            title: "完成每周 LeetCode 题目集",
            metric: "Weekly problem sets completed",
            target: ">= 3 weeks completed in March",
            current: "0/3",
            status: "not_started",
            progress: []
          },
          {
            id: "o4-kr2",
            title: "完成公司专项练习（京东等）",
            metric: "Company-specific practice sessions",
            target: ">= 2 sessions",
            current: "0/2",
            status: "not_started",
            progress: []
          }
        ]
      },
      {
        id: "o5",
        title: "推进 AI 项目动手能力，形成实验证据",
        why: "项目完成度是简历可信度和面试深度的直接来源。",
        keyResults: [
          {
            id: "o5-kr1",
            title: "完成 PyTorch 项目 02 和 03",
            metric: "Projects completed",
            target: "Both project 02 and 03 done",
            current: "0/2",
            status: "not_started",
            progress: []
          },
          {
            id: "o5-kr2",
            title: "复盘 RLHF 项目并完成一次训练尝试",
            metric: "Training runs attempted",
            target: ">= 1 end-to-end run with feasibility decision",
            current: "Not started",
            status: "not_started",
            progress: []
          },
          {
            id: "o5-kr3",
            title: "调研 AutoResearch 方向并写出资源摘要",
            metric: "Survey notes written",
            target: "1-page summary or structured bullet notes",
            current: "Not started",
            status: "not_started",
            progress: []
          }
        ]
      },
      {
        id: "o6",
        title: "维持健康基线，体重与体型可见改善",
        why: "身体状态直接影响精力与专注力，健康是所有目标的底层保障。",
        keyResults: [
          {
            id: "o6-kr1",
            title: "日均步数保持 7000+ 步",
            metric: "Daily step average",
            target: ">= 7,000 steps/day average across March",
            current: "Tracking",
            status: "on_track",
            progress: []
          },
          {
            id: "o6-kr2",
            title: "体重减少 0.5kg，腰围降至 32 英寸",
            metric: "Weight and waist measurement",
            target: "-0.5 kg and waist <= 32 inches by month end",
            current: "Tracking",
            status: "not_started",
            progress: []
          },
          {
            id: "o6-kr3",
            title: "完成燕帅琦健身课程第 1 周",
            metric: "Course sessions completed",
            target: "Week 1 all sessions done",
            current: "Not started",
            status: "not_started",
            progress: []
          }
        ]
      }
    ],
    nonOkrOps: [
      "OPT application timeline and document checklist",
      "Graduate process admin tasks and deadline tracking",
      "Tax return filing"
    ]
  }
];
