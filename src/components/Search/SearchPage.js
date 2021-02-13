import React, { Component } from 'react';
import '../../App.css';
import PokeList from './PokeList.js';
import SortOrder from './SortOrder.js';
import SearchBar from './SearchBar.js';
import pokeData from '../../data.js';

export default class SearchPage extends Component {
    state = {
        pokemon: [],
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
        const filteredList = pokeData.filter(pokemon => pokemon.pokemon.includes(this.state.searchQuery))

        if (this.state.order === 'ascending')
            this.state.pokemon.sort((a, b) => a[this.state.sortBy].localeCompare(b[this.state.sortBy]))
        if (this.state.order === 'descending')
            this.state.pokemon.sort((a, b) => b[this.state.sortBy].localeCompare(a[this.state.sortBy]))

       
        return (
            <div className='search-page'>
                <div className='sidebar'>
                    <div className='search-div'>
                        <SearchBar currentValue={this.state.searchQuery}
                            handleSearchQueryChange={this.handleSearchQueryChange}
                        />
                    </div>
                    <div className='sort-div'>
                        Sort by:
                        <SortOrder 
                            handleSortChange={this.handleSortChange}
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
