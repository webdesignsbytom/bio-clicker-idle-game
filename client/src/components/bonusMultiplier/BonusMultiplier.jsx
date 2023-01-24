import React, { useContext, useState } from 'react';
import { GameContext } from '../../context/GameContext';
import './bonusMultiplier.css'

function BonusMultiplier() {
  const {
    playerCharacter,
    setPlayerCharacter,
  } = useContext(GameContext);


  const startBonusConditions = () => {
    let randomBonusMultiplier = getRandomBonusMultiplier()
    console.log('randomBonusMultiplier', randomBonusMultiplier)
    setPlayerCharacter({
        ...playerCharacter,
        bonusMultiplier: randomBonusMultiplier
    })

    setTimeout(() => {
      console.log('hi bonus reseting');
      resetBonusMultiplier();
    }, 30000);
  };

  function getRandomBonusMultiplier() {
    let num = Math.floor(Math.random() * 5 + 2)
    return num
  }

  const resetBonusMultiplier = () => {
    let resetStat = 1
    setPlayerCharacter({
        ...playerCharacter,
        bonusMultiplier: resetStat
    })
  };

  return (
    <div className='bonusMultiplier__container'>
      BonusMultiplier:
      {playerCharacter.bonusMultiplier}
      <button onClick={startBonusConditions}>BONUS</button>
    </div>
  );
}

export default BonusMultiplier;
