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
