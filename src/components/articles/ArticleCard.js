import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import * as dayjs from "dayjs";
import { Link } from "react-router-dom";

import SortAndFilterLink from "../SortAndFilterLink";
import VoteControls from "../forms/VoteControls";
import DeleteArticle from "./DeleteArticle";

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
        {children ? (
          <nav className="breadcrumb">
            <ul>
              <li>
                <Link
                  className="tag mx-2 is-size-5 py-0"
                  to={"/author/all/topic/all/sort-by/created_at/order/desc"}
                >
                  Articles
                </Link>
              </li>
              <li>
                <SortAndFilterLink
                  param={topic}
                  title={
                    topic ? topic[0].toUpperCase() + topic.substring(1) : ""
                  }
                  linkType={"topic"}
                />
              </li>
              <li>
                <Link
                  className="tag mx-2 is-size-5 py-0"
                  to={`/articles/${article_id}`}
                >
                  {title}
                </Link>
              </li>
            </ul>
          </nav>
        ) : (
          <></>
        )}
        <h1 className="title">{title}</h1>
        <h2 className="subtitle">
          Posted by{" "}
          <SortAndFilterLink
            param={author}
            title={author}
            linkType={"author"}
          />{" "}
          on{" "}
          {`${dayjs(created_at).format("ddd D MMM YYYY")} at ${dayjs(
            created_at
          ).format("HH:mm")}`}
        </h2>
      </header>
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
      {body ? (
        <>
          <h2 className="subtitle mb-0">Comments</h2>
          {children}
        </>
      ) : (
        <></>
      )}
    </article>
  );
};

export default ArticleCard;
