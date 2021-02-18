import React, { Component } from 'react';
import PokeItem from './PokeItem';

export default class PokeList extends Component {

    render() {
        return (
            <ul className='list'>
                {this.props.pokeData.map(pokeObject =>
                    <PokeItem
                        key={pokeObject._id}
                        _id={pokeObject._id}
                        pokemonName={pokeObject.pokemon}
                        image={pokeObject.url_image}
                        shape={pokeObject.shape}
                        ability={pokeObject.ability_1} 
                        type={pokeObject.type_1}
                    />)}
            </ul>
        )
    }
}
