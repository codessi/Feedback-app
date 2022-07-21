import React from "react";
import { Navigate, useNavigate, Link, Routes, Route} from "react-router-dom";

// post show
// routes route  import [x]
// jsx Routes route pat '/show[]
// goto app and post/*
// element h1 hellow world
// post/show vs post
// remember the * or error


const Post = () => {
  const navigate = useNavigate()

  const status = 200
  if (status === 404) {
    return <Navigate to="/pagenotfound" />
  }
  const onClick = () => {
    // console.log("hello")
    navigate('/about')
    return <Link to="/pagenotfound" />
  }
  return (
    <div>
      <h3>Post </h3>
      <button onClick={onClick}>click</button>
      <Link to="/about"><h3>about</h3></Link>
      <Routes>
        <Route path = "/show" element={<h2>hello world</h2>}>

        </Route>
      </Routes>
      
    </div>
  );
};

export default Post;
// new stauff