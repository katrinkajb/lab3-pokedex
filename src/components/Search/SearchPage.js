import React, { Component } from 'react';
import '../../App.css';
import PokeList from './PokeList.js';
import SortOrder from './SortOrder.js';
import SearchBar from './SearchBar.js';

export default class SearchPage extends Component {
    state = {
        pokemon: [],
        sortOrder: '',
        sortBy: 'pokemonName',
        searchQuery: '',
    }

    handleChange = (e) => {
        this.setState({
          sortBy: e.target.value
        })
    }

    handleSearchQueryChange = (e) => {
        e.preventDefault()
        this.setState({
            searchQuery: e.target.value
        })
    }

    render() {
        // const for filtered list
        // const filteredPokemon = pokemonName.filter((pokemonName) => {
        //     if(!this.state.pokemonName) return true;
        //     return false
        // });

        return (
            <div className='search-page'>
                <div className='sidebar'>
                    <div className='search-div'>
                        <SearchBar />
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
