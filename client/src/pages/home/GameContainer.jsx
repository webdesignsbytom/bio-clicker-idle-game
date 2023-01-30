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
        let pointsPerSecondscore = playerCharacter.pointsPerSecond
        let totalscore = playerCharacter.totalScore
        let newScore = pointsPerSecondscore + totalscore
        
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
