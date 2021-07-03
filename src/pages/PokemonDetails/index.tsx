import React, { useCallback, useEffect, useState } from 'react';
import { BiArrowBack, BiRotateLeft, BiRotateRight } from 'react-icons/bi';
import { useHistory, useParams } from 'react-router-dom';
import Button from '../../components/Button';
import IconButton from '../../components/Button/IconButton';
import PokemonTypeChip from '../../components/PokemonTypeChip';
import { usePokemonContext } from '../../services/context';
import { Pokemon } from '../../types/pokemon';
import './styles.scss';

interface PokemonDetailsParams {
  id;
}

type SpriteAvailable = 'front_default' | 'back_default';

const PokemonDetails = () => {
  let { id } = useParams<PokemonDetailsParams>();
  const history = useHistory();
  const { pokemons, loadPokemon } = usePokemonContext();
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [spriteToShow, setSpriteToShow] =
    useState<SpriteAvailable>('front_default');

  const pokemonById = useCallback(
    (pokemon: Pokemon) => pokemon.id === +id,
    [id]
  );

  useEffect(() => {
    const selectedPokemon = pokemons.find(pokemonById);
    if (!selectedPokemon) {
      loadPokemon(id);
    } else {
      setPokemon(selectedPokemon);
    }
  }, [pokemons]);

  const handleClickRotateSprite = () => {
    setSpriteToShow((currentSprite) =>
      currentSprite === 'front_default' ? 'back_default' : 'front_default'
    );
  };

  const getRotateIcon = (sprite: SpriteAvailable) =>
    sprite === 'front_default' ? (
      <BiRotateRight size="16" />
    ) : (
      <BiRotateLeft size="16" />
    );

  // Setup stats
  const parsedStats: any = {};
  if (pokemon?.stats) {
    for (const statField of pokemon.stats) {
      parsedStats[statField.stat.name] = statField['base_stat'];
    }
  }

  // Setup abilities
  const abilitySlotToName = (slot: any) => slot.ability.name;
  const transformHyphensToSpaces = (text: string) => text.replaceAll('-', ' ');
  const parsedAbilities: any[] =
    pokemon?.abilities.map(abilitySlotToName).map(transformHyphensToSpaces) ||
    [];

  // Setup types
  const typeSlotToName = (slot: any) => slot.type.name;
  const parsedTypes: any[] = pokemon?.types.map(typeSlotToName) || [];

  return pokemon ? (
    <div className="pokemon-details-page">
      <div className="pokemon-details-navigator">
        <Button onClick={history.goBack}>
          <BiArrowBack size="16" style={{ marginRight: '8px' }} /> Go back
        </Button>
      </div>
      <div className="pokemon-details">
        <div className="pokemon-details-header">
          <h1>
            {pokemon.name}
            <span>#{pokemon.id}</span>
          </h1>
          <IconButton
            className="rotate-sprite-button"
            onClick={handleClickRotateSprite}
          >
            {getRotateIcon(spriteToShow)}
          </IconButton>
          <img src={pokemon.sprites[spriteToShow]} alt="Pokemon Sprite" />
        </div>
        <div className="pokemon-details-body">
          <section>
            <h2>Size</h2>
            <div className="stat">
              <span className="stat-label">Size:</span>{' '}
              <span className="stat-value">{pokemon.height * 10}cm</span>
            </div>
            <div className="stat">
              <span className="stat-label">Weight:</span>{' '}
              <span className="stat-value">{pokemon.weight / 100}kg</span>
            </div>
          </section>
          <section>
            <h2>Stats</h2>
            <div className="stat">
              <span className="stat-label">HP:</span>{' '}
              <span className="stat-value">{parsedStats.hp}</span>
            </div>
            <div className="stat">
              <span className="stat-label">Attack:</span>{' '}
              <span className="stat-value">{parsedStats.attack}</span>
            </div>
            <div className="stat">
              <span className="stat-label">Defense:</span>{' '}
              <span className="stat-value">{parsedStats.defense}</span>
            </div>
            <div className="stat">
              <span className="stat-label">Special Attack:</span>
              <span className="stat-value">
                {parsedStats['special-attack']}
              </span>
            </div>
            <div className="stat">
              <span className="stat-label">Special Defense:</span>{' '}
              <span className="stat-value">
                {parsedStats['special-defense']}
              </span>
            </div>
            <div className="stat">
              <span className="stat-label">Speed:</span>{' '}
              <span className="stat-value">{parsedStats.speed}</span>
            </div>
          </section>
          <section>
            <h2>Abilities</h2>
            {parsedAbilities.map((ability) => (
              <span className="ability-value">{ability}</span>
            ))}
          </section>
          <section>
            <h2>Types</h2>
            {parsedTypes.map((type) => (
              <PokemonTypeChip type={type} />
            ))}
          </section>
        </div>
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default PokemonDetails;
