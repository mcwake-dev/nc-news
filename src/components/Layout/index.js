import { Link, Outlet } from "react-router-dom";
import PrivilegedLink from "../PrivilegedLink";
import UnprivilegedLink from "../UnprivilegedLink";

import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <Link to="/">
          <h1>📰 NC News</h1>
        </Link>
        <div className={styles.navLinks}>
          <Link to="/author/all/topic/all/sort-by/created_at/order/desc">
            Home
          </Link>
          <Link to="/users">Users</Link>
          <PrivilegedLink title={"Post Article"} url={"/articles/new"} />
          <PrivilegedLink title={"Log Out"} url={"/users/logout"} />
          <UnprivilegedLink title={"Log In"} url={"/users/login"} />
        </div>
      </div>
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
