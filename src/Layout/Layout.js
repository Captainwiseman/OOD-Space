import React, { Component } from 'react';
import './Layout.css';
import PageHeader from './PageHeader/PageHeader';
import PageBody from './PageBody/PageBody';

class Layout extends Component {
  render() {
    return (
      <div className="layout">
      <PageHeader />
      <PageBody />
      </div>
    );
  }
}

export default Layout;
