import styles from "./CommentCard.module.css";
import { useState, useEffect } from "react";
import { setVotes } from "../../api/comments";
import Loading from "../Loading";

const CommentCard = ({
  comment: { author, body, comment_id, created_at, votes },
  setIsLoading,
}) => {
  const [commentVotes, setCommentVotes] = useState(votes);

  const updateVotes = (vote) => {
    setCommentVotes((current) => current + vote);

    setIsLoading(true);
    setVotes(comment_id, vote)
      .catch((err) => {
        setCommentVotes((current) => current - vote);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    setIsLoading(false);
  });

  return (
    <article className={styles.commentCard}>
      <hr />
      <header className={styles.commentCardHeader}>
        <div className={styles.voteControls}>
          <button onClick={(ev) => updateVotes(1)}>👍</button>
          <span>{commentVotes}</span>
          <button onClick={(ev) => updateVotes(-1)}>👎</button>
        </div>
        <div>
          <b>{author}</b> said:
        </div>
        <div className={styles.commentDate}>
          {new Date(created_at).toLocaleString()}
        </div>
      </header>
      <hr />
      <main>{body}</main>
      <footer></footer>
    </article>
  );
};

export default Loading(CommentCard, "Updating comment...");
