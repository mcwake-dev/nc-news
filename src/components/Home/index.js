import { Link } from "react-router-dom";

import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.blurb}>
        <h1>nc news.</h1>
        <p>A Reddit-like news site demonstrating:</p>
        <ul>
          <li>A modern React-powered front end using Hooks</li>
          <li>Use of CSS3 and HTML5</li>
          <li>Interaction with a Node.js/PostgreSQL REST API</li>
        </ul>
        <Link to="/author/all/topic/all/sort-by/created_at/order/desc">
          See the articles
        </Link>
      </div>
    </div>
  );
};

export default Home;
