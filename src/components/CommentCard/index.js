import styles from "./CommentCard.module.css";
import VoteControls from "../VoteControls";
import DeleteComment from "../DeleteComment";

const CommentCard = ({
  comment: { author, body, comment_id, created_at, votes },
  setComments,
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
      <footer>
        <DeleteComment comment_id={comment_id} setComments={setComments} />
      </footer>
    </article>
  );
};

export default CommentCard;
