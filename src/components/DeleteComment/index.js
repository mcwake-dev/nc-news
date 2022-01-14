import { deleteComment } from "../../api/comments";
import Authenticated, { AUTHENTICATED_ONLY } from "../Authenticated";
import Loading, { LOADED, LOADING } from "../Loading";

const DeleteComment = ({
  setError,
  setIsLoading,
  setComments,
  comment_id,
  author,
  user: { username },
}) => {
  const deleteMyComment = () => {
    setError(null);
    setIsLoading(LOADING);
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

  console.log(author, username, author === username);

  if (author === username) {
    return (
      <button onClick={(ev) => deleteMyComment()}>Delete My Comment</button>
    );
  } else {
    return <></>;
  }
};

export default Authenticated(
  Loading(DeleteComment, "Deleting comment...", LOADED),
  AUTHENTICATED_ONLY
);
