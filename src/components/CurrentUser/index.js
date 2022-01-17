import Authenticated, { AUTHENTICATED_ONLY } from "../Authenticated";
import PrivilegedLink from "../PrivilegedLink";
import styles from "./CurrentUser.module.css";

const CurrentUser = ({ user: { username, avatar_url, name } }) => {
  return (
    <div className={styles.currentUserContainer}>
      <div className={styles.avatarContainer}>
        <img src={avatar_url} alt={`${username}'s avatar`} />
      </div>
      <div className={styles.currentUserData}>
        <div>{username}</div>
        <div>{name}</div>
        <PrivilegedLink title={"Post Article"} url={"/articles/new"} />
        <PrivilegedLink title={"Log Out"} url={"/users/logout"} />
      </div>
    </div>
  );
};

export default Authenticated(CurrentUser, AUTHENTICATED_ONLY);
