import { useState, useEffect } from "react";

import { setVotes as setCommentVotes } from "../../api/comments";
import { setVotes as setArticleVotes } from "../../api/articles";
import Loading from "../Loading";
import styles from "./VoteControls.module.css";

const VoteControls = ({ item_id, votes, voteType, setIsLoading }) => {
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
    voteApi(item_id, vote)
      .catch((err) => {
        console.log(err);
        setCurrentVotes((current) => current - vote);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    setCurrentVotes(() => votes);
    setIsLoading(false);
  }, [votes, setIsLoading]);

  return (
    <div className={styles.voteControls}>
      <button onClick={(ev) => updateVotes(1)}>👍</button>
      <span>{currentVotes}</span>
      <button onClick={(ev) => updateVotes(-1)}>👎</button>
    </div>
  );
};

export default Loading(VoteControls, "Updating votes...");
