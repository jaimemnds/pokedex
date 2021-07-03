import { useCallback, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import Header from './layout/Header';
import Main from './layout/Main';
import { PokemonContext } from './services/context';
import { PokeAPI } from './services/pokeapi';
import { Pokemon } from './types/pokemon';

export interface AppComponentProps
  extends React.HTMLAttributes<HTMLDivElement> {}

function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const loadPokemons = useCallback(async (page: number) => {
    const report = await PokeAPI.getPokemonReport(page);
    const newPokemons = await PokeAPI.getPokemons(report);
    setPokemons(newPokemons);
  }, []);

  const loadPokemon = useCallback(async (id) => {
    const newPokemon = await PokeAPI.getPokemonById(id);
    setPokemons((currentPokemons) => [...currentPokemons, newPokemon]);
  }, []);

  return (
    <BrowserRouter>
      <PokemonContext.Provider value={{ pokemons, loadPokemon, loadPokemons }}>
        <div className="app">
          <div className="app-spine">
            <Header className="app-header" />
            <Main className="app-main" />
          </div>
        </div>
      </PokemonContext.Provider>
    </BrowserRouter>
  );
}

export default App;
