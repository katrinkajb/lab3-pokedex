import React, { Component } from 'react';
import '../../App.css';
import PokeList from './PokeList.js';
import pokeData from '../../data.js';
import SortOrder from './SortOrder.js;'

export default class SearchPage extends Component {
    state = {
        pokeData: pokeData,
        pokemonName: '',
        sortOrder: '',
        sortBy: 'pokemonName',
        searchQuery: '',
    }

    // handleChange = (e) => {
    //     this.setState({
    //       sortBy: e.target.value
    //     })
    //   }

    render() {

        // const for filtered list
        return (
            <div className='search-page'>
                <div className='sidebar'>
                    <div className='search-div'>
                        Search:
                        {/* <SearchBar /> */}
                    </div>
                    <div className='sort-div'>
                        Sort by:
                        <SortOrder />
                    </div>
                </div>
                <div className='main-area'>
                    <PokeList />
                </div>
            </div>
        )
    }
}
