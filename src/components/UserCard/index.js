import TopicBanner from "../TopicBanner";
import styles from "./UserCard.module.css";

const UserCard = ({
  user: {
    username,
    avatar_url,
    name,
    articlecount,
    articlevotes,
    commentcount,
    commentvotes,
  },
}) => {
  return (
    <div className={styles.userCard}>
      <div className={styles.avatar}>
        <img src={avatar_url} alt={`${username}'s avatar`} />
      </div>
      <div className={styles.username}>
        <TopicBanner title={username} />
      </div>

      <div className={styles.userData}>
        <div className={styles.name}>
          <h1>{name}</h1>
        </div>
        <div className={styles.articles}>
          <h2>Articles</h2>
          <div className={styles.articleCount}>{articlecount} Articles</div>
          <div className={styles.articleVotes}>
            Received {articlevotes} Votes
          </div>
        </div>
        <div className={styles.comments}>
          <h2>Comments</h2>
          <div className={styles.commentCount}>{commentcount} Comments</div>
          <div className={styles.commentVotes}>
            Received {commentvotes} Votes
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
