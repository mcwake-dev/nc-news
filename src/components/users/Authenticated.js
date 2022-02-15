import { useContext } from "react";

import { UserContext } from "../../contexts/User";

export const AUTHENTICATED_ONLY = true;
export const UNAUTHENTICATED_ONLY = false;

const Authenticated = (WrappedComponent, needsAuthentication) => {
  function AuthenticatedHOC(props) {
    const { user, setUser } = useContext(UserContext);

    if ((user && needsAuthentication) || (!user && !needsAuthentication)) {
      return <WrappedComponent {...props} setUser={setUser} user={user} />;
    } else {
      return <></>;
    }
  }

  return AuthenticatedHOC;
};

export default Authenticated;
