import React, { useContext, useEffect, useState } from 'react';
import Main from './MainGame';
import BuildingMenu from '../../components/menus/buildings/BuildingMenu';
import ItemMenu from '../../components/menus/items/ItemMenu';
import { GameContext } from '../../context/GameContext';

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

  const detectAchievements = () => {
    const playerCurrentAchievements = playerCharacter.achievements;

    const listenForClicks = () => {
      // find all incompleted click achievements
      const clickAchievementsArray = playerCurrentAchievements.filter(e => e.type === 'clicks' && e.completed === false);
      console.log('clicls', clickAchievementsArray);

      // Use the 0 index of array and goal result for value checked
      const currentValue = clickAchievementsArray[0].goal
      if (playerCharacter.totalTimesClicked === currentValue) {
        console.log('10 XXXy', playerCharacter.achievements);

        // find ache in array that has matching score
        const foundAchievement = playerCurrentAchievements.find((e) => e.goal === currentValue);
        console.log('foundAchievement', foundAchievement);

        if (foundAchievement.completed) {
          return;
        }
        // set item to completed
        foundAchievement.completed = true;
        console.log('Completed', foundAchievement);
      }
    };

    listenForClicks()
  };

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
