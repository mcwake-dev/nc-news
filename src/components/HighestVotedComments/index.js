import { useState, useEffect } from "react";

import { highestVotedComments } from "../../api/comments";
import SidebarCommentList from "../SidebarCommentList";

const HighestVotedComments = () => {
  const [highestComments, setHighestComments] = useState([]);

  useEffect(() => {
    highestVotedComments()
      .then((comments) => {
        setHighestComments(comments);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setHighestComments]);

  return (
    <SidebarCommentList
      title={"Highest Voted Comments"}
      comments={highestComments}
    />
  );
};

export default HighestVotedComments;
