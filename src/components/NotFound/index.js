import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <div>
        <h1>Not Found</h1>
        <br />
        <p>Error messages</p>
        <p>cannot completely convey.</p>
        <p>We now know shared loss.</p>
      </div>
      <div>
        <Link to="/">&lt; Go Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
