import React from "react";
import { Navigate, useNavigate, Link} from "react-router-dom";

// navigate 
// import navigate [x]
// const status 200 [v]
// if status 404 redirect / navigate[x]
// return Navigate component to '/notfound'[v]
// make button[]
// onclick  make function
// conosle.log (hello)
// import useNavigate
// const navigate = useNaviate()
// insert in function navigate('/about')
// change to 200 status
// click the button 
// button you gotta use useNaviate
// N


const Post = () => {
  const navigate = useNavigate()

  const status = 200
  if (status === 404) {
    return <Navigate to="/pagenotfound" />
  }
  const onClick = () => {
    console.log("hello")
    // navigate('/about')
    return <Link to="/pagenotfound" />
  }
  return (
    <div>
      <h3>Post </h3>
      <button onClick={onClick}>click</button>
      <Link to ="/about"><h3>about</h3></Link>
    </div>
  );
};

export default Post;
// new stauff