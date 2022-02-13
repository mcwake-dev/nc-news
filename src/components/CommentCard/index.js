import * as dayjs from "dayjs";

import VoteControls from "../VoteControls";
import DeleteComment from "../DeleteComment";

const CommentCard = ({
  comment: { author, body, comment_id, created_at, votes },
  setComments,
}) => {
  return (
    <article>
      <header>
        <span>{`${dayjs(created_at).format("ddd D MMM YYYY")} at ${dayjs(
          created_at
        ).format("HH:mm")}`}</span>
        <span>{author} said:</span>
        <VoteControls item_id={comment_id} votes={votes} voteType={"comment"} />
      </header>
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
