import React, { useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import ProductionDisplay from './production/ProductionDisplay';
import './gameData.css';

function GameData() {
  const { playerCharacter, setPlayerCharacter } = useContext(GameContext);

  return (
    <section className='playerData__container'>
      <ProductionDisplay />
    </section>
  );
}

export default GameData;
