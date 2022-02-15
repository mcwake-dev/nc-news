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
    <div>
      <div>
        <img src={avatar_url} alt={`${username}'s avatar`} />
      </div>
      <div>{username}</div>

      <div>
        <div>
          <h1>{name}</h1>
        </div>
        <div>
          <h2>Articles</h2>
          <div>{articlecount} Articles</div>
          <div>Received {articlevotes} Votes</div>
        </div>
        <div>
          <h2>Comments</h2>
          <div>{commentcount} Comments</div>
          <div>Received {commentvotes} Votes</div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
