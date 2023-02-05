import React, { useContext } from 'react';
import { useState } from 'react';
import './levelDisplay.css';
import LevelState from './../../../db/levels.json';
import { GameContext } from './../../../context/GameContext';
import { OptionContext } from '../../../context/OptionContext';
import { useEffect } from 'react';
import Completed from '../../level/Completed';
import LevelData from '../../level/LevelData';
import PowerProduction from './power/PowerProduction';
import FuelProduction from './fuel/FuelProduction';
// TODO: change to produiction
function LevelDisplay() {
  const { playerCharacter, setPlayerCharacter } = useContext(GameContext);
  const {
    toggleLevelComplete,
    setToggleLevelComplete,
    completedLevelData,
    setCompletedLevelData,
  } = useContext(OptionContext);

  return (
    <section className='gameProduction__data__container'>
      <FuelProduction />
      <PowerProduction />
    </section>
  );
}

export default LevelDisplay;
