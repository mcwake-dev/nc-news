import { API } from "./constants";

export const getArticles = async (topic, sort, order) => {
  const url = new URL(`${API}/articles`);

  if (topic && topic !== "all") {
    url.searchParams.append("topic", topic);
  }

  if (sort) {
    url.searchParams.append("sort_by", sort);
  }

  if (order) {
    url.searchParams.append("order", order);
  }

  const response = await fetch(url);
  const data = await response.json();

  return data.articles;
};

export const getArticle = async (article_id) => {
  const url = new URL(`${API}/articles/${article_id}`);
  const response = await fetch(url);
  const data = await response.json();

  return data.article;
};

export const getArticleComments = async (article_id) => {
  const url = new URL(`${API}/articles/${article_id}/comments`);
  const response = await fetch(url);
  const data = await response.json();

  return data.comments;
};
