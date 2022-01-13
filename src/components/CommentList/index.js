import { useEffect, useState } from "react";
import CommentCard from "../CommentCard";

import { DUMMY_USERNAME as username } from "../../api/constants";
import { getArticleComments } from "../../api/articles";
import styles from "./CommentList.module.css";
import Loading from "../Loading";
import CommentForm from "../CommentForm";

const CommentList = ({ article_id, setIsLoading, setError }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    setError(null);
    getArticleComments(article_id)
      .then((newComments) => {
        setComments(newComments);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [setComments, article_id, setIsLoading, setError]);

  return (
    <>
      <section className={styles.commentForm}>
        <CommentForm
          article_id={article_id}
          username={username}
          setComments={setComments}
          comments={comments}
        />
      </section>
      <section className={styles.commentList}>
        {comments.map((comment) => (
          <CommentCard
            key={comment.comment_id}
            comment={comment}
            username={username}
            setComments={setComments}
          />
        ))}
      </section>
    </>
  );
};

export default Loading(CommentList, "Loading comments...", true);
