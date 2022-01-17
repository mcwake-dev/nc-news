import * as dayjs from "dayjs";

import VoteControls from "../VoteControls";
import DeleteComment from "../DeleteComment";
import styles from "./CommentCard.module.css";

const CommentCard = ({
  comment: { author, body, comment_id, created_at, votes },
  setComments,
}) => {
  return (
    <article className={styles.comment}>
      <header>
        <span className={styles.date}>{`${dayjs(created_at).format(
          "ddd D MMM YYYY"
        )} at ${dayjs(created_at).format("HH:mm")}`}</span>
        <span className={styles.author}>{author} said:</span>
        <VoteControls item_id={comment_id} votes={votes} voteType={"comment"} />
      </header>
      <main>
        <p></p>
        {body}
      </main>
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
