import 'axios';
import axios from 'axios';
import { Pokemon, PokemonReport, Reference } from '../types/pokemon';

export class PokeAPI {
  static url = 'https://pokeapi.co/api/v2';
  static pokemonUrl = (pokemonId) => `${PokeAPI.url}/pokemon/${pokemonId}`;

  static async getPokemonReport(
    page: number = 1,
    limit: number = 20
  ): Promise<PokemonReport> {
    const offset = (page - 1) * limit;
    const endpoint = `${PokeAPI.url}/pokemon`;
    const { data } = await axios.get(endpoint, { params: { offset, limit } });
    return data;
  }

  static async getPokemon(pokemonRef: Reference<Pokemon>): Promise<Pokemon> {
    const { url } = pokemonRef;
    const { data: pokemon } = await axios.get(url);
    return pokemon;
  }

  static async getPokemonById(id): Promise<Pokemon> {
    const { data: pokemon } = await axios.get(PokeAPI.pokemonUrl(id));
    return pokemon;
  }

  static async getPokemons(report: PokemonReport): Promise<Pokemon[]> {
    const { results: pokemonsRefs } = report;
    const pokemons: Pokemon[] = [];
    for (const pokemonRef of pokemonsRefs) {
      const pokemon = await PokeAPI.getPokemon(pokemonRef);
      if (pokemon.id < 10000) {
        pokemons.push(pokemon);
      }
    }
    return pokemons;
  }
}
