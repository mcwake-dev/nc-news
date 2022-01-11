import { Link } from "react-router-dom";

import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.notFoundContainer}>
      <div className={styles.haiku}>
        <h1>Not Found</h1>
        <br />
        <p>Error messages</p>
        <p>cannot completely convey.</p>
        <p>We now know shared loss.</p>
      </div>
      <div className={styles.next}>
        <Link to="/">&lt; Go Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
