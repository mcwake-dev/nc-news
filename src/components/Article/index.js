import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { getArticle } from "../../api/articles";
import Loading from "../Loading";
import ArticleCard from "../ArticleCard";
import CommentList from "../CommentList";

const Article = ({ setIsLoading, setError }) => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    setError(null);
    getArticle(article_id)
      .then((newArticle) => {
        setArticle(newArticle);
      })
      .catch((err) => {
        setError({ ...err, message: "Failed to load article" });
      })
      .finally(() => setIsLoading(false));
  }, [article_id, setArticle, setIsLoading, setError]);

  return (
    <ArticleCard article={article}>
      <CommentList article_id={article_id} />
    </ArticleCard>
  );
};

export default Loading(Article, "Loading article...", true);
