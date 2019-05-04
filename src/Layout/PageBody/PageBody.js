import React from "react";
import "./PageBody.css";
import Posts from "../../Pages/Posts";
import About from "../../Pages/About";

const Body = props => {
  console.log(props)
  return (
    <div className="pageBody">
      {props.page()}
    </div>
  );
};

export default Body;
