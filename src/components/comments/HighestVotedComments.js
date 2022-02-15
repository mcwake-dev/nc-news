import { useState, useEffect } from "react";

import { highestVotedComments } from "../../api/comments";
import SidebarCommentList from "./SidebarCommentList";
import Loading, { LOADING } from "../Loading";

const HighestVotedComments = ({ setIsLoading, setError }) => {
  const [highestComments, setHighestComments] = useState([]);

  useEffect(() => {
    setError(null);
    highestVotedComments()
      .then((comments) => {
        setHighestComments(comments);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [setHighestComments, setError, setIsLoading]);

  return (
    <SidebarCommentList
      title={"Highest Voted Comments"}
      comments={highestComments}
    />
  );
};

export default Loading(
  HighestVotedComments,
  "Loading Highest-Rated Comments...",
  LOADING
);
