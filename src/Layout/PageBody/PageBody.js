import React from 'react';
import './PageBody.css';
import Article from '../../Pages/Posts'
import About from '../../Pages/About'

const siteStructure = new (function() {
  this.pages = {
    Article: Article,
    About: About
  }
  this.homePage = this.pages.Article
  this.currentPage = this.homePage
})()

const loadCurrentPage = () => {
  let CurrentPage = siteStructure.currentPage
  return <CurrentPage />
}

const Body = (props) => {
    return (
      <div className="pageBody">
      {loadCurrentPage}
      </div>
    );
  }

export default Body;
