import React, { useContext } from 'react';
import { useState } from 'react';
import './levelDisplay.css';
import LevelState from './../../../db/levels.json';
import { GameContext } from '../../../context/GameContext';
import { OptionContext } from '../../../context/OptionContext';
import { useEffect } from 'react';
import Completed from '../../achievements/Completed';
import ItemMenu from '../../menus/items/ItemMenu';

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
      <div className='gameProduction__data fuel__data__container'>
        <div className='data__image'>
          <div className='gameProduction__image'>
            <p className='gameProduction__icon'>🔥</p>
          </div>
        </div>

        <div className='data__info'>
          <div className='fuel__production'>
            <span>Fuel Production</span>
            <h6>10,000 gallons</h6>
          </div>
          <div className='total__fuel'>
            <span>Total Fuel</span>
            <h6>1 million gallons</h6>
          </div>
        </div>
      </div>

      <div className='gameProduction__data power__data__container'>
        <div className='data__image'>
          <div className='gameProduction__image'>
            <p className='gameProduction__icon'>🔥</p>
          </div>
        </div>
        <div className='data__info'>
          <div className='power__production'>
            <span>Power Production</span>
            <h6>10 TW</h6>
          </div>
          <div className='power__coverage'>
            <span>Power Supply</span>
            <h6>50 Cities</h6>
          </div>
        </div>
      </div>

      <div className='gameProduction__data level__data__container'>
        <div className='data__image'>
          <p className='gameProduction__icon'>🔥</p>
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
      </div>
    </section>
  );
}

export default LevelDisplay;
