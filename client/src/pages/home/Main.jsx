import React from 'react';
import Clicker from '../../components/clicker/Clicker';
import GameData from '../../components/gameData/GameData';
import ScoresDisplay from '../../components/scoresDisplay/ScoresDisplay';

function Main() {
  return (
    <main className='main__game'>
      <Clicker />
      <ScoresDisplay />
      <GameData />
    </main>
  );
}

export default Main;
