import React, { Component } from 'react';
import '../../App.css';
import PokeList from './PokeList.js';
import SearchBar from './SearchBar.js';
// import pokeData from '../../data.js';
import SortOrder from './SortOrder';
import request from 'superagent';


export default class SearchPage extends Component {
    state = {
        pokemon: [],
        sortBy: 'pokemon',
        order: 'asc',
        searchQuery: '',
    }

    componentDidMount = async () => {
        await this.fetchPokemon();
      }

    fetchPokemon = async () => {
        const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.searchQuery}&sort=${this.state.sortBy}&direction=${this.state.order}`);
        
        this.setState({     
            pokemon: data.body.results,
          })
    }

    handleSearchQueryChange = (e) => {
        this.setState({
            searchQuery: e.target.value,
        })
    }

    handleClick = async () => {
        await this.fetchPokemon();
      }

    handleSortChange = async (e) => { 
        await this.setState({
          sortBy: e.target.value,
        })

        await this.fetchPokemon();
    }

    handleOrderChange = async (e) => {       
        await this.setState({
          order: e.target.value,
        })

        await this.fetchPokemon();
    };

    render() {               
        return (
            <div className='search-page'>
                <div className='sidebar'>
                    <div className='search-bar'>
                        <SearchBar 
                        handleSearchQueryChange={this.handleSearchQueryChange}
                        handleClick={this.handleClick}
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
                        pokeData={this.state.pokemon}
                    />
                </div>
            </div>
        )
    }
}
