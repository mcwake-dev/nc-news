import { useState, useEffect } from "react";

import Loading from "../Loading";
import styles from "./CommentForm.module.css";
import { postComment } from "../../api/articles";
import { DUMMY_USERNAME as username } from "../../api/constants";

const CommentForm = ({ article_id, setIsLoading, setError, setComments }) => {
  const [body, setBody] = useState("");

  const validateAndPostComment = () => {
    if (body.length > 0) {
      setIsLoading(true);
      setError(null);
      postComment(article_id, username, body)
        .then((comment) => {
          setComments((current) => [comment, ...current]);
          setBody("");
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      throw new Error("You must enter a comment");
    }
  };

  useEffect(() => {
    setIsLoading(false);
  });

  return (
    <details className={styles.commentForm}>
      <summary>New Comment</summary>
      <p>
        Posting as: <strong>{username}</strong>
      </p>
      <p>
        Characters left: <strong>{1000 - body.length}</strong>
      </p>
      <div className={styles.textareaContainer}>
        <textarea
          value={body}
          onChange={(ev) => setBody(ev.target.value)}
          maxLength="1000"
        />
        <br />
        <button onClick={(ev) => validateAndPostComment()}>Post Comment</button>
      </div>
    </details>
  );
};

export default Loading(CommentForm, "Posting comment...");
