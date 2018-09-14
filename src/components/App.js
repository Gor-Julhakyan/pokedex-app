import React, { Component } from 'react';
import logo from '../logo.svg';
import './styles/App.sass';

import AppToolbar from './AppToolbar';
import PokemonList from './PokemonList';

//Fn that generate each pokemon data for our project
function pokemon(data) {
  let avatars = []

  Object.entries(data.sprites).map(img => {
    if (img[1] !== null) avatars.push(img[1])
  })

  return {
    id: data.id,
    name: data.name,
    avatars: avatars,
    stats: data.stats,
    types: data.types,
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startupLoader: true,
      loaderProgress: '100',
      showLoader: false,
      pokemonPerPage: 2,
      pokemons: [],
      type: '',
    }
    this.inputChanges = this.inputChanges.bind(this)
  }

  //Get data from API
  getPokemons() {
    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${this.state.pokemonPerPage}&offset=0`)
      .then(results => {
        return results.json()
      })
      .then(data => {
        console.log(data)
        data.results.map(item => {
          fetch(item.url)
            .then(results => {
              return results.json()
            })
            .then(data => {
              this.state.pokemons[data.id - 1] = pokemon(data)
              this.onHandleChange(this.state.pokemonPerPage)
            })
        })
      })
  }


  
  componentDidMount() {
    this.getPokemons()
  }


  onHandleChange(e) {
    this.setState({
      loaderProgress: this.state.loaderProgress - 100/e,
      startupLoader: this.state.loaderProgress === 100/e ? false: true,
    })
  }

  inputChanges(e) {
    console.log(e)
    console.log('Id is ' +e.name)
    console.log('Input changes')
    this.state[e.name] = e.value
    this.getPokemons()
  }

  render() {
    return (
      <div className="App">
        {this.state.startupLoader &&
          <div className="loader-container startup-loader">
          <div className="progress" style={{ width: this.state.loaderProgress + '%'}}>{this.aa}</div>
          </div>
        }
        
        {this.state.showLoader &&
          <div className="loader-container loader">
            <img src={logo} className="App-logo" alt="loader" />
          </div>
        }

        <AppToolbar inputChanges={this.inputChanges} states={this.state}/>
        

        <PokemonList pokemons={this.state.pokemons} />
        </div>
    );
  }
}

export default App;
