import React, { Component } from 'react';
import '../../App.css';
import PokeList from './PokeList.js';
import SortOrder from './SortOrder.js';
import SearchBar from './SearchBar.js';
import pokeData from '../../data.js';

export default class SearchPage extends Component {
    state = {
        pokemon: [],
        // order: 'ascending',
        sortBy: 'pokemon',
        searchQuery: '',
    }

    handleSortChange = (e) => {
        this.setState({
          sortBy: e.target.value
        })
    }
// change handler for order
// handleOrderChange

    render() {
        // const for filtered list

        pokeData.sort(
            (a, b) => a[this.state.sortBy].localeCompare(b[this.state.sortBy])
            );

        return (
            <div className='search-page'>
                <div className='sidebar'>
                    <div className='search-div'>
                        <SearchBar />
                    </div>
                    <div className='sort-div'>
                        Sort by:
                        <SortOrder 
                            handleChange={this.handleChange}
                            // pokemonName={pokeObject.pokemon}
                            // shape={pokeObject.shape}
                            // ability={pokeObject.ability_1} 
                            // type={pokeObject.type_1}                        
                        />
                    </div>
                </div>
                <div className='main-area'>
                    <PokeList 
                        pokeData={pokeData}
                    />
                </div>
            </div>
        )
    }
}
