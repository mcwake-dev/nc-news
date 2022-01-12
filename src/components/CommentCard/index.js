import styles from "./CommentCard.module.css";
import VoteControls from "../VoteControls";
import { deleteComment } from "../../api/comments";

const CommentCard = ({
  comment: { author, body, comment_id, created_at, votes },
  username,
  setComments,
}) => {
  const deleteMyComment = () => {
    deleteComment(comment_id)
      .then((status) => {
        setComments((current) =>
          current.filter((comment) => comment.comment_id !== comment_id)
        );
      })
      .catch((err) => {
        console.log(err);
      })
      .finally();
  };

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
        {author === username ? (
          <button onClick={(ev) => deleteMyComment()}>
            Delete This Comment
          </button>
        ) : (
          ""
        )}
      </footer>
    </article>
  );
};

export default CommentCard;
