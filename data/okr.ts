import { MonthlyOKR } from "@/lib/types";

export const monthlyOKRs: MonthlyOKR[] = [
  {
    id: "2026-03",
    year: 2026,
    month: 3,
    theme: "Research execution and career momentum",
    objectives: [
      {
        id: "o1",
        title: "推进 CKME-CP 到可汇报、可投稿状态",
        why: "研究主线决定长期竞争力，需要持续把结果沉淀为可复用资产。",
        keyResults: [
          {
            id: "o1-kr1",
            title: "完成一版向刘老师汇报的研究 slides",
            metric: "Slides deck completion",
            target: "1 deck with current results and next-step plan",
            current: "Outline drafted",
            status: "on_track",
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
            title: "完成 CDF consistency 与 conditional coverage 核心实验",
            metric: "Experiment rounds completed",
            target: ">= 2 rounds with summary notes",
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
            target: ">= 12",
            current: "0/12",
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
      }
    ],
    nonOkrOps: [
      "OPT application timeline and document checklist",
      "Graduate process admin tasks and deadline tracking"
    ]
  }
];
