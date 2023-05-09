import React, { useContext, useEffect, useState } from 'react';
// Context
import { GameContext } from '../../context/GameContext';
import { OptionContext } from '../../context/OptionContext';
import LevelState from '../../db/levels.json';

function LevelData() {
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

  if (playerCharacter.totalScore >= currentLevel.targetScore) {
    setCompletedLevelData(currentLevel);
    setToggleLevelComplete(true);
    const newLevel = playerCharacter.currentLevel + 1;

    setPlayerCharacter({
      ...playerCharacter,
      totalScore: 0,
      currentLevel: newLevel,
      pointsPerSecond: 0,
      pointsPerClick: 1,
      percentageCompleted: 0,
      unlockedFuelProducors: false,
      unlockedPowerProducors: false,
      totalItemsOwned: 0,
      totalBuildingsOwned: 0,
      fuelPerSecond: 0,
      totalFuelProducedCurrentLevel: 0,
      wattsProduced: 0,
      totalPowerProducedCurrentLevel: 0,
    });
  }

  return (
    <section className='grid grid-cols-reg gap-4 relative z-30 bg-transparent-black w-fit h-fit mt-4 ml-4 outline outline-4 outline-black py-2 pl-4 pr-8 rounded-br-2xl rounded-tr-2xl'>
      <div className='grid items-center justify-center w-full'>
        <p className='text-3xl'>🔥</p>
      </div>

      <div className='data__info'>
        <div className='level__name'>
          <span>Level Name</span>
          <h6>
            {currentLevel.name} {currentLevel.id}
          </h6>
        </div>
        <div className='gameProduction__targetScore'>
          <span>Target Score</span>
          <h6>{currentLevel.targetScore}</h6>
        </div>
      </div>
    </section>
  );
}

export default LevelData;
