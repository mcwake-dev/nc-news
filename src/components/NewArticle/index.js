import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./NewArticle.module.css";
import Loading from "../Loading";
import TopicSelect from "../TopicSelect";
import ArticleCard from "../ArticleCard";
import { DUMMY_USERNAME as username } from "../../api/constants";
import { postArticle } from "../../api/articles";

const NewArticle = ({ setIsLoading, setError }) => {
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
      setIsLoading(true);
      setError(null);
      postArticle(username, title, body, topic)
        .then((article) => {
          navigate(`/articles/${article.article_id}`);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setIsLoading(false);
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

export default Loading(NewArticle, "Posting Article...", false);
