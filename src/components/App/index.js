import { Routes, Route } from "react-router-dom";

import "./App.module.css";
import Layout from "../Layout";
import ArticleList from "../ArticleList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<ArticleList />} />
        <Route
          path="topic/:topic/sort-by/:sort/order/:order"
          element={<ArticleList />}
        />
      </Route>
    </Routes>
  );
}

export default App;
