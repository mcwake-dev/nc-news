import { Link, Outlet } from "react-router-dom";
import CurrentUser from "../CurrentUser";
import Login from "../Login";

import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <div className={styles.layoutContainer}>
      <nav>
        <Link to="/">
          <i className="far fa-newspaper"></i> nc news.
        </Link>
        <Link to="/author/all/topic/all/sort-by/created_at/order/desc">
          Articles
        </Link>
        <Link to="/users">Users</Link>
      </nav>
      <main>
        <Outlet />
      </main>
      <div className={styles.sidebar}>
        <CurrentUser />
        <Login />
      </div>
      <footer>
        <p>Developed by Matthew C Wake, Jan 2022</p>
        <br />
        <a href="https://mcwake-portfolio.vercel.app">
          <i className="fab fa-react"></i> Portfolio
        </a>
        <a href="https://github.com/mcwake-dev">
          <i className="fa fa-github"></i> Github
        </a>
        <a href="https://github.com/mcwake-dev/nc-news">
          <i className="fa fa-github"></i> Front-end Source
        </a>
        <a href="https://github.com/mcwake-dev/mcw-nc-news">
          <i className="fa fa-github"></i> Backend Source
        </a>
      </footer>
    </div>
  );
};

export default Layout;
