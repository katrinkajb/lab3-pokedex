import React, { Component } from 'react';
import '../App.css';

export default class PokeItemDetail extends Component {
    render() {
        const {
            pokemon,
            url_image,
            attack,
            defense,
            shape,
            ability_1, 
            ability_2,
            type_1,
            special_attack,
            special_defense,
            speed,
        } = this.props.pokeProp

        return (
            <li className='list-item'>
                <div>
                    <div className='pokeName, capitalize'>{pokemon}</div>
                    <img src={url_image} alt='Pokemon' className='poke-img' />
                    <div>
                        <div className='capitalize'>Shape: {shape} </div>
                        <div className='capitalize'>Ability: {ability_1} </div>
                        <div className='capitalize'>Second Ability: {ability_2} </div>
                        <div className='capitalize'>Type: {type_1}  </div>
                        <div>Attack: {attack}  </div>
                        <div>Defense: {defense}  </div>
                        <div className='capitalize'>Special Attach: {special_attack} </div>
                        <div className='capitalize'>Special Defense: {special_defense} </div>
                        <div className='capitalize'>Speed: {speed} </div>
                    </div>
                </div>
            </li>
        )
    }
}
