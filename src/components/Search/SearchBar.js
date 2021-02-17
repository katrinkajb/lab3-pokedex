import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return (
            <div className='search-bar'>
                <input onChange={this.props.handleSearchQueryChange} placeholder='Search by Name'/>
                <button onClick={this.props.handleClick}>Search</button>
            </div>
        )
    }
}
