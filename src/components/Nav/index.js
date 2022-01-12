import { Link } from "react-router-dom";

import { DUMMY_USERNAME as username } from "../../api/constants";

const Nav = () => {
  return (
    <nav>
      <Link to="/articles/new">Post Article</Link>
      <p>
        Logged in as <strong>{username}</strong>
      </p>
    </nav>
  );
};

export default Nav;
