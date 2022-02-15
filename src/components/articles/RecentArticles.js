import { useState, useEffect } from "react";
import { mostRecentArticles } from "../../api/articles";
import SidebarArticleList from "./SidebarArticleList";
import Loading, { LOADING } from "../Loading";

const RecentArticles = ({ setIsLoading, setError }) => {
  const [recentArticles, setRecentArticles] = useState([]);

  useEffect(() => {
    setError(null);
    mostRecentArticles()
      .then((articles) => {
        setRecentArticles(articles);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [setRecentArticles, setError, setIsLoading]);

  return (
    <SidebarArticleList
      title={"Most Recent Articles"}
      articles={recentArticles}
    />
  );
};

export default Loading(
  RecentArticles,
  "Loading Most Recent Articles...",
  LOADING
);
