import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import Header from "../Header";
import Nav from "../Nav";

const Layout = (props) => {
  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <Header />
        <Nav />
      </div>
      <div className={styles.main}>
        <Outlet />
      </div>
      <div className={styles.footer}>
        <p>
          &copy; Matthew C Wake 2022 |{" "}
          <a href="https://mcwake-portfolio.vercel.app">
            <i className="fab fa-react"></i> Portfolio
          </a>{" "}
          |{" "}
          <a href="https://github.com/mcwake-dev">
            <i className="fa fa-github"></i> Github
          </a>{" "}
          |{" "}
          <a href="https://github.com/mcwake-dev/nc-news">
            <i className="fa fa-github"></i> Front-end Source
          </a>{" "}
          |{" "}
          <a href="https://github.com/mcwake-dev/mcw-nc-news">
            <i className="fa fa-github"></i> Backend Source
          </a>
        </p>
      </div>
    </div>
  );
};

export default Layout;
