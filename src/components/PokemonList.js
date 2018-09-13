import React from 'react';
import './styles/PokemonList.sass';

const PokemonList = ({ pokemons }) => {
  console.log(pokemons)
  return (
    <div className="PokemonList">
      {pokemons.map(pokemon => (
        <div className="pokemon-card" key={pokemon.id}>
          <img src={pokemon.avatar} className="avatar" alt={`${pokemon.name} avatar`} />
          <h3 className="name">{pokemon.name}</h3>
          <div>
            {pokemon.stats.map(item => (
              <div key={item.stat.name}>
                <span>{item.base_stat} + </span>
                <span>{item.effort}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default PokemonList;