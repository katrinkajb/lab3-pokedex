import React, { Component } from 'react'

export default class SearchBar extends Component {
    // state = {
    //     searchQuery: '',  
    // }
    render() {
        return (
            <div className='search-bar'>
                <input onChange={(e)=> this.props.handleSearchQueryChange({searchQuery: e.target.value})} placeholder='Search by Name'/>
                <button onClick={() => this.props.handleClick (this.props.searchQuery)}>Search</button>
            </div>
        )
    }
}
