import { Link } from "react-router-dom";

const SidebarCommentList = ({ comments, title }) => {
  return (
    <section>
      <h2 className="subtitle">{title}</h2>
      {comments.map(({ comment_id, body, author, article_id, title }) => (
        <article key={comment_id} className={"mb-4"}>
          <Link to={`/articles/${article_id}`}>{title}</Link>
          <br />
          <b>{author}</b> commented: <br />
          {body.substring(0, 30)}...
        </article>
      ))}
      <hr />
    </section>
  );
};

export default SidebarCommentList;
