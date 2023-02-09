import React, { useContext, useEffect, useState } from 'react';
import Main from './Game';
import { GameContext } from '../../context/GameContext';
import { listenForClicks } from '../../utils/Achievements';
import { OptionContext } from '../../context/OptionContext';

import ItemDB from '../../db/items.json';
import BuildingDB from '../../db/buildings.json';
import Menu from '../../components/menus/menu/Menu';


function Game() {
  const { achievementReady, setAchievementReady } = useContext(OptionContext);
  const { playerCharacter, setPlayerCharacter } = useContext(GameContext);

  useEffect(() => {
    if (playerCharacter.pointsPerSecond >= 1) {
      const interval = setInterval(() => {
        let pointsPerSecondscore = playerCharacter.pointsPerSecond;
        let totalscore = playerCharacter.totalScore;
        let newScore = pointsPerSecondscore + totalscore;

        setPlayerCharacter({
          ...playerCharacter,
          totalScore: newScore,
        });
      }, 1000);
      //
      return () => {
        clearInterval(interval);
      };
    }
  }, [
    playerCharacter.timer,
    playerCharacter.pointsPerSecond,
    playerCharacter.totalScore,
    playerCharacter.pointsPerClick,
  ]);

  const setPerSecondIncome = () => {
    console.log('score');
    console.log('playerCharacter', playerCharacter.items);
    const currentBasePPS = playerCharacter.basePointsPerSecond;
    const currentPerminentMultiplier = playerCharacter.perminentMultiplier;
    const currentBonusMultiplier = playerCharacter.bonusMultiplier;

    const newTotalPPS =
      currentBasePPS * currentPerminentMultiplier * currentBonusMultiplier;
    // const ownedArray = currentArray.filter(e => e.quantity > 0)
    // console.log('owned', ownedArray);
  };

  // Try and move to util if posible
  const detectAchievements = () => {
    const playerCurrentAchievements = playerCharacter.achievements;
    listenForClicks(playerCurrentAchievements, playerCharacter, setAchievementReady);
  };

  // Run Detect functions
  detectAchievements();
  setPerSecondIncome();

  return (
    <section className='game__container'>
      <Menu menuDB={ItemDB} type='items' title='Items' />
      <Main />
      <Menu menuDB={BuildingDB} type='items' title='Buildings' />
    </section>
  );
}

export default Game;
