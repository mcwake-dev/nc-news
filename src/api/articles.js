import axios from "axios";

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

  const response = await axios.get(url);

  return response.data.articles;
};

export const getArticle = async (article_id) => {
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
  const data = await response.json();

  if (response.status !== 200) {
    throw new Error("Voting failed!");
  }

  return data;
};

export const postComment = async (article_id, username, commentBody) => {
  const url = new URL(`${API}/articles/${article_id}/comments`);
  const response = await axios.post(url, { body: commentBody, username });

  if (response.status !== 201) {
    throw new Error("Post Comment failed!");
  }

  return response.data.comment;
};
