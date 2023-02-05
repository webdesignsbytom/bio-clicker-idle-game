import React, { useState } from 'react';
import UpgradeDB from '../../../db/upgrades.json';

import { GameContext } from '../../../context/GameContext';
import { useContext } from 'react';

function Upgrades() {
  const { playerCharacter, setPlayerCharacter } = useContext(GameContext);
  const [itemsArray, setItemsArray] = useState(UpgradeDB);

  return (
    <>
      <div>Upgrades</div>
    </>
  );
}

export default Upgrades;
