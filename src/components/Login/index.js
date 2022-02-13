import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { getUser } from "../../api/users";
import Authenticated, { UNAUTHENTICATED_ONLY } from "../Authenticated";
import Loading, { LOADING, LOADED } from "../Loading";

const Login = ({ setIsLoading, setError, setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const logMeIn = () => {
    setError(null);
    setIsLoading(LOADING);
    getUser(username)
      .then((user) => {
        setUser(user);
        navigate("/");
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(LOADED);
      });
  };

  return (
    <details>
      <summary>Log In</summary>
      <div>
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
        <button className="link primary" onClick={(ev) => logMeIn()}>
          Log In
        </button>
      </div>
    </details>
  );
};

export default Authenticated(Loading(Login, LOADED), UNAUTHENTICATED_ONLY);
