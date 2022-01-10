import { Routes, Route } from "react-router-dom";

import "./App.module.css";
import Layout from "../Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}></Route>
    </Routes>
  );
}

export default App;
