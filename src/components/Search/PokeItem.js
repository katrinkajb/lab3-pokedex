import React, { Component } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';

export default class PokeItem extends Component {
    render() {
        const {
            pokemonName,
            _id,
            image,
            shape,
            type,
        } = this.props

        return (
            <Link to={_id}>
                <li className='list-item'>
                    <div>
                        <div className='pokeName, capitalize'>{pokemonName}</div>
                        <img src={image} alt='Pokemon' className='poke-img' />
                        <div>
                            <div className='capitalize'>Shape: {shape}  </div>
                            <div className='capitalize'>Type: {type}  </div>
                        </div>
                    </div>
                </li>
            </Link>
        )
    }
}
