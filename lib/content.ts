import { articles } from "@/data/articles";
import { weeklyEntries } from "@/data/weekly";

export const getWeeklyEntries = () => weeklyEntries;

export const getWeeklyEntry = (year: number, month: number, week: number) =>
  weeklyEntries.find(
    (entry) => entry.year === year && entry.month === month && entry.week === week
  );

export const getArticles = () => articles;

export const getArticle = (slug: string) =>
  articles.find((article) => article.slug === slug);

export const getAllTags = () => {
  const tags = new Set<string>();
  weeklyEntries.forEach((entry) => entry.tags.forEach((tag) => tags.add(tag)));
  articles.forEach((article) => article.tags.forEach((tag) => tags.add(tag)));
  return Array.from(tags).sort();
};

export const filterByTag = (tag: string) => ({
  weekly: weeklyEntries.filter((entry) => entry.tags.includes(tag)),
  articles: articles.filter((article) => article.tags.includes(tag))
});

export const searchContent = (query: string) => {
  const normalized = query.trim().toLowerCase();
  if (!normalized) {
    return { weekly: weeklyEntries, articles };
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
    )
  };
};
