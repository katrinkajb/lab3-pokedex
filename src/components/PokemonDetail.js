import React, { Component } from 'react'
import request from 'superagent';
import LoadingSpinner from './Search/LoadingSpinner.js';
import PokeItemDetail from './PokeItemDetail.js';
import '../App.css';

export default class PokemonDetail extends Component {
    state = {
        pokemonData: {},
        loading: true,
    }
    
    componentDidMount = async () => {
        this.setState({
            loading: true
        })
        
        const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex/${this.props.match.params._id}`);
        
        this.setState({     
            pokemonData: data.body,
            loading: false,
          })
      }

    render() {
        return (
            <div className='detail-page'>
                { this.state.loading 
                    ? <LoadingSpinner /> 
                    : <PokeItemDetail 
                        pokeProp={this.state.pokemonData} />
                }    
            </div>
        )
    }
}
