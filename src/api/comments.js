import axios from "axios";
import { API } from "./constants";

export const setVotes = async (comment_id, inc_votes) => {
  const url = new URL(`${API}/comments/${comment_id}`);
  const response = await axios.patch(url, { inc_votes });

  if (response.status !== 200) {
    throw new Error("Voting failed!");
  }

  return response.data.comment;
};

export const deleteComment = async (comment_id) => {
  const url = new URL(`${API}/comments/${comment_id}`);
  const response = await axios.delete(url);

  if (response.status !== 204) {
    throw new Error("Delete Comment failed!");
  }

  return response.status;
};

export const mostRecentComments = async () => {
  const url = new URL(`${API}/comments/recent`);
  const response = await axios.get(url);

  if (response.status !== 200) {
    throw new Error("Get Recent Comments failed");
  }

  return response.data.comments;
};
