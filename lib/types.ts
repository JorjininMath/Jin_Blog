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
