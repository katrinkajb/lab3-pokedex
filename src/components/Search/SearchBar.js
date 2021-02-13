import React, { Component } from 'react'

export default class SearchBar extends Component {
    
    handleSearchQueryChange = (e) => {
        e.preventDefault()
        this.setState({
            searchQuery: e.target.value
        })
    }

    render() {
        return (
            <div className='search-bar'>
                <input  placeholder='Search by Name'/>
                <button onClick={this.props.handleSearchQueryChange}>Search</button>
            </div>
        )
    }
}
