import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import * as dayjs from "dayjs";
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
    <article className={styles.articleCard}>
      <header>
        <TopicBanner title={topic} />
        <hr />
        <div className={styles.articleData}>
          <div className={styles.date}>
            {`${dayjs(created_at).format("ddd D MMM YYYY HH:mm")}`}
          </div>
          <div className={styles.feedback}>
            {body ? (
              <VoteControls
                voteType={"article"}
                item_id={article_id}
                votes={votes}
              />
            ) : (
              <>
                <p>{votes} votes</p>
                <p>{comment_count} comments</p>
              </>
            )}
          </div>
        </div>
        <hr />
        <div className={styles.articleTitle}>{title}</div>
        <div className={styles.articleAuthor}>- By {author} -</div>
      </header>
      <main className={styles.articleBody}>
        <ReactMarkdown children={body} remarkPlugins={[remarkGfm]} />
        <DeleteArticle article_id={article_id} author={author} />
      </main>
      {body ? (
        <details>
          <summary>View {comment_count} Comments</summary>
          {children}
        </details>
      ) : (
        <></>
      )}
    </article>
  );
};

export default ArticleCard;
