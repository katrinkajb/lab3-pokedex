import React, { Component } from 'react'
import request from 'superagent';
import LoadingSpinner from './Search/LoadingSpinner.js';
import PokeItemDetail from './Search/PokeItemDetail.js';

export default class PokemonDetail extends Component {
    state = {
        pokemonData: {},
        loading: true,
    }
    
    componentDidMount = async () => {
        this.setState({
            loading: true
        })
        
        const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex/${this.props.match.params.pokemonId}`);
        
        this.setState({     
            pokemonData: data.body.results.find(item => item.pokemon === this.props.match.params.pokemonId),
            loading: false,
          })
      }

    render() {
        return (
            <div className='detail-page'>
                { this.state.loading 
                    ? <LoadingSpinner /> 
                    : <PokeItemDetail 
                        pokeProp={this.props.pokemonData.pokemonId} />
                }    
            </div>
        )
    }
}
