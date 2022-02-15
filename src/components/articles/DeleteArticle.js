import { useNavigate } from "react-router-dom";

import Authenticated, { AUTHENTICATED_ONLY } from "../users/Authenticated";
import Loading, { LOADING, LOADED } from "../Loading";
import { deleteArticle } from "../../api/articles";

const DeleteArticle = ({
  author,
  user: { username },
  setIsLoading,
  setError,
  article_id,
}) => {
  const navigate = useNavigate();
  const deleteThisArticle = () => {
    setIsLoading(LOADING);
    setError(null);
    deleteArticle(article_id)
      .then((status) => {
        navigate("/");
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(LOADED);
      });
  };

  if (author === username) {
    return (
      <button onClick={(ev) => deleteThisArticle()}>Delete My Article</button>
    );
  } else {
    return "";
  }
};

export default Loading(
  Authenticated(DeleteArticle, AUTHENTICATED_ONLY),
  "Deleting Article...",
  LOADED
);
