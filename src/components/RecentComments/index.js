import { useState, useEffect } from "react";
import { mostRecentComments } from "../../api/comments";
import SidebarCommentList from "../SidebarCommentList";

const RecentComments = () => {
  const [recentComments, setRecentComments] = useState([]);

  useEffect(() => {
    mostRecentComments()
      .then((comments) => {
        setRecentComments(comments);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setRecentComments]);

  return (
    <SidebarCommentList
      title={"Most Recent Comments"}
      comments={recentComments}
    />
  );
};

export default RecentComments;
