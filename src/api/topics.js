import axios from "axios";

import { API } from "./constants";

export const getTopics = async () => {
  const url = new URL(`${API}/topics`);
  const response = await axios.get(url);

  return response.data.topics;
};
