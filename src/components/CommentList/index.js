import { useEffect, useState } from "react";

import { getArticleComments } from "../../api/articles";
import Loading from "../Loading";

const CommentList = ({ article_id, setIsLoading }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getArticleComments(article_id)
      .then((newComments) => {
        console.log(newComments);
        setComments(newComments);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [setComments, article_id, setIsLoading]);
  return <div>CommentList</div>;
};

export default Loading(CommentList, "Loading comments...");
