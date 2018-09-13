import React, { Component } from 'react';
import logo from '../logo.svg';
import './styles/App.sass';

import AppToolbar from './AppToolbar';
import PokemonList from './PokemonList';

function pokemon(data) {
  let avatars = []

  Object.entries(data.sprites).map(img => {
    if (img[1] !== null) avatars.push(img[1])
  })

console.log(avatars)


  return {
    id: data.id,
    name: data.name,
    avatars: avatars,
    stats: data.stats,
    types: data.types,
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      startupLoader: true,
      loaderProgress: '100',
      showLoader: false,
      pokemons: []
    }
  }

  getPokemons() {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=2&offset=0')
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
              this.onHandleChange(2)
              // console.log(`data is ${this.state.pokemons}`)
              // console.log(`Progress is ${this.state.loaderProgress}`)
            })
        })
      })
  }


  
  componentDidMount() {
    this.getPokemons()
  }

  onHandleChange(e, pockemonData) {
    this.setState({
      loaderProgress: this.state.loaderProgress - 100/e,
      startupLoader: this.state.loaderProgress === 100/e ? false: true,
    })
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

        <AppToolbar />
        
        {!this.state.startupLoader && !this.state.showLoader &&
          <PokemonList pokemons={this.state.pokemons} />
        }
      </div>
    );
  }
}

export default App;
