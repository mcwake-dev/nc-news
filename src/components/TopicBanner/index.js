import styles from "./TopicBanner.module.css";

const TopicBanner = ({ title }) => {
  return (
    <div className={styles.topicBanner}>
      <h2>{title} News</h2>
    </div>
  );
};

export default TopicBanner;
