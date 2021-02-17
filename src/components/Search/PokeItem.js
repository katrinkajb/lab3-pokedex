import React, { Component } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';

export default class PokeItem extends Component {
    render() {
        const {
            pokemonName,
            pokemonId,
            image,
            attack,
            defense,
            shape,
            ability, 
            type,
        } = this.props

        return (
            <Link to={pokemonId}>
                <li className='list-item'>
                    <div>
                        <div className='pokeName, capitalize'>{pokemonName}</div>
                        <img src={image} alt='Pokemon' className='poke-img' />
                        <div>
                            <div className='capitalize'>Shape: {shape}  </div>
                            <div className='capitalize'>Ability: {ability}  </div>
                            <div className='capitalize'>Type: {type}  </div>
                            <div>Attack: {attack}  </div>
                            <div>Defense: {defense}  </div>
                        </div>
                    </div>
                </li>
            </Link>
        )
    }
}
