import React from "react";
import "./PageHeader.css";

const PageHeader = props => {
  return (
    <div className="pageHeader">
      <div className="header">
        <div className="title">
          <span className="logo">Object Oriented Dreamspace</span>
        </div>
        <div className="menu">
          <ul>
            <li onClick={() => props.changePage("Posts")}>Posts</li>
            <li onClick={() => props.changePage("Projects")}>Projects</li>
            <li onClick={() => props.changePage("About")}>About</li>
          </ul>
        </div>
        <div className="social">
          <ul>
            <a href=""><li className="facebook" /></a>
            <a href=""><li className="instagram" /></a>
            <a href=""><li className="linkedin" /></a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
