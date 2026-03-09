import { articles } from "@/data/articles";
import { weeklyEntries } from "@/data/weekly";
import { aiLearningEntries } from "@/data/aiLearning";
import { monthlyOKRs } from "@/data/okr";
import { KRScore, MonthlyOKR } from "@/lib/types";

export const getWeeklyEntries = () => weeklyEntries;

export const getWeeklyEntry = (year: number, month: number, week: number) =>
  weeklyEntries.find(
    (entry) => entry.year === year && entry.month === month && entry.week === week
  );

export const getArticles = () => articles;

export const getArticle = (slug: string) =>
  articles.find((article) => article.slug === slug);

export const getAILearningEntries = () =>
  [...aiLearningEntries].sort((a, b) => (b.date > a.date ? 1 : -1));

export const getAILearningEntry = (slug: string) =>
  aiLearningEntries.find((entry) => entry.slug === slug);

export const getMonthlyOKRs = () => monthlyOKRs;

export const getMonthlyOKR = (year: number, month: number) =>
  monthlyOKRs.find((okr) => okr.year === year && okr.month === month);

export const getLatestMonthlyOKR = () =>
  [...monthlyOKRs].sort((a, b) => {
    if (a.year !== b.year) return b.year - a.year;
    return b.month - a.month;
  })[0];

const getLatestKRScore = (okr: MonthlyOKR): KRScore[] =>
  okr.objectives.flatMap((objective) =>
    objective.keyResults.map((kr) => {
      if (kr.progress.length === 0) return 0;
      return kr.progress[kr.progress.length - 1].score;
    })
  );

export const getKRCompletionRatio = (okr: MonthlyOKR) => {
  const scores = getLatestKRScore(okr);
  if (scores.length === 0) return 0;

  const total = scores.reduce<number>((sum, score) => sum + score, 0);
  const average = total / scores.length;
  return Math.round(average * 100);
};

export const getWeeklyEntriesByYear = () => {
  const yearMap = new Map<number, Map<number, typeof weeklyEntries>>();
  weeklyEntries.forEach((entry) => {
    if (!yearMap.has(entry.year)) yearMap.set(entry.year, new Map());
    const monthMap = yearMap.get(entry.year)!;
    if (!monthMap.has(entry.month)) monthMap.set(entry.month, []);
    monthMap.get(entry.month)!.push(entry);
  });
  return Array.from(yearMap.entries())
    .sort((a, b) => b[0] - a[0])
    .map(([year, monthMap]) => ({
      year,
      months: Array.from(monthMap.entries())
        .sort((a, b) => b[0] - a[0])
        .map(([month, entries]) => ({ month, entries })),
    }));
};

export const getTagCounts = () => {
  const counts = new Map<string, number>();
  const addTags = (tags: string[]) =>
    tags.forEach((tag) => counts.set(tag, (counts.get(tag) ?? 0) + 1));
  weeklyEntries.forEach((e) => {
    addTags(e.tags);
    e.events.forEach((ev) => addTags(ev.tags));
  });
  articles.forEach((e) => addTags(e.tags));
  aiLearningEntries.forEach((e) => addTags(e.tags));
  return Array.from(counts.entries())
    .sort((a, b) => b[1] - a[1])
    .map(([tag, count]) => ({ tag, count }));
};

export const getAllTags = () => {
  const tags = new Set<string>();
  weeklyEntries.forEach((entry) => entry.tags.forEach((tag) => tags.add(tag)));
  articles.forEach((article) => article.tags.forEach((tag) => tags.add(tag)));
  aiLearningEntries.forEach((entry) => entry.tags.forEach((tag) => tags.add(tag)));
  return Array.from(tags).sort();
};

export const filterByTag = (tag: string) => ({
  weekly: weeklyEntries.filter((entry) => entry.tags.includes(tag)),
  articles: articles.filter((article) => article.tags.includes(tag)),
  aiLearning: aiLearningEntries.filter((entry) => entry.tags.includes(tag))
});

export const searchContent = (query: string) => {
  const normalized = query.trim().toLowerCase();
  if (!normalized) {
    return { weekly: weeklyEntries, articles, aiLearning: aiLearningEntries };
  }

  const matches = (value: string) => value.toLowerCase().includes(normalized);

  return {
    weekly: weeklyEntries.filter(
      (entry) =>
        matches(entry.title) ||
        matches(entry.summary) ||
        entry.tags.some(matches) ||
        entry.events.some(
          (event) => matches(event.title) || matches(event.detail)
        )
    ),
    articles: articles.filter(
      (article) =>
        matches(article.title) ||
        matches(article.summary) ||
        article.tags.some(matches) ||
        article.content.some(matches)
    ),
    aiLearning: aiLearningEntries.filter(
      (entry) =>
        matches(entry.title) ||
        matches(entry.summary) ||
        matches(entry.topic) ||
        entry.tags.some(matches) ||
        entry.content.some(matches)
    )
  };
};
