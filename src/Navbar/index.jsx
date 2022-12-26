import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./style.css";

const index = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100px",
        backgroundColor: "#5490f0",
      }}>
      <ul style={{ display: "flex", listStyleType: "none", gridGap: "20px" }}>
        <li>
          <NavLink to="/">Go to Home</NavLink>
        </li>
        <li>
          <NavLink to="/blog">Go to Blog</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Go to Contact</NavLink>
        </li>
        <li>
          <NavLink to="/posts">Go to Posts</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default index;
