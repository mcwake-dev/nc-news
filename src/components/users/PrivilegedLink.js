import { Link } from "react-router-dom";
import Authenticated, { AUTHENTICATED_ONLY } from "./Authenticated";

const PrivilegedLink = ({ title, url }) => {
  return <Link to={url}>{title}</Link>;
};

export default Authenticated(PrivilegedLink, AUTHENTICATED_ONLY);
