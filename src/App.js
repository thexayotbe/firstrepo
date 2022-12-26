import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Posts from "./pages/Posts";
import Navbar from "./Navbar";
import PostBYID from "./pages/PostByID";

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <div style={{ textAlign: "center" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:postID" element={<PostBYID />} />
        </Routes>
      </div> */}
      {localStorage.getItem("name")}
      <button onClick={() => localStorage.setItem("name", "Asadbek")}>
        Save name to Storage
      </button>
      <button onClick={() => localStorage.removeItem("name")}>
        Remove name from Storage
      </button>
      <button onClick={() => localStorage.clear()}>Remove all items</button>
    </div>
  );
};

export default App;
