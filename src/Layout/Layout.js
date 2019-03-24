import React, { Component } from 'react';
import './Layout.css';
import PageHeader from './PageHeader/PageHeader';
import PageBody from './PageBody/PageBody';
import Article from '../Pages/Article'
import About from '../Pages/About'

class Layout extends Component {

  state = {
    render: false,
    body: <Article />
  }

changeBody = () => {
  this.setState({body: <h1>Wallek</h1>})
}

  render() {
    return (
      <div className="layout">
      <PageHeader clickPick = {this.changeBody} />
        <PageBody loadedPage={this.state.body} />
      </div>
    );
  }
}

export default Layout;
