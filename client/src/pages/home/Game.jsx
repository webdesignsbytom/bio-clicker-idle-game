import React, { useContext, useEffect, useState } from 'react';
import Main from './Main';
import ItemMenu from './items/ItemMenu';
import BuildingMenu from './buildings/BuildingMenu';

import { GameContext } from '../../context/GameContext';

function Game() {
  const { playerCharacter, setPlayerCharacter } = useContext(GameContext);

  const [startTimer, setStartTimer] = useState(false);

  console.log('loaded');

  useEffect(() => {
    if (playerCharacter.pps >= 1) {
      const interval = setInterval(() => {
        let newPPS = playerCharacter.pps;
        let currentTotalScore = playerCharacter.totalScore;
        let currentMultiplier = playerCharacter.bonusMultiplier;
        let newTotalScore = newPPS * currentMultiplier + currentTotalScore;

        setPlayerCharacter({
          ...playerCharacter,
          totalScore: newTotalScore,
        });
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [startTimer, playerCharacter.pps]);
  return (
    <section className='game__container'>
      <ItemMenu />
      <Main />
      <BuildingMenu />
    </section>
  );
}

export default Game;
