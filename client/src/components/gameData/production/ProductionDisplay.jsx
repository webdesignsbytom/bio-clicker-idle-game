import React, { useContext } from 'react';
import { useState } from 'react';
import './levelDisplay.css';
import LevelState from './../../../db/levels.json';
import { GameContext } from './../../../context/GameContext';
import { OptionContext } from '../../../context/OptionContext';
import { useEffect } from 'react';
import Completed from './level/Completed';
import LevelData from './level/LevelData';
import PowerProduction from './power/PowerProduction';
import FuelProduction from './fuel/FuelProduction';

function LevelDisplay() {
  const { playerCharacter, setPlayerCharacter } = useContext(GameContext);
  const {
    toggleLevelComplete,
    setToggleLevelComplete,
    completedLevelData,
    setCompletedLevelData,
  } = useContext(OptionContext);

  const [levelsArray, setLevelsArray] = useState(LevelState);
  const [currentLevel, setCurrentLevel] = useState({});

  useEffect(() => {
    const currentLevel = playerCharacter.currentLevel;
    const levelIndex = currentLevel - 1;
    setCurrentLevel(levelsArray[levelIndex]);
    
  }, [playerCharacter.currentLevel]);

  if (playerCharacter.totalScore === currentLevel.targetScore) {
    setCompletedLevelData(currentLevel)
    setToggleLevelComplete(true);
    const newLevel = playerCharacter.currentLevel + 1;

    setPlayerCharacter({
      ...playerCharacter,
      totalScore: 0,
      currentLevel: newLevel,
    });
  }

  return (
    <section className='gameProduction__data__container'>
     
      <FuelProduction />
      <PowerProduction />
      <LevelData currentLevel={currentLevel} />
    </section>
  );
}

export default LevelDisplay;
