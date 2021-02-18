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
            type_2,
            hp,
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
                        <div className='capitalize'>Type: {type_1} </div>
                        <div className='capitalize'>Second Type: {type_2} </div>
                        <div>Attack: {attack} </div>
                        <div>Defense: {defense} </div>
                        <div>Hit Points: {hp} </div>
                        <div>Speed: {speed} </div>
                    </div>
                </div>
            </li>
        )
    }
}
