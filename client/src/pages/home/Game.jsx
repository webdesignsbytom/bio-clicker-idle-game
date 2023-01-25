import React, { useContext, useEffect, useState } from 'react';
import Main from './Main';
import BuildingMenu from '../../components/menus/buildings/BuildingMenu';
import ItemMenu from '../../components/menus/items/ItemMenu';
import { GameContext } from '../../context/GameContext';

function Game() {
  const { playerCharacter, setPlayerCharacter } = useContext(GameContext);

  useEffect(() => {
    console.log('usig effect in game');
    console.log('effect player', playerCharacter.pps);

    if (playerCharacter.pps >= 1) {
      console.log('timer set');

      const interval = setInterval(() => {
        console.log('interva');
        console.log('xxx player', playerCharacter.pps);
        console.log('xxx player', playerCharacter.totalScore);

        let ppsscore = playerCharacter.pps
        let totalscore = playerCharacter.totalScore
        let newScore = ppsscore + totalscore
        
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
  }, [playerCharacter.timer, playerCharacter.pps, playerCharacter.totalScore, playerCharacter.ppc]);

  return (
    <section className='game__container'>
      <ItemMenu />
      <Main />
      <BuildingMenu />
    </section>
  );
}

export default Game;
