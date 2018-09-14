import React from 'react';
import './styles/PokemonCard.sass';
// import {attack} from '../assets/icons/*.svg'

const PokemonCard = ({ pokemon }) => {
  const reqSvgs = require.context('../assets/icons/', true, /\.svg$/)

  const icons = []

  pokemon.stats.map(item => {
    icons[item.stat.name] = reqSvgs(`./${item.stat.name}.svg`)
  })

  return (
    <div className="PokemonCard">
      <div className="avatar-section">
        <img src={pokemon.avatars[2]} className="avatar" alt={`${pokemon.name} avatar`} />
      </div>
      <h1 className="name">{pokemon.name}</h1>
      <div>
        <hr className="title-line"/>
        <h2 className="title">STATS</h2>
        {pokemon.stats.map(item => (
          <div className="stat" key={item.stat.name}>
          <img src={icons[item.stat.name]} className="icon" alt={item.stat.name} />
          <div className="value">
          <span className="special-progress" style={{width: `${(item.base_stat + item.effort) / 2}%`}}></span>
          <span className="default-progress" style={{width: `${item.base_stat / 2}%`}}></span>
          <div className="text">
          <span>{item.base_stat}</span>
          {item.effort > 0 &&
            < span className = "effort" > < strong className="plus"> + </strong>{item.effort}</span >
          }
          </div>
          </div>
          </div>
        ))}
        </div>
        <hr className="title-line"/>
        <h2 className="title">STATS</h2>
    </div>
  )
}

export default PokemonCard;