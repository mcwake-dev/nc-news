import { useState, useEffect } from "react";

import { setVotes as setCommentVotes } from "../../api/comments";
import { setVotes as setArticleVotes } from "../../api/articles";
import Loading from "../Loading";
import Authenticated, { AUTHENTICATED_ONLY } from "../Authenticated";
import styles from "./VoteControls.module.css";

const VoteControls = ({ item_id, votes, voteType, setIsLoading, setError }) => {
  const [currentVotes, setCurrentVotes] = useState(0);

  const updateVotes = (vote) => {
    let voteApi;

    switch (voteType) {
      case "comment":
        voteApi = setCommentVotes;
        break;
      case "article":
        voteApi = setArticleVotes;
        break;
      default:
        throw new Error("Invalid vote type provided!");
    }

    setCurrentVotes((current) => current + vote);
    setIsLoading(true);
    setError(null);
    voteApi(item_id, vote)
      .catch((err) => {
        setError(err);
        setCurrentVotes((current) => current - vote);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    setCurrentVotes(() => votes);
  }, [votes, setIsLoading]);

  return (
    <div className={styles.voteControls}>
      <button onClick={(ev) => updateVotes(1)}>👍</button>
      <span>{currentVotes}</span>
      <button onClick={(ev) => updateVotes(-1)}>👎</button>
    </div>
  );
};

export default Authenticated(
  Loading(VoteControls, "Updating votes...", false),
  AUTHENTICATED_ONLY
);
