import React, { useContext, useEffect } from 'react';
import Main from './Main';
import ItemMenu from './items/ItemMenu';
import BuildingMenu from './buildings/BuildingMenu';

import { GameContext } from '../../context/GameContext';

function Game() {
  const { playerCharacter, setPlayerCharacter } = useContext(GameContext);

  useEffect(() => {
    console.log('test xxx');
    
  }, [playerCharacter.pps]);
  return (
    <section className='game__container'>
      <ItemMenu />
      <Main />
      <BuildingMenu />
    </section>
  );
}

export default Game;
