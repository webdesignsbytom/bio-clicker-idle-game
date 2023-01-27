import React, { useContext, useEffect, useState } from 'react';
import Main from './MainGame';
import BuildingMenu from '../../components/menus/buildings/BuildingMenu';
import ItemMenu from '../../components/menus/items/ItemMenu';
import { GameContext } from '../../context/GameContext';

function Game() {
  const { playerCharacter, setPlayerCharacter } = useContext(GameContext);

  useEffect(() => {
    console.log('usig effect in game');
    console.log('effect player', playerCharacter.pointsPerSecond);

    if (playerCharacter.pointsPerSecond >= 1) {
      console.log('timer set');

      const interval = setInterval(() => {
        console.log('interva');
        console.log('xxx player', playerCharacter.pointsPerSecond);
        console.log('xxx player', playerCharacter.totalScore);

        let pointsPerSecondscore = playerCharacter.pointsPerSecond
        let totalscore = playerCharacter.totalScore
        let newScore = pointsPerSecondscore + totalscore
        
        console.log('newscore', newScore);
        setPlayerCharacter({
          ...playerCharacter,
          totalScore: newScore,
        });
      }, 1000);
      //
      return () => {
        console.log('clearing interval');
        clearInterval(interval);
      };
    }
  }, [playerCharacter.timer, playerCharacter.pointsPerSecond, playerCharacter.totalScore, playerCharacter.pointsPerClick]);

  return (
    <section className='game__container'>
      <ItemMenu />
      <Main />
      <BuildingMenu />
    </section>
  );
}

export default Game;
