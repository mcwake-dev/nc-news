import TopicBanner from "../TopicBanner";

import styles from "./ArticleCard.module.css";

const ArticleCard = ({
  article: { author, comment_count, created_at, title, topic, votes, body },
  children,
}) => {
  return (
    <div className={styles.articleContainer}>
      <article className={styles.articleCard}>
        <header>
          <TopicBanner title={topic} />
          <hr />
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
        </header>
        <main className={styles.articleBody}>
          <p>{body}</p>
          <aside>{children}</aside>
        </main>
      </article>
    </div>
  );
};

export default ArticleCard;
