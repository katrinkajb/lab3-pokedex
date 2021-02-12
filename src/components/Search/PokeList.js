import React, { Component } from 'react';
import PokeItem from './PokeItem';
import pokeData from '../../data.js';

export default class PokeList extends Component {
    state = {
        pokeData: pokeData,
        pokemonName: '',
        sortOrder: '',
        sortBy: 'pokemon',
        searchQuery: '',
    }

    render() {
        return (
            <div>
                {this.state.pokeData.map(pokeObject =>
                    <PokeItem
                        key={pokeObject._id}
                        image={pokeObject.url_image}
                        attack={pokeObject.attack}
                        defense={pokeObject.defense}
                        shape={pokeObject.shape}
                    />)}
            </div>
        )
    }
}
