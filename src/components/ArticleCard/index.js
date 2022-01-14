import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import TopicBanner from "../TopicBanner";
import VoteControls from "../VoteControls";
import DeleteArticle from "../DeleteArticle";
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
    body,
  },
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
            <div className={styles.votes}>
              {body ? (
                <VoteControls
                  voteType={"article"}
                  item_id={article_id}
                  votes={votes}
                />
              ) : (
                `${votes} Votes`
              )}
            </div>
            <div className={styles.comments}>{comment_count} Comments</div>
          </div>
          <hr />
          <div className={styles.articleTitle}>{title}</div>
          <div className={styles.articleAuthor}>- By {author} -</div>
        </header>
        <main className={styles.articleBody}>
          <ReactMarkdown children={body} remarkPlugins={[remarkGfm]} />
          <DeleteArticle article_id={article_id} />
          <aside>{children}</aside>
        </main>
      </article>
    </div>
  );
};

export default ArticleCard;
