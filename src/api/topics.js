import { API } from "./constants";

export const getTopics = async () => {
  const url = new URL(`${API}/topics`);
  const response = await fetch(url);
  const data = await response.json();

  return data.topics;
};
