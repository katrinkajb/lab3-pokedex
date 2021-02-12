import React, { Component } from 'react';
import PokeItem from './PokeItem';
import pokeData from '../../data.js';

export default class PokeList extends Component {
    state = {
        pokeData: pokeData,
        pokemonName: '',
        sortOrder: '',
        sortBy: 'pokemonName',
        searchQuery: '',
    }

    render() {
        return (
            <ul className='list'>
                {this.state.pokeData.map(pokeObject =>
                    <PokeItem
                        key={pokeObject._id}
                        pokemonName={pokeObject.pokemon}
                        image={pokeObject.url_image}
                        attack={pokeObject.attack}
                        defense={pokeObject.defense}
                        shape={pokeObject.shape}
                        ability={pokeObject.ability_1} 
                        type={pokeObject.type_1}
                    />)}
            </ul>
        )
    }
}
