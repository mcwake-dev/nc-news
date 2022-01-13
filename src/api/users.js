import axios from "axios";
import { API } from "./constants";

export const getUsers = async () => {
  const url = new URL(`${API}/users`);
  const response = await axios.get(url);

  return response.data.users;
};
