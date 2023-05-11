import React, { useContext, useEffect, useState } from 'react';
// Context
import { GameContext } from '../../context/GameContext';
import { LevelsDB } from '../../utils/data/LevelsDB';

function LevelData() {
  const { playerCharacter, setPlayerCharacter } = useContext(GameContext);

  const [levelsArray, setLevelsArray] = useState(LevelsDB.content);
  const [currentLevel, setCurrentLevel] = useState({});

  useEffect(() => {
    const currentLevel = playerCharacter.currentLevel;
    const levelIndex = currentLevel - 1;
    setCurrentLevel(levelsArray[levelIndex]);

  }, []);

  return (
    <section className='hidden lg:grid grid-cols-reg gap-4 relative z-30 bg-transparent-black w-fit h-fit mt-4 ml-4 outline outline-4 outline-black py-2 pl-4 pr-8 rounded-br-2xl rounded-tr-2xl'>
      <div className='grid items-center justify-center w-full'>
        <p className='text-3xl'>🔥</p>
      </div>

      <div className='text-gray-100 font-semibold'>
        <div className=''>
          <span>Level Name</span>
          <h6>
            {currentLevel.name} {currentLevel.id}
          </h6>
        </div>
        <div className=''>
          <span>Target Score</span>
          <h6>{currentLevel.targetScore}</h6>
        </div>
      </div>
    </section>
  );
}

export default LevelData;
