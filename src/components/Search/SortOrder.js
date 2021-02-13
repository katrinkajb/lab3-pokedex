import React, { Component } from 'react';
import '../../App.css';

export default class SortOrder extends Component {
    render() {
        return (
            <>
                {/* only sort by name, shape, ability, and type so it's only strings. Can do the numbers as a stretch, but not required */}
                <select onChange={this.props.handleSortChange} className='sort-dropdown'>
                    <option value='pokemon'>name</option>
                    <option value='shape'>shape</option>
                    <option value='ability_1'>ability</option>
                    <option value='type_1'>type</option>
                </select>
                {/* <select
                    onChange={this.props.handleChange}>
                    <option value='ascending'>ascending</option>
                    <option value='descending'>descending</option>
                </select> */}
            </>
        )
    }
}
