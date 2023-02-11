import React, { useState } from 'react';
import UpgradeDB from '../../db/upgrades.json';

import { GameContext } from '../../context/GameContext';
import { useContext } from 'react';

import './upgrades.css';
import { OptionContext } from '../../context/OptionContext';

function Upgrades() {
  const { playerCharacter, setPlayerCharacter } = useContext(GameContext);
  const { toggleUpgrades, setToggleUpgrades } = useContext(OptionContext);
  const [itemsArray, setItemsArray] = useState(UpgradeDB);

  return (
    <>
      <div className='upgrades__container'>Upgrades</div>
      <button onClick={setToggleUpgrades(false)}>CLOSE</button>
    </>
  );
}

export default Upgrades;
