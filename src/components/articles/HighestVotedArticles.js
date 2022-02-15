import { useState, useEffect } from "react";

import { highestVotedArticles } from "../../api/articles";
import SidebarArticleList from "./SidebarArticleList";
import Loading, { LOADING } from "../Loading";

const HighestVotedArticles = ({ setIsLoading, setError }) => {
  const [highestArticles, setHighestArticles] = useState([]);

  useEffect(() => {
    setError(null);
    highestVotedArticles()
      .then((articles) => {
        setHighestArticles(articles);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [setHighestArticles, setError, setIsLoading]);

  return (
    <SidebarArticleList
      title={"Highest Voted Articles"}
      articles={highestArticles}
    />
  );
};

export default Loading(
  HighestVotedArticles,
  "Loading Highest-Rated Articles...",
  LOADING
);
