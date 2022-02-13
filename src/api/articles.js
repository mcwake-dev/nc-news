import axios from "axios";

import { API } from "./constants";

export const getArticles = async (author, topic, sort, order) => {
  const url = new URL(`${API}/articles`);

  if (author && author !== "all") {
    url.searchParams.append("author", author);
  }

  if (topic && topic !== "all") {
    url.searchParams.append("topic", topic);
  }

  if (sort) {
    url.searchParams.append("sort_by", sort);
  }

  if (order) {
    url.searchParams.append("order", order);
  }

  const response = await axios.get(url);

  return response.data.articles;
};

export const getArticle = async (article_id) => {
  console.log(article_id);
  const url = new URL(`${API}/articles/${article_id}`);
  const response = await axios.get(url);

  return response.data.article;
};

export const getArticleComments = async (article_id) => {
  const url = new URL(`${API}/articles/${article_id}/comments`);
  const response = await axios.get(url);

  return response.data.comments;
};

export const setVotes = async (article_id, inc_votes) => {
  const url = new URL(`${API}/articles/${article_id}`);
  const response = await axios.patch(url, { inc_votes });

  if (response.status !== 200) {
    throw new Error("Voting failed!");
  }

  return response.data.comment;
};

export const postComment = async (article_id, username, commentBody) => {
  const url = new URL(`${API}/articles/${article_id}/comments`);
  const response = await axios.post(url, { body: commentBody, username });

  if (response.status !== 201) {
    throw new Error("Post Comment failed!");
  }

  return response.data.comment;
};

export const deleteArticle = async (article_id) => {
  const url = new URL(`${API}/articles/${article_id}`);
  const response = await axios.delete(url);

  if (response.status !== 204) {
    throw new Error("Delete Article failed!");
  }

  return response.status;
};

export const postArticle = async (author, title, body, topic) => {
  const url = new URL(`${API}/articles`);
  const response = await axios.post(url, {
    author,
    title,
    body,
    topic,
  });

  if (response.status !== 201) {
    throw new Error("Post Article failed!");
  }

  return response.data.article;
};

export const mostRecentArticles = async () => {
  const url = new URL(`${API}/articles/recent`);
  const response = await axios.get(url);

  if (response.status !== 200) {
    throw new Error("Get Recent Articles failed!");
  }

  return response.data.articles;
};

export const highestVotedArticles = async () => {
  const url = new URL(`${API}/articles/highest`);
  const response = await axios.get(url);

  if (response.status !== 200) {
    throw new Error("Get Recent Articles failed!");
  }

  return response.data.articles;
};
