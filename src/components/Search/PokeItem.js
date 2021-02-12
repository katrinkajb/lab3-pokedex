import React, { Component } from 'react';

export default class PokeItem extends Component {
    render() {
        const {
            pokemonName,
            image,
            attack,
            defense,
            shape,
        } = this.props

        return (
            <li>
                <p>
                    {pokemonName}
                    {image}
                </p>
            </li>
        )
    }
}
