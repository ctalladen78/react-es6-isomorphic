'use strict';

import React from 'react';
import Router from 'react-router';
var RouteHandler = Router.RouteHandler;

import Header from './Header.jsx';
import Footer from './Footer.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header title="react-es6-isomorphic"/>
        <div className="container">
          {this.props.children}
        </div>
        <Footer/>
      </div>
    )
  }
};