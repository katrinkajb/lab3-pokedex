import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import HomePage from './components/HomePage.js';
import SearchPage from './components/Search/SearchPage.js';
import PokemonDetail from './components/PokemonDetail.js';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
          <Route 
            path="/" 
            exact
            render={(routerProps) => <HomePage {...routerProps} />} 
          />
          <Route 
            path="/pokemon" 
            exact
            render={(routerProps) => <SearchPage {...routerProps} />} 
          />
          <Route 
            path="/:_id" 
            exact
            render={(routerProps) => <PokemonDetail {...routerProps} />} 
          />
          </Switch>
        </Router>
      </div>
    );
  }
}



