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
        Matthew C Wake &copy; 2022 - Based on React
      </div>
    </div>
  );
};

export default Layout;
