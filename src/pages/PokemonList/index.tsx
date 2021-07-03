import React from 'react';
import { Link, LinkProps, useParams } from 'react-router-dom';
import IconButton from '../../components/Button/IconButton';
import PokemonIndexCard from '../../components/PokemonIndexCard';
import { usePokemonContext } from '../../services/context';
import {
  BiChevronLeft,
  BiChevronRight,
  BiChevronsLeft,
  BiChevronsRight,
} from 'react-icons/bi';
import './styles.scss';
import { useEffect } from 'react';

interface PokemonListParams {
  page;
}

const PokemonList = () => {
  const { page } = useParams<PokemonListParams>();

  const { pokemons, loadPokemons } = usePokemonContext();

  useEffect(() => {
    if (loadPokemons) {
      loadPokemons(page);
    }
  }, [loadPokemons, page]);

  return (
    <div className="pokemon-list-page">
      <div className="pokemon-list-navigator">
        <CustomLink to={`/list/1`} disabled={page <= 1}>
          <IconButton>
            <BiChevronsLeft size="20" />
          </IconButton>
        </CustomLink>
        <CustomLink to={`/list/${+page - 1}`} disabled={page <= 1}>
          <IconButton>
            <BiChevronLeft size="20" />
          </IconButton>
        </CustomLink>
        <CustomLink to={`/list/${+page + 1}`} disabled={page >= 45}>
          <IconButton>
            <BiChevronRight size="20" />
          </IconButton>
        </CustomLink>
        <CustomLink to={`/list/45`} disabled={page >= 45}>
          <IconButton>
            <BiChevronsRight size="20" />
          </IconButton>
        </CustomLink>
      </div>
      <div className="pokemon-list">
        {pokemons.map((pokemon) => (
          <Link to={`/pokemon/${pokemon.id}`}>
            <PokemonIndexCard pokemon={pokemon} />
          </Link>
        ))}
      </div>
    </div>
  );
};

interface CustomLinkProps extends LinkProps {
  disabled?: boolean;
}

const CustomLink = (props: CustomLinkProps) => {
  const { disabled } = props;
  return disabled ? (
    <span style={{ opacity: 0.5, pointerEvents: 'none' }}>
      {props.children}
    </span>
  ) : (
    <Link {...props}></Link>
  );
};

export default PokemonList;
