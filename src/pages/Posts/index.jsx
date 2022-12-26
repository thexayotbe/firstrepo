import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { defaultEqualityCheck } from "reselect";

const Posts = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <button onClick={() => navigate("/contact")}>Go to Contact Page</button>
      <h1>This is post page</h1>
      {data.map((value) => (
        <div key={value.id}>
          <Link to={`/posts/${value.id}`}> {value.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default Posts;
