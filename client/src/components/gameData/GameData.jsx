import React, { useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import LevelDisplay from './production/LevelDisplay';
import './gameData.css';

function GameData() {
  const { playerCharacter, setPlayerCharacter } = useContext(GameContext);

  return (
    <section className='playerData__container'>
      <LevelDisplay />
    </section>
  );
}

export default GameData;
