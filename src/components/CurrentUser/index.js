import Authenticated, { AUTHENTICATED_ONLY } from "../Authenticated";
import PrivilegedLink from "../PrivilegedLink";
import styles from "./CurrentUser.module.css";

const CurrentUser = ({ user: { username, avatar_url, name } }) => {
  return (
    <div className={styles.currentUser}>
      <div className={styles.avatar}>
        <img src={avatar_url} alt={`${username}'s avatar`} />
      </div>
      <div className={styles.username}>{username}</div>

      <div className={styles.name}>{name}</div>
      <PrivilegedLink title={"Post Article"} url={"/articles/new"} />
      <PrivilegedLink title={"Log Out"} url={"/users/logout"} />
    </div>
  );
};

export default Authenticated(CurrentUser, AUTHENTICATED_ONLY);
