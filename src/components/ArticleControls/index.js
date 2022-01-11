import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getTopics } from "../../api/topics";

import { VALID_ORDERS, VALID_SORTS } from "../../api/constants";
import Loading from "../Loading";
import SortAndFilterLink from "../SortAndFilterLink";
import styles from "./ArticleControls.module.css";

const ArticleControls = ({ setIsLoading }) => {
  const { topic, sort, order } = useParams();
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics()
      .then((newTopics) => {
        setTopics(newTopics);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [setTopics, setIsLoading]);

  return (
    <div className={styles.articleControls}>
      <div className={styles.topics}>
        Filter by topic:{" "}
        <SortAndFilterLink
          key={"all"}
          isCurrent={topic === "all"}
          title="All"
          param={"all"}
          linkType={"topic"}
        />
        {topics.map(({ slug }) => (
          <SortAndFilterLink
            key={slug}
            title={slug}
            isCurrent={topic === slug}
            param={slug}
            linkType={"topic"}
          />
        ))}
      </div>
      <br />
      <div className={styles.sorts}>
        Sort by:{" "}
        {VALID_SORTS.map((sortOption) => (
          <SortAndFilterLink
            key={sortOption.param}
            title={sortOption.title}
            isCurrent={sortOption.param === sort}
            param={sortOption.param}
            linkType={"sort"}
          />
        ))}
      </div>
      <br />
      <div className={styles.order}>
        Order by:{" "}
        {VALID_ORDERS.map((orderOption) => (
          <SortAndFilterLink
            key={orderOption.param}
            title={orderOption.title}
            isCurrent={orderOption.param === order}
            param={orderOption.param}
            linkType={"order"}
          />
        ))}
      </div>
    </div>
  );
};

export default Loading(ArticleControls, "Loading topics...");
