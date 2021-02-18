import React, { Component } from 'react';
import '../../App.css';

export default class SortOrder extends Component {
    render() {
        return (
            <>
                <select onChange={this.props.handleSortChange} className='sort-dropdown'>
                    <option value='pokemon'>Name</option>
                    <option value='shape'>Shape</option>
                    <option value='type_1'>Type</option>
                </select>
                <select onChange={this.props.handleOrderChange}>
                    <option value='asc'>ascending</option>
                    <option value='desc'>descending</option>
                </select>
            </>
        )
    }
}
