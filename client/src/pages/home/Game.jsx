import React, { useContext, useState } from 'react';
import { OptionContext } from '../../context/OptionContext';

import Completed from '../../components/level/Completed';
import Clicker from '../../components/clicker/Clicker';
import LevelAnimation from '../../components/levelAnimation/LevelAnimation';
import ScoresDisplay from '../../components/scoresDisplay/ScoresDisplay';
import ProductionDisplay from '../../components/production/ProductionDisplay';

function Game() {
  const {
    toggleLevelComplete,
    setToggleLevelComplete,
  } = useContext(OptionContext);

  const [currentElement, setCurrentElement] = useState('Completed');

  const ReturnItem = ({ type }) => {
    console.log('type', type);

    if (type === 'level') {
      return <Completed />;
    }
  };

  return (
    <main className='main__game'>
      <ScoresDisplay />
      <Clicker />
      <ProductionDisplay />
      <LevelAnimation />
    </main>
  );
}

export default Game;
