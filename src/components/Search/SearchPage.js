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
        currentPage: 1,
        perPage: 20,
        totalPokemon: 0,
    }

    componentDidMount = async () => {
        await this.fetchPokemon();
      }

    fetchPokemon = async () => {
        this.setState({
            loading: true
        })
        
        const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?page=${this.state.currentPage}&perPage=${this.state.perPage}&pokemon=${this.state.searchQuery}&sort=${this.state.sortBy}&direction=${this.state.order}`);
        
        this.setState({     
            pokemon: data.body.results,
            loading: false,
            totalPokemon: data.body.count,
        })
    }
    
    handleSearchQueryChange = (e) => {
        this.setState({
            searchQuery: e.target.value,
        })
    }
    
    handleClick = async () => {
        await this.setState({
            currentPage: 1,
        })
        
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

    handlePrevButtonClick = async () => {       
        await this.setState({
          currentPage: this.state.currentPage - 1
        });

        await this.fetchPokemon();
    };

    handleNextButtonClick = async () => {       
        await this.setState({
          currentPage: this.state.currentPage + 1
        });

        await this.fetchPokemon();
    };

    handlePerPageChange = async (e) => {
        await this.setState({
            perPage: e.target.value
        })

        await this.fetchPokemon();
    }

    render() {     
        const lastPage = Math.ceil(this.state.totalPokemon / this.state.perPage);          
        return (
            <div className='search-page'>
                <div className='sidebar'>
                    <div className='search-bar'>
                        <SearchBar 
                        handleSearchQueryChange={this.handleSearchQueryChange}
                        handleClick={this.handleClick}
                        />                       
                        <button className='prev-button' onClick={this.handlePrevButtonClick} disabled={this.state.currentPage === 1}>Prev Page</button>
                        <button className='next-button' onClick={this.handleNextButtonClick} disabled={this.state.currentPage === lastPage}>Next Page</button>
                        <div>Page: {this.state.currentPage}</div>
                        <label className='perPage-dropdown'> Pokemon per page
                            <select onChange={this.handlePerPageChange} >
                                <option value={20}>20</option>
                                <option value={50}>50</option>
                                <option value={75}>75</option>
                                <option value={100}>100</option>
                            </select>
                        </label>
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
