import { useState, useEffect } from "react";
import { mostRecentArticles } from "../../api/articles";
import SidebarArticleList from "../SidebarArticleList";

const RecentArticles = () => {
  const [recentArticles, setRecentArticles] = useState([]);

  useEffect(() => {
    mostRecentArticles()
      .then((articles) => {
        setRecentArticles(articles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setRecentArticles]);

  return (
    <SidebarArticleList
      title={"Most Recent Articles"}
      articles={recentArticles}
    />
  );
};

export default RecentArticles;
