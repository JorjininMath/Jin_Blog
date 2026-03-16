export type WeeklyEntry = {
  id: string;
  title: string;
  year: number;
  month: number;
  week: number;
  dateRange: string;
  summary: string;
  tags: string[];
  highlights: string[];
  reflections: string[];
  /** 本周计划 / to-do */
  thisWeekPlans?: string[];
  /** 下周计划 */
  plans: string[];
  events: { time: string; title: string; detail: string; tags: string[] }[];
  relatedArticles: string[];
};

export type Article = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  readingTime: string;
  content: string[];
};

export type AILearningEntry = {
  slug: string;
  title: string;
  date: string;
  topic: string;
  summary: string;
  tags: string[];
  resources?: { label: string; url: string }[];
  content: string[];
};

export type OKRStatus =
  | "not_started"
  | "on_track"
  | "at_risk"
  | "done"
  | "completed";

export type KRScore = 0 | 0.3 | 0.5 | 0.7 | 1;

export type KRProgressEntry = {
  weekId: string;
  score: KRScore;
  note?: string;
};

export type KeyResult = {
  id: string;
  title: string;
  metric: string;
  target: string;
  current: string;
  status: OKRStatus;
  progress: KRProgressEntry[];
};

export type Objective = {
  id: string;
  title: string;
  why: string;
  keyResults: KeyResult[];
};

export type MonthlyOKR = {
  id: string;
  year: number;
  month: number;
  theme: string;
  objectives: Objective[];
  nonOkrOps?: string[];
};
