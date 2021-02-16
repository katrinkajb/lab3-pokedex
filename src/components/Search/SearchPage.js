import React, { Component } from 'react';
import '../../App.css';
import PokeList from './PokeList.js';
// import SearchBar from './SearchBar.js';
// import pokeData from '../../data.js';
import SortOrder from './SortOrder';
import request from 'superagent';


export default class SearchPage extends Component {
    state = {
        pokemon: [],
        sortBy: 'pokemon',
        order: 'ascending',
        searchQuery: '',
    }

// componentDidMount

    handleSearchQueryChange = (e) => {
        this.setState({
            searchQuery: e.target.value
        })
    }

    handleClick = async () => {
        const data = await request.get('https://pokedex-alchemy.herokuapp.com/api/pokedex?sort=defence&direction=desc');
        
        this.setState({     
            pokemon: data.body.results,
          })
      }

    handleSortChange = (e) => {
        this.setState({
          sortBy: e.target.value
        })
    }

    handleOrderChange = (e) => {
        this.setState({
        order: e.target.value
        })
    };

    render() {
        if (this.state.order === 'ascending') {
        this.state.pokemon.sort((a, b) => a[this.state.sortBy].localeCompare(b[this.state.sortBy])) 
        } else {
        this.state.pokemon.sort((a, b) => b[this.state.sortBy].localeCompare(a[this.state.sortBy]))
        };

        // const filteredList = pokeData.filter(poke => poke.pokemon.includes(this.state.searchQuery))
               
        return (
            <div className='search-page'>
                <div className='sidebar'>
                    <div className='search-bar'>
                        {/* <input onChange={(e)=> this.handleSearchQueryChange} placeholder='Search by Name'/> */}
                        <button onClick={this.handleClick}>Search</button>
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
                        pokeData={this.state.pokemon}
                    />
                </div>
            </div>
        )
    }
}
