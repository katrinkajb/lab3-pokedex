import React, { Component } from 'react'
import '../App.css';
import {withRouter, NavLink } from 'react-router-dom';

export default withRouter(class Header extends Component {
    render() {
        return (
            <header>
                <p className='welcome'>Welcome to KB's Pokedex!</p>
                <NavLink exact activeClassName="selected" to="/">
                    Home
                </NavLink>
                {
                    this.props.location.pathname !== '/search'
                    && <NavLink exact activeClassName="selected" to="/search">
                        Search
                </NavLink>
                }
            </header>
        )
    }
})