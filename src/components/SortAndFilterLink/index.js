import { useParams, Link } from "react-router-dom";

import styles from "./SortAndFilterLink.module.css";

const SortAndFilterLink = ({ isCurrent, param, title, linkType }) => {
  const { topic, sort, order } = useParams();
  let to;

  switch (linkType) {
    case "topic":
      to = `/topic/${param}/sort-by/${sort || "created_at"}/order/${
        order || "desc"
      }`;
      break;
    case "sort":
      to = `/topic/${topic || "all"}/sort-by/${param}/order/${order || "desc"}`;
      break;
    case "order":
      to = `/topic/${topic || "all"}/sort-by/${
        sort || "created_at"
      }/order/${param}`;
      break;
  }

  return (
    <Link className={isCurrent ? styles.current : ""} to={to}>
      {title}
    </Link>
  );
};

export default SortAndFilterLink;
