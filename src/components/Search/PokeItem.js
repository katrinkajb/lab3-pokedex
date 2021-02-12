import React, { Component } from 'react';
import '../../App.css';

export default class PokeItem extends Component {
    render() {
        const {
            pokemonName,
            image,
            attack,
            defense,
            shape,
            ability, 
            type,
        } = this.props

        return (
            <li className='list-item'>
                <p>
                    <div className='pokeName'>{pokemonName}</div>
                    <img src={image} alt='Pokemon' className='poke-img' />
                    <div>
                        <div>Shape: {shape}  </div>
                        <div>Ability: {ability}  </div>
                        <div>Type: {type}  </div>
                        <div>Attack: {attack}  </div>
                        <div>Defense: {defense}  </div>
                    </div>
                </p>
            </li>
        )
    }
}
