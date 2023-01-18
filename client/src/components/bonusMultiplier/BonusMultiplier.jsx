import React, { useState } from 'react';

function BonusMultiplier() {
  const [bonusMultiplier, setBonusMultiplier] = useState(1);
  const [baseLevelBonusMultiplier, setBaseLevelBonusMultiplier] = useState(1);

  const startBonusConditions = () => {
    let randomBonusMultiplier = getRandomBonusMultiplier()
    setBonusMultiplier(randomBonusMultiplier);
    setTimeout(() => {
      console.log('hi');
      resetBonusMultiplier();
    }, 2000);
  };

  function getRandomBonusMultiplier() {
    let num = Math.floor(Math.random() * 5 + 2)
    return num
  }

  const resetBonusMultiplier = () => {
    console.log('RESETINGbonusMultiplier', bonusMultiplier);
    setBonusMultiplier(baseLevelBonusMultiplier);
  };



  return (
    <div>
      BonusMultiplier:
      {bonusMultiplier}
      <button onClick={startBonusConditions}>BONUS</button>
    </div>
  );
}

export default BonusMultiplier;
