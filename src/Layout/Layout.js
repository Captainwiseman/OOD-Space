import React, { Component } from 'react';
import './Layout.css';
import PageHeader from './PageHeader/PageHeader';
import PageBody from './PageBody/PageBody';
import Uno from '../Pages/Uno'

class Layout extends Component {

  state = {
    render: false,
    body: <Uno />
  }

  render() {
    return (
      <div className="layout">
      <PageHeader />
        <PageBody loadedPage={this.state.body}/>
      </div>
    );
  }
}

export default Layout;
