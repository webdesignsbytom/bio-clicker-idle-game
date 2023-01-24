import React from 'react';
import Clicker from '../../components/clicker/Clicker';
import PlayerData from '../../components/stats/PlayerData';
import ScoresDisplay from '../../components/stats/ScoresDisplay';

function Main() {
  return (
    <main className='main__game'>
      <Clicker />
      <ScoresDisplay />
      <PlayerData />
    </main>
  );
}

export default Main;
