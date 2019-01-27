import React from 'react';
import './PageHeader.css';

const PageHeader = () => {
    return (
      <div className="header">
        <div className="logo">Wallek!</div>
        <div className="menu">
        <ul>
          <li>Uno</li>
          <li>Dos</li>
          <li>Tres</li>
        </ul>
        </div>
      </div>
    );
  }

export default PageHeader;
