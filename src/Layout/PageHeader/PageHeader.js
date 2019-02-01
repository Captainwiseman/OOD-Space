import React from 'react';
import './PageHeader.css';

const PageHeader = (props) => {

    return (
      <div className="header">
      <div className="title">
          <div className="logoHeader">
              {/* <div className="logo"></div> */}
              <span className="subHeader">Object Oriented Dreamspace</span>
          </div>
      </div>
      <div className="menu">
          <ul>
              <li onClick={props.clickPick}>Uno</li>
              <li>Dos</li>
              <li>Tres</li>
          </ul>
      </div>
  </div>
    );
  }

export default PageHeader;
