import * as dayjs from "dayjs";

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
        <div>
          <p>{dayjs(created_at).format("ddd D MMM YYYY HH:mm")}</p>
          <p>
            <b>{author}</b> said:
          </p>
        </div>
        <VoteControls item_id={comment_id} votes={votes} voteType={"comment"} />
      </header>
      <hr />
      <main>{body}</main>
      <footer>
        <DeleteComment
          comment_id={comment_id}
          author={author}
          setComments={setComments}
        />
      </footer>
    </article>
  );
};

export default CommentCard;
