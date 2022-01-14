import { useEffect, useContext } from "react";

import { UserContext } from "../../contexts/User";

const Logout = () => {
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    setUser(null);
  });

  return <></>;
};

export default Logout;
