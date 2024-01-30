import React from 'react'
import { Link } from 'react-router-dom'

const PokemonList = ({ pokemonList }) => {
  return (
    <>
      <h1>Pokemon updated at {new Date().toString()}</h1>
      <div className="list-container">
        {pokemonList.map(({ id, name }) => (
          <Link
            key={id}
            to={`/pokemon/${name}`}
            className="list-item"
            style={{
              backgroundImage: `url(${`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`})`,
            }}
          >
            <div className="list-item-name">{name}</div>
          </Link>
        ))}
      </div>
    </>
  )
}

export default PokemonList
