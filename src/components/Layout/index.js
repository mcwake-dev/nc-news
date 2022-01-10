import styles from "./Layout.module.css";

const Layout = (props) => {
  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <h1>📰 NC News</h1>
        <nav></nav>
      </div>
      <div className={styles.main}></div>
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
