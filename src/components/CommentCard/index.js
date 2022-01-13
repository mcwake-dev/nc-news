import styles from "./CommentCard.module.css";
import VoteControls from "../VoteControls";
import Loading from "../Loading";
import { deleteComment } from "../../api/comments";
import { DUMMY_USERNAME as username } from "../../api/constants";

const CommentCard = ({
  comment: { author, body, comment_id, created_at, votes },
  setComments,
  setIsLoading,
  setError,
}) => {
  const deleteMyComment = () => {
    setError(null);
    setIsLoading(true);
    deleteComment(comment_id)
      .then((status) => {
        setComments((current) =>
          current.filter((comment) => comment.comment_id !== comment_id)
        );
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
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

export default Loading(CommentCard, "Deleting comment...", false);
