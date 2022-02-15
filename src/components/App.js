import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Layout from "./Layout";
import ArticleList from "./articles/ArticleList";
import Article from "./articles/Article";
import NewArticle from "./articles/NewArticle";
import UserList from "./users/UserList";
import NotFound from "./NotFound";
import Home from "./Home";
import Login from "./users/Login";
import Logout from "./users/Logout";
import Register from "./users/Register";
import { UserContext } from "../contexts/User";

function App() {
  const [user, setUser] = useState("");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route
            path="author/:author/topic/:topic/sort-by/:sort/order/:order"
            element={<ArticleList />}
          />
          <Route path="/articles">
            <Route path="new" element={<NewArticle />} />
            <Route path=":article_id" element={<Article />} />
          </Route>
          <Route path="/users">
            <Route path="" element={<UserList />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="logout" element={<Logout />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
