import { Link, Outlet } from "react-router-dom";
import CurrentUser from "../CurrentUser";
import UnprivilegedLink from "../UnprivilegedLink";

import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <div className={styles.app}>
      <header>
        <div className={styles.appName}>
          <Link className={styles.appName} to="/">
            📰 NC News
          </Link>
        </div>
        <div className={styles.navLinks}>
          <Link to="/author/all/topic/all/sort-by/created_at/order/desc">
            Articles
          </Link>
          <Link to="/users">Users</Link>
          <UnprivilegedLink title={"Log In"} url={"/users/login"} />
        </div>
        <CurrentUser className={styles.currentUser} />
      </header>
      <div className={styles.main}>
        <Outlet />
      </div>
      <div className={styles.footer}>
        <a href="https://mcwake-portfolio.vercel.app">
          <i className="fab fa-react"></i> Portfolio
        </a>
        <a href="https://github.com/mcwake-dev">
          <i className="fa fa-github"></i> Github
        </a>
        <p>&copy; Matthew C Wake 2022</p>
        <a href="https://github.com/mcwake-dev/nc-news">
          <i className="fa fa-github"></i> Front-end Source
        </a>
        <a href="https://github.com/mcwake-dev/mcw-nc-news">
          <i className="fa fa-github"></i> Backend Source
        </a>
      </div>
    </div>
  );
};

export default Layout;
