import React, { useContext, useState } from 'react';
import { GameContext } from '../../../../context/GameContext';
import './powerProduction.css';


function PowerProduction() {

  const { playerCharacter, setPlayerCharacter } = useContext(GameContext);
  const [powerUnlocked, setPowerUnlocked] = useState(false);

  if (playerCharacter.unlockedPowerProducors && powerUnlocked === false) {
    setPowerUnlocked(true)
  }

  return (
    <>
      {powerUnlocked ? (
        <div className='gameProduction__data power__data__container'>
          <div className='data__image'>
            <div className='gameProduction__image'>
              <p className='gameProduction__icon'>⚡</p>
            </div>
          </div>
          <div className='data__info'>
            <div className='power__production'>
              <span>Power Production</span>
              <h6>10 TW</h6>
            </div>
            <div className='power__coverage'>
              <span>Power Supply</span>
              <h6>50 Cities</h6>
            </div>
          </div>
        </div>
      ) : (
        <div className='closed__container'>
          <h3>⚡ UNLOCK </h3>
        </div>
      )}
    </>
  );
}

export default PowerProduction;
