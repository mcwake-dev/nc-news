const API = "https://mcw-nc-news.herokuapp.com/api";

export const getArticles = async (topic, sort, order) => {
  const url = new URL(`${API}/articles`);

  if (topic) {
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
