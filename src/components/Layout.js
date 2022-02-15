import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

import RecentComments from "./comments/RecentComments";
import RecentArticles from "./articles/RecentArticles";
import HighestVotedComments from "./comments/HighestVotedComments";
import HighestVotedArticles from "./articles/HighestVotedArticles";

const Layout = () => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <>
      <nav
        className="navbar is-fixed-top has-background-black-ter"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link className="navbar-item has-text-white" to="/">
            <i className="far fa-newspaper"></i>&nbsp;nc news.
          </Link>

          <button
            className={`navbar-burger has-text-white burger ${
              menuActive ? "is-active" : ""
            }`}
            aria-label="menu"
            aria-expanded="false"
            onClick={() => {
              setMenuActive(!menuActive);
            }}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>
        <div className={`navbar-menu ${menuActive ? "is-active" : ""}`}>
          <div className="navbar-start">
            <Link to="/users/login" className="navbar-item has-text-light">
              Login
            </Link>
            <Link to="/users/register" className="navbar-item has-text-light">
              Register
            </Link>
          </div>
          <div className="navbar-end">
            <Link to="/" className="navbar-item has-text-light">
              Home
            </Link>
            <Link
              to="/author/all/topic/all/sort-by/created_at/order/desc"
              className="navbar-item has-text-light"
            >
              Articles
            </Link>
            <Link to="/users" className="navbar-item has-text-light">
              Users
            </Link>
          </div>
        </div>
      </nav>
      <main className="main">
        <section className="ml-2 columns">
          <div className="column is-four-fifths">
            <Outlet />
          </div>
          <div className="column is-one-fifth mt-5">
            <RecentArticles />
            <HighestVotedArticles />
            <RecentComments />
            <HighestVotedComments />
          </div>
        </section>
      </main>
      <nav className="navbar is-fixed-bottom has-background-black has-text-light">
        <div className="content w-100">
          <p style={{ textAlign: "center" }}>
            Developed by Matthew C Wake, Jan 2022 - Updated Feb 2022
          </p>
          <a
            className="p-1 has-text-light"
            href="https://mcwake-portfolio.vercel.app"
          >
            <i className="fab fa-react has-text-link"></i> Portfolio
          </a>
          <a
            className="p-1 has-text-light"
            href="https://github.com/mcwake-dev"
          >
            <i className="fa fa-github has-text-link"></i> Github
          </a>
          <a
            className="p-1 has-text-light"
            href="https://github.com/mcwake-dev/nc-news"
          >
            <i className="fa fa-github has-text-link"></i> Front-end Source
          </a>
          <a
            className="p-1 has-text-light"
            href="https://github.com/mcwake-dev/mcw-nc-news"
          >
            <i className="fa fa-github has-text-link"></i> Backend Source
          </a>
        </div>
      </nav>
    </>
  );
};

export default Layout;
