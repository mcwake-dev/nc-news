import { API } from "./constants";

export const setVotes = async (comment_id, inc_votes) => {
  const url = new URL(`${API}/comments/${comment_id}`);
  const response = await fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ inc_votes }),
  });
  const data = await response.json();

  if (response.status !== 200) {
    throw new Error("Voting failed!");
  }

  return data;
};
