import React, { Component } from 'react'

export default class SearchBar extends Component {
    state = {
        searchQuery: '',  
    }
    render() {
        return (
            <div className='search-bar'>
                <input onChange={(e)=> this.setState({searchQuery: e.target.value})} value={this.state.currentValue} placeholder='Search by Name'/>
                <button onClick={() => this.props.handleSearchQueryChange (this.state.searchQuery)}>Search</button>
            </div>
        )
    }
}
