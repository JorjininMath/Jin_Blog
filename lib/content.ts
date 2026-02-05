import { articles } from "@/data/articles";
import { weeklyEntries } from "@/data/weekly";
import { aiLearningEntries } from "@/data/aiLearning";

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
