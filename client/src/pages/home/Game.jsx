import React from 'react';
import Main from './Main';
import ItemMenu from './items/ItemMenu'
import BuildingMenu from './buildings/BuildingMenu'


function Game() {
  return (
    <section className='game__container'>
      <ItemMenu />
      <Main />
      <BuildingMenu />
    </section>
  );
}

export default Game;
