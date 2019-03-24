import React from 'react';
import './PageHeader.css';

const PageHeader = (props) => {

    return (
        <div className="pageHeader">
      <div className="header">
      <div className="title">
          <div className="logoHeader">
              {/* <div className="logo"></div> */}
              <span className="subHeader">Object Oriented Dreamspace</span>
          </div>
      <div className="menu">
          <ul>
              <li onClick={props.clickPick}>Uno</li>
              <li onClick={props.clickPick}>Dos</li>
              <li onClick={props.clickPick}>Tres</li>
          </ul>
      </div>
      </div>
  </div>
  </div>
    );
  }

export default PageHeader;
