import { useState } from "react";
import { getUser } from "../../api/users";

import Authenticated, { UNAUTHENTICATED_ONLY } from "../Authenticated";
import Loading, { LOADING, LOADED } from "../Loading";
import styles from "./Login.module.css";

const Login = ({ setIsLoading, setError, setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const logMeIn = () => {
    setError(null);
    setIsLoading(LOADING);
    getUser(username)
      .then((user) => {
        setUser(user);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(LOADED);
      });
  };

  return (
    <div className={styles.login}>
      <label htmlFor="username">Username: </label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(ev) => setUsername(ev.target.value)}
      />
      <label htmlFor="password">Password: </label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(ev) => setPassword(ev.target.value)}
      />
      <button onClick={(ev) => logMeIn()}>Log In</button>
    </div>
  );
};

export default Authenticated(Loading(Login, LOADED), UNAUTHENTICATED_ONLY);
