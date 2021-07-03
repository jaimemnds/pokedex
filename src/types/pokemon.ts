import { Sprites } from './sprites';

export interface PokemonReport {
  count: number;
  next: string;
  previous: string;
  results: Reference<Pokemon>[];
}

export interface Pokemon {
  abilities: any[];
  base_experience: number;
  forms: Reference<Pokemon>[];
  game_indices: any[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: any[];
  name: string;
  order: number;
  past_types: any[];
  species: Reference<Pokemon>;
  sprites: Sprites.Own;
  stats: any[];
  types: any[];
  weight: number;
}

export interface Reference<T> {
  name: string;
  url: string;
}
