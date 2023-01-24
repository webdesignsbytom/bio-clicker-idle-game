import React from 'react';
import Clicker from '../../components/clicker/Clicker';
import PlayerData from '../../components/stats/PlayerData';
import StatsDisplay from '../../components/stats/StatsDisplay';
import Main from './Main';
import ItemMenu from '../../components/items/ItemMenu'
import BuildingMenu from '../../components/buildings/BuildingMenu'

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
