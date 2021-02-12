import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return (
            <div className='search-bar'>
                <input onChange={this.props.handleInputChange} />
            </div>
        )
    }
}
