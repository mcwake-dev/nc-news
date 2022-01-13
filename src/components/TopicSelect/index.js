import { useEffect, useState } from "react";
import { getTopics } from "../../api/topics";

import Loading from "../Loading";

const TopicSelect = ({ topic, setTopic, setIsLoading, setError }) => {
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
  });

  return (
    <select value={topic} onChange={(ev) => setTopic(ev.target.value)}>
      <option value="">Select a topic...</option>
      {topics.map(({ slug }) => (
        <option key={slug} value={slug}>
          {slug}
        </option>
      ))}
    </select>
  );
};

export default Loading(TopicSelect, "Loading Topics...", true);
