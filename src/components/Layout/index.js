import { Link, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <div>
          <Link to="/">
            <h1>📰 NC News</h1>
          </Link>
        </div>
      </div>
      <div className={styles.main}>
        <nav>
          <details>
            <summary>Menu</summary>
            <div className={styles.navLinks}>
              <Link to="/author/all/topic/all/sort-by/created_at/order/desc">
                Home
              </Link>
              <Link to="/articles/new">Post Article</Link>
              <Link to="/users">Users</Link>
            </div>
          </details>
        </nav>
        <Outlet />
      </div>
      <div className={styles.footer}>
        <p>&copy; Matthew C Wake 2022</p>
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
      </div>
    </div>
  );
};

export default Layout;
