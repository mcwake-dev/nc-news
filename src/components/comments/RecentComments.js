import { useState, useEffect } from "react";
import { mostRecentComments } from "../../api/comments";
import SidebarCommentList from "./SidebarCommentList";
import Loading, { LOADING } from "../Loading";

const RecentComments = ({ setIsLoading, setError }) => {
  const [recentComments, setRecentComments] = useState([]);

  useEffect(() => {
    setError(null);
    mostRecentComments()
      .then((comments) => {
        setRecentComments(comments);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [setRecentComments, setError, setIsLoading]);

  return (
    <SidebarCommentList
      title={"Most Recent Comments"}
      comments={recentComments}
    />
  );
};

export default Loading(
  RecentComments,
  "Loading Most Recent Comments...",
  LOADING
);
