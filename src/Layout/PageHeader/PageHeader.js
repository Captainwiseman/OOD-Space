import React from 'react';
import './PageHeader.css';

const PageHeader = () => {

  const menu = () => {
    
  }

    return (
      <div className="header">
        <div className="logo">Wallek!</div>
        <div className="menu">
        <ul>
          <li onClick={menu}>Uno</li>
          <li>Dos</li>
          <li>Tres</li>
        </ul>
        </div>
      </div>
    );
  }

export default PageHeader;
