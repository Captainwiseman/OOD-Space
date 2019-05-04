import React, { Component } from "react";
import "./Layout.css";
import PageHeader from "./PageHeader/PageHeader";
import PageBody from "./PageBody/PageBody";
import Posts from "../Pages/Posts";
import Projects from "../Pages/Projects";
import About from "../Pages/About";

class Layout extends Component {
  siteMap = {
    Posts: Posts,
    Projects: Projects,
    About: About
  };

  state = {
    currentPage: this.siteMap.Posts
  };

  changePage = (page) => {
    console.log("clicked", page)
    this.setState({currentPage: this.siteMap[page]})
  }

  render() {
    return (
      <div className="layout">
        <PageHeader changePage= {this.changePage}/>
        <PageBody page={this.state.currentPage} />
      </div>
    );
  }
}

export default Layout;
