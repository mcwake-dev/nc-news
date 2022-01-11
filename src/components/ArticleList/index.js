import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Loading from "../Loading";
import ArticleCard from "../ArticleCard";
import ArticleControls from "../ArticleControls";
import { getArticles } from "../../api/articles";
import styles from "./ArticleList.module.css";

const ArticleList = ({ setIsLoading }) => {
  const { topic, sort, order } = useParams();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles(topic, sort, order)
      .then((newArticles) => {
        setArticles(newArticles);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [order, setIsLoading, sort, topic]);

  return (
    <>
      <ArticleControls />
      <div className={styles.articleList}>
        {articles.map((article) => (
          <ArticleCard key={article.article_id} article={article} />
        ))}
      </div>
    </>
  );
};

export default Loading(ArticleList, "Loading Articles...");
