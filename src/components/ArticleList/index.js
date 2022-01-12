import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

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
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [order, setIsLoading, sort, topic]);

  return (
    <>
      <ArticleControls />
      <div className={styles.articleList}>
        {articles.map((article) => (
          <Link key={article.article_id} to={`/articles/${article.article_id}`}>
            <ArticleCard article={article} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Loading(ArticleList, "Loading Articles...");
