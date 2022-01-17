import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import Loading from "../Loading";
import ArticleCard from "../ArticleCard";
import ArticleControls from "../ArticleControls";
import { getArticles } from "../../api/articles";

const ArticleList = ({ setIsLoading, setError }) => {
  const { author, topic, sort, order } = useParams();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setError(null);
    getArticles(author, topic, sort, order)
      .then((newArticles) => {
        setArticles(newArticles);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [author, order, setIsLoading, setError, sort, topic]);

  return (
    <>
      <ArticleControls />
      <div>
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
