import styles from "./CommentCard.module.css";
import VoteControls from "../VoteControls";

const CommentCard = ({
  comment: { author, body, comment_id, created_at, votes },
}) => {
  return (
    <article className={styles.commentCard}>
      <hr />
      <header className={styles.commentCardHeader}>
        <VoteControls item_id={comment_id} votes={votes} voteType={"comment"} />
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

export default CommentCard;
