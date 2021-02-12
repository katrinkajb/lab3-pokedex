import React, { Component } from 'react'
import './App.css';
import Header from './components/Header.js'
import HomePage from './components/HomePage.js'
import {BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Switch />
        </Router>
      </div>
    );
  }
}



