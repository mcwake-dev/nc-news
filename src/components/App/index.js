import { Routes, Route } from "react-router-dom";

import "./App.module.css";
import Layout from "../Layout";
import ArticleList from "../ArticleList";
import Article from "../Article";
import NewArticle from "../NewArticle";
import UserList from "../UserList";
import NotFound from "../NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<ArticleList />} />
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
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
