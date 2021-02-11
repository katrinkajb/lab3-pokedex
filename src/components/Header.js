import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
                <header className='header-title'>Pokedex</header>
                <div className='links'>
                    <a href='./HomePage.js'>Home</a>
                    <a href='./SearchPage.js'>Search</a>
                </div>
            </div>
        )
    }
}
