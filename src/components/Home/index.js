import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <section className="container has-text-centered">
      <h1 className="title">
        <i className="far fa-newspaper"></i>&nbsp;nc news.
      </h1>
      <h2 className="subtitle">A Reddit-like news site demonstrating:</h2>
      <div className="content">
        <ul>
          <li>A modern React-powered front end using Hooks</li>
          <li>Responsive UI using Bulma, HTML5 and CSS3</li>
          <li>Interaction with a Node.js/PostgreSQL REST API</li>
        </ul>
      </div>
      <div className="has-text-centered">
        <button
          className="button"
          onClick={(ev) =>
            navigate("/author/all/topic/all/sort-by/created_at/order/desc")
          }
        >
          See the articles
        </button>
      </div>
    </section>
  );
};

export default Home;
