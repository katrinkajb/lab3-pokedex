import React, { Component } from 'react';
import '../../App.css';
import PokeList from './PokeList.js';
import SearchBar from './SearchBar.js';
import pokeData from '../../data.js';
import SortOrder from './SortOrder';

export default class SearchPage extends Component {
    state = {
        pokemon: pokeData,
        sortBy: 'pokemon',
        order: 'ascending',
        searchQuery: '',
    }

    handleSearchQueryChange = (e) => {
        this.setState({
            searchQuery: e
        })
    }

    handleSortChange = (e) => {
        this.setState({
          sortBy: e.target.value
        })
    }
// change handler for order
    handleOrderChange = (e) => {
        this.setState({
        order: e.target.value
        })
    }

    render() {
        if (this.state.order === 'ascending') {
        this.state.pokemon.sort((a, b) => a[this.state.sortBy].localeCompare(b[this.state.sortBy])) 
        } else {
        this.state.pokemon.sort((a, b) => b[this.state.sortBy].localeCompare(a[this.state.sortBy]))
        };

        const filteredList = pokeData.filter(poke => poke.pokemon.includes(this.state.searchQuery))
               
        return (
            <div className='search-page'>
                <div className='sidebar'>
                    <div className='search-div'>
                        <SearchBar 
                            handleSearchQueryChange={this.handleSearchQueryChange}
                        />
                    </div>
                    <div className='sort-div'>
                        Sort by:
                        <SortOrder 
                            handleSortChange={this.handleSortChange}
                            handleOrderChange={this.handleOrderChange}
                        />
                    </div>
                </div>
                <div className='main-area'>
                    <PokeList 
                        pokeData={filteredList}
                    />
                </div>
            </div>
        )
    }
}
