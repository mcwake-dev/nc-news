import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getTopics } from "../../api/topics";

import { VALID_ORDERS, VALID_SORTS } from "../../api/constants";
import Loading from "../Loading";
import SortAndFilterLink from "../SortAndFilterLink";
import { getUsers } from "../../api/users";
import styles from "./ArticleControls.module.css";

const ArticleControls = ({ setIsLoading, setError }) => {
  const { author, topic, sort, order } = useParams();
  const [authors, setAuthors] = useState([]);
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    setError(null);
    getTopics()
      .then((newTopics) => {
        setTopics(newTopics);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [setTopics, setIsLoading, setError]);

  useEffect(() => {
    setError(null);
    getUsers()
      .then((newAuthors) => {
        setAuthors(newAuthors);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [setAuthors, setIsLoading, setError]);

  return (
    <details>
      <summary>Sort &amp; Filter</summary>
      <div>
        <div>
          <h4>Filter by author: </h4>
          <div>
            <SortAndFilterLink
              key={"all"}
              isCurrent={author === "all"}
              title="All"
              param={"all"}
              linkType={"author"}
            />
            {authors.map(({ username }) => (
              <SortAndFilterLink
                key={username}
                isCurrent={author === username}
                title={username}
                param={username}
                linkType={"author"}
              />
            ))}
          </div>
        </div>
        <div>
          <h4>Filter by topic: </h4>
          <div>
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
        </div>
        <div>
          <h4>Sort by: </h4>
          <div>
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
        </div>
        <div>
          <h4>Order by: </h4>
          <div>
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
      </div>
    </details>
  );
};

export default Loading(ArticleControls, "Loading topics...");
