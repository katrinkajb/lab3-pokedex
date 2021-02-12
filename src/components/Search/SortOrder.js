import React, { Component } from 'react';
import pokeData from '../../data.js';
import '../../App.css';

export default class SortOrder extends Component {
    state = {
        pokeData: pokeData,
        pokemonName: '',
        sortOrder: '',
        sortBy: 'pokemonName',
        searchQuery: '',
    }
    render() {
        return (
            <div>
                {/* only sort by name, shape, ability, and type so it's only strings. Can do the numbers as a stretch, but not required */}
                <select >
                    {/* onChange={this.props.handleChange} */}
                    <option value='name'>name</option>
                    <option value='shape'>shape</option>
                    <option value='ability'>ability</option>
                    <option value='type'>type</option>
                </select>
            </div>
        )
    }
}
