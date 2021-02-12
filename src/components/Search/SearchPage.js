import React, { Component } from 'react';
import '../../App.css';
import PokeList from './PokeList.js';


export default class SearchPage extends Component {
    // Manage state here



    
    render() {
        //Sort 

        // const for filtered list
        return (
            <div>
                Search Page
                <PokeList />
            </div>
        )
    }
}
