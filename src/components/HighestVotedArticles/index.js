import { useState, useEffect } from "react";

import { highestVotedArticles } from "../../api/articles";
import SidebarArticleList from "../SidebarArticleList";

const HighestVotedArticles = () => {
  const [highestArticles, setHighestArticles] = useState([]);

  useEffect(() => {
    highestVotedArticles()
      .then((articles) => {
        setHighestArticles(articles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setHighestArticles]);

  return (
    <SidebarArticleList
      title={"Highest Voted Articles"}
      articles={highestArticles}
    />
  );
};

export default HighestVotedArticles;
