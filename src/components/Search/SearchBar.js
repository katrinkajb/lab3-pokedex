import React, { Component } from 'react'

export default class SearchBar extends Component {
    
    render() {
        return (
            <div className='search-bar'>
                <input  placeholder='Search by Name'/>
                <button onClick={this.props.handleSearchQueryChange}>Search</button>
            </div>
        )
    }
}
