import React from 'react';
import { AppComponentProps } from '../../App';
import { Pokemon } from '../../types/pokemon';
import './styles.scss';

interface PokemonIndexCardProps extends AppComponentProps {
  pokemon: Pokemon;
}

const PokemonIndexCard = (props: PokemonIndexCardProps) => {
  const { pokemon } = props;

  return (
    <div className="pokemon-index-card">
      <div className="pokemon-index-card-header">
        <h2>
          {pokemon.name}
          <span>#{pokemon.id}</span>
        </h2>
        <img src={pokemon.sprites.front_default} alt="Pokemon Sprite" />
      </div>
      <div className="pokemon-index-card-footer"></div>
    </div>
  );
};

export default PokemonIndexCard;
