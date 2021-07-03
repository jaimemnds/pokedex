import { createContext, useContext } from 'react';
import { Pokemon } from '../types/pokemon';

export interface PokemonContextType {
  pokemons: Pokemon[];
  loadPokemon?;
  loadPokemons?;
}

export const PokemonContext = createContext<PokemonContextType>({
  pokemons: [],
});

export const usePokemonContext = () => useContext(PokemonContext);
