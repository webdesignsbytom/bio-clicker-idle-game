import React, { useContext, useEffect, useState } from 'react';
import Main from './MainGame';
import BuildingMenu from '../../components/menus/buildings/BuildingMenu';
import ItemMenu from '../../components/menus/items/ItemMenu';
import { GameContext } from '../../context/GameContext';
import { listenForClicks } from '../../utils/Achievements' 

function Game() {
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

  // Try and move to util if posible 
  const detectAchievements = () => {
    const playerCurrentAchievements = playerCharacter.achievements;
    listenForClicks(playerCurrentAchievements, playerCharacter)
  };

  // Run Detect functions
  detectAchievements();

  console.log('XXXXXXX', playerCharacter.achievements);
  return (
    <section className='game__container'>
      <ItemMenu />
      <Main />
      <BuildingMenu />
    </section>
  );
}

export default Game;
