import React from 'react';
import Clicker from '../../components/clicker/Clicker';
import PlayerData from '../../components/stats/PlayerData';
import StatsDisplay from '../../components/stats/StatsDisplay';

function Main() {
  return (
    <main className='main__game'>
      <Clicker />
      <StatsDisplay />
      <PlayerData />
    </main>
  );
}

export default Main;
