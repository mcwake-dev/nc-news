import { Link } from "react-router-dom";

const SidebarArticleList = ({ articles, title }) => {
  return (
    <section>
      <h2 className="subtitle">{title}</h2>
      {articles.map(({ article_id, body, author, title }) => (
        <article key={article_id} className="mb-4">
          <Link to={`/articles/${article_id}`}>{title}</Link>
          <br />
          By <b>{author}</b>
        </article>
      ))}
      <hr />
    </section>
  );
};

export default SidebarArticleList;
