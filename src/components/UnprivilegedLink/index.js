import { Link } from "react-router-dom";
import Authenticated, { UNAUTHENTICATED_ONLY } from "../Authenticated";

const PrivilegedLink = ({ title, url }) => {
  return <Link to={url}>{title}</Link>;
};

export default Authenticated(PrivilegedLink, UNAUTHENTICATED_ONLY);
