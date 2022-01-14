import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../../contexts/User";

const Logout = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    setUser(null);
    navigate("/");
  });

  return <></>;
};

export default Logout;
