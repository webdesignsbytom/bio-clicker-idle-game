import React, { useContext, useState } from 'react';
import { OptionContext } from '../../context/OptionContext';

import Completed from '../../components/level/Completed';
import Clicker from '../../components/clicker/Clicker';
import LevelAnimation from '../../components/levelAnimation/LevelAnimation';
import ScoresDisplay from '../../components/scoresDisplay/ScoresDisplay';
import ProductionDisplay from '../../components/production/ProductionDisplay';
import Upgrades from '../../components/upgrades/Upgrades';

function Game() {
  const {
    toggleLevelComplete,
    setToggleLevelComplete,
    toggleUpgrades,
    setToggleUpgrades,
  } = useContext(OptionContext);

  const [currentElement, setCurrentElement] = useState('Completed');

  const ReturnItem = ({ type }) => {
    console.log('type', type);

    if (type === 'level') {
      return <Completed />;
    }

    if (type === 'upgrades') {
      return <Upgrades />;
    }
  };

  return (
    <main className='main__game'>
      <ScoresDisplay />
      {toggleLevelComplete ? <Completed /> : <Clicker />}
      <ProductionDisplay />
      <LevelAnimation />
    </main>
  );
}

export default Game;
