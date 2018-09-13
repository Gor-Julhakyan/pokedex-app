import React from 'react';
import './styles/PokemonList.sass';

import PokemonCard from './PokemonCard';

const PokemonList = ({ pokemons }) => {
  console.log(pokemons)
  return (
    <div className="PokemonList">
      {pokemons.map(pokemon => (
        <PokemonCard pokemon={pokemon} key={pokemon.id} />
        
      ))}
    </div>
  );
}

export default PokemonList;