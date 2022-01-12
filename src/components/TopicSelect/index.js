import { useEffect, useState } from "react";
import { getTopics } from "../../api/topics";

import Loading from "../Loading";

const TopicSelect = ({ topic, setTopic, setIsLoading }) => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics()
      .then((newTopics) => {
        setTopics(newTopics);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  });

  return (
    <select value={topic} onChange={(ev) => setTopic(ev.target.value)}>
      <option value="">Select a topic...</option>
      {topics.map(({ slug }) => (
        <option value={slug}>{slug}</option>
      ))}
    </select>
  );
};

export default Loading(TopicSelect, "Loading Topics...");
