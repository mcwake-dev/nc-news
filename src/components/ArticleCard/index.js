import { Link } from "react-router-dom";

import styles from "./ArticleCard.module.css";

const ArticleCard = ({
  article: {
    article_id,
    author,
    comment_count,
    created_at,
    title,
    topic,
    votes,
  },
}) => {
  return (
    <div className={styles.articleContainer}>
      <Link to={`/article/${article_id}`}>
        <div className={styles.articleCard}>
          <div className={styles.articleTopic}>
            <h2>{topic} News</h2>
          </div>
          <hr className={styles.dateBar} />
          <div className={styles.articleData}>
            <div className={styles.date}>
              {new Date(created_at).toLocaleString()}
            </div>
            <div className={styles.votes}>Votes: {votes}</div>
            <div className={styles.comments}>Comments: {comment_count}</div>
          </div>
          <hr />
          <div className={styles.articleTitle}>{title}</div>
          <div className={styles.articleAuthor}>- By {author} -</div>
          <div className={styles.fakeContent}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ArticleCard;
