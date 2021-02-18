import React, { Component } from 'react'
import '../App.css';

export default class HomePage extends Component {
    render() {
        return (
            <div className='home-page'>
                <h1>Welcome to the PokeDex!</h1>
                <p>Go to the Search Page to see all of the Pokemon and sort/filter them</p>
                <img src='http://img2.wikia.nocookie.net/__cb20130423051916/battlefordreamislandfanfiction/images/thumb/6/68/Pokeball_(New_Pose).png/500px-Pokeball_(New_Pose).png' alt='Pokeball'/>
            </div>
        )
    }
}
