import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { AppComponentProps } from '../../App';
import PokemonDetails from '../../pages/PokemonDetails';
import PokemonList from '../../pages/PokemonList';
import './styles.scss';

interface MainProps extends AppComponentProps {}

const Main = (props: MainProps) => {
  const { className } = props;

  return (
    <main className={[className, 'main'].join(' ')}>
      <Switch>
        <Route path="/pokemon/:id">
          <PokemonDetails />
        </Route>
        <Route path="/list/:page">
          <PokemonList />
        </Route>
        <Redirect from="/" to="/list/1" exact />
      </Switch>
    </main>
  );
};

export default Main;
