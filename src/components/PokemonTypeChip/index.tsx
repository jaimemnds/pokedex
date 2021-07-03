import React from 'react';
import { AppComponentProps } from '../../App';
import {
  PokemonType,
  PokemonTypeColor,
  PokemonTypeBackgroundColor,
} from '../../types/pokemon-types';
import './styles.scss';

interface PokemonTypeChipProps extends AppComponentProps {
  type: PokemonType;
}

const PokemonTypeChip = (props: PokemonTypeChipProps) => {
  const { type } = props;
  const typeKey = PokemonType[type];
  return (
    <div
      className="pokemon-type-chip"
      style={{
        backgroundColor: PokemonTypeBackgroundColor[typeKey],
        color: PokemonTypeColor[typeKey],
      }}
    >
      {type}
    </div>
  );
};

export default PokemonTypeChip;
