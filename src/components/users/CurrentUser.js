import Authenticated, { AUTHENTICATED_ONLY } from "../../Authenticated";
import PrivilegedLink from "../../PrivilegedLink";

const CurrentUser = ({ user: { username, avatar_url, name } }) => {
  return (
    <details>
      <summary>
        <img src={avatar_url} alt={`${username}'s avatar`} />
      </summary>
      <div>
        <div>{username}</div>
        <div>{name}</div>
        <PrivilegedLink title={"Post Article"} url={"/articles/new"} />
        <PrivilegedLink title={"Log Out"} url={"/users/logout"} />
      </div>
    </details>
  );
};

export default Authenticated(CurrentUser, AUTHENTICATED_ONLY);
