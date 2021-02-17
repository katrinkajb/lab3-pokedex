import React, { Component } from 'react';
import '../../App.css';
import PokeList from './PokeList.js';
import SearchBar from './SearchBar.js';
import SortOrder from './SortOrder';
import request from 'superagent';
import LoadingSpinner from './LoadingSpinner.js';

export default class SearchPage extends Component {
    state = {
        pokemon: [],
        sortBy: 'pokemon',
        order: 'asc',
        searchQuery: '',
        loading: false,
    }

    componentDidMount = async () => {
        await this.fetchPokemon();
      }

    fetchPokemon = async () => {
        this.setState({
            loading: true
        })
        
        const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.searchQuery}&sort=${this.state.sortBy}&direction=${this.state.order}`);
        
        this.setState({     
            pokemon: data.body.results,
            loading: false,
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
                    <img className='drake' width='220' height='220' alt='Drake with pokeballs' src='https://media.giphy.com/media/vsyKKf1t22nmw/giphy.gif' />

                </div>
                <div className='main-area'>
                    { this.state.loading 
                        ? <LoadingSpinner /> 
                        : <PokeList 
                            pokeData={this.state.pokemon}
                        />
                    }
                </div>
            </div>
        )
    }
}
