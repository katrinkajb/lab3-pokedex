import React, { Component } from 'react';
import '../../App.css';

export default class SortOrder extends Component {
    render() {
        return (
            <>
                <select onChange={this.props.handleSortChange} className='sort-dropdown'>
                    <option value='pokemon'>name</option>
                    <option value='shape'>shape</option>
                    <option value='ability_1'>ability</option>
                    <option value='type_1'>type</option>
                </select>
                <select onChange={this.props.handleOrderChange}>
                    <option value='ascending'>ascending</option>
                    <option value='descending'>descending</option>
                </select>
            </>
        )
    }
}
