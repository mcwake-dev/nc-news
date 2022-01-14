import { deleteComment } from "../../api/comments";
import Authenticated, { AUTHENTICATED_ONLY } from "../Authenticated";
import Loading, { LOADED, LOADING } from "../Loading";

const DeleteComment = ({
  setError,
  setIsLoading,
  setComments,
  comment_id,
  author,
  username,
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

  if (author === username) {
    return (
      <button onClick={(ev) => deleteMyComment()}>Delete This Comment</button>
    );
  } else {
    return <></>;
  }
};

export default Authenticated(
  Loading(DeleteComment, "Deleting comment...", LOADED),
  AUTHENTICATED_ONLY
);
