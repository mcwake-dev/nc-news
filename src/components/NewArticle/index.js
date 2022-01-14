import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./NewArticle.module.css";
import Loading, { LOADED, LOADING } from "../Loading";
import Authenticated, { AUTHENTICATED_ONLY } from "../Authenticated";
import TopicSelect from "../TopicSelect";
import ArticleCard from "../ArticleCard";
import { postArticle } from "../../api/articles";

const NewArticle = ({ setIsLoading, setError, user: { username } }) => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [topic, setTopic] = useState("");

  const article = {
    author: username,
    comment_count: 0,
    created_at: new Date(),
    title,
    topic,
    votes: 0,
    body,
  };

  const postThisArticle = () => {
    if (title && body && topic) {
      setIsLoading(LOADING);
      setError(null);
      postArticle(username, title, body, topic)
        .then((article) => {
          navigate(`/articles/${article.article_id}`);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setIsLoading(LOADED);
        });
    }
  };

  return (
    <section className={styles.newArticle}>
      <div className={styles.newArticleForm}>
        <label htmlFor="topic">Topic</label>
        <TopicSelect topic={topic} setTopic={setTopic} />
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
        />
        <label htmlFor="body">
          Content
          <br />
          <br />
          (Markdown syntax supported)
        </label>
        <textarea
          id="body"
          maxLength="10000"
          value={body}
          onChange={(ev) => setBody(ev.target.value)}
        />
        <button onClick={(ev) => postThisArticle()}>Post Article</button>
      </div>
      <div className={styles.newArticlePreview}>
        <ArticleCard article={article} />
      </div>
    </section>
  );
};

export default Authenticated(
  Loading(NewArticle, "Posting Article...", LOADED),
  AUTHENTICATED_ONLY
);
