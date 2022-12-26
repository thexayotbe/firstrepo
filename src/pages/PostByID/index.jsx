import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const PostBYID = () => {
  const navigate = useNavigate();
  const { postID } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      <button onClick={() => navigate(-1)}>Go back</button>
      PostBYID {postID}
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  );
};

export default PostBYID;
