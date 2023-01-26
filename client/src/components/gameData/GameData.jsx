import React, { useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import LevelDisplay from './production/LevelDisplay';
import Production from './production/Production';
import './gameData.css';

function GameData() {
  const { playerCharacter, setPlayerCharacter } = useContext(GameContext);

  return (
    <section className='playerData__container'>
      <Production />
      <LevelDisplay />
    </section>
  );
}

export default GameData;
