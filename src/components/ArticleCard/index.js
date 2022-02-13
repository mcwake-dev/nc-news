import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import * as dayjs from "dayjs";

import VoteControls from "../VoteControls";
import DeleteArticle from "../DeleteArticle";

const ArticleCard = ({
  article: {
    article_id,
    author,
    comment_count,
    created_at,
    title,
    topic,
    votes,
    body,
  },
  children,
}) => {
  return (
    <article>
      <header>
        <span>{topic}</span> - {title}
      </header>
      <div>{`${dayjs(created_at).format("ddd D MMM YYYY")} at ${dayjs(
        created_at
      ).format("HH:mm")}`}</div>
      <div>
        {body ? (
          <VoteControls
            voteType={"article"}
            item_id={article_id}
            votes={votes}
          />
        ) : (
          <>
            <p>{votes} votes</p>
            <p>{comment_count} comments</p>
          </>
        )}
      </div>

      <main>
        <ReactMarkdown children={body} remarkPlugins={[remarkGfm]} />
        <DeleteArticle article_id={article_id} author={author} />
      </main>
      <div>- By {author} -</div>
      {body ? (
        <details>
          <summary>View {comment_count} Comments</summary>
          {children}
        </details>
      ) : (
        <></>
      )}
    </article>
  );
};

export default ArticleCard;
