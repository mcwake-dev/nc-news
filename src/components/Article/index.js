import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { getArticle } from "../../api/articles";
import Loading from "../Loading";
import ArticleCard from "../ArticleCard";
import CommentList from "../CommentList";

const Article = ({ setIsLoading }) => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    getArticle(article_id)
      .then((newArticle) => {
        setArticle(newArticle);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  }, [article_id, setArticle, setIsLoading]);

  return (
    <ArticleCard article={article}>
      <CommentList article_id={article_id} />
    </ArticleCard>
  );
};

export default Loading(Article, "Loading article...");
