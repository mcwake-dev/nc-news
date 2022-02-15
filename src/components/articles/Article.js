import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { getArticle } from "../../api/articles";
import Loading, { LOADING, LOADED } from "../Loading";
import ArticleCard from "./ArticleCard";
import CommentList from "../comments/CommentList";

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
      .finally(() => {
        setIsLoading(LOADED);
      });
  }, [article_id, setArticle, setError, setIsLoading]);

  return (
    <ArticleCard article={article}>
      <CommentList article_id={article_id} />
    </ArticleCard>
  );
};

export default Loading(Article, "Loading article...", LOADING);
