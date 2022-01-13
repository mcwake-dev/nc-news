import { useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { deleteArticle } from "../../api/articles";
import TopicBanner from "../TopicBanner";
import VoteControls from "../VoteControls";
import Loading from "../Loading";
import styles from "./ArticleCard.module.css";
import { DUMMY_USERNAME as username } from "../../api/constants";

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
  setIsLoading,
  setError,
}) => {
  const navigate = useNavigate();
  const deleteThisArticle = () => {
    setIsLoading(true);
    setError(null);
    deleteArticle(article_id)
      .then((status) => {
        navigate("/");
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

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
          {author === username ? (
            <button onClick={(ev) => deleteThisArticle()}>
              Delete Article
            </button>
          ) : (
            ""
          )}
          <aside>{children}</aside>
        </main>
      </article>
    </div>
  );
};

export default Loading(ArticleCard, "Deleting Article...", false);
