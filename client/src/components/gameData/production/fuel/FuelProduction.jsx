import React, { useContext } from 'react';
import './fuelProduction.css';
import { GameContext } from '../../../../context/GameContext';

function FuelProduction() {
  const { playerCharacter, setPlayerCharacter } = useContext(GameContext);
  
  return (
    <div className='gameProduction__data fuel__data__container'>
      <div className='data__image'>
        <div className='gameProduction__image'>
          <p className='gameProduction__icon'>🔥</p>
        </div>
      </div>

      <div className='data__info'>
        <div className='fuel__production'>
          <span>Fuel Production</span>
          <h6>10,000 gallons</h6>
        </div>
        <div className='total__fuel'>
          <span>Total Fuel</span>
          <h6>1 million gallons</h6>
        </div>
      </div>
    </div>
  );
}

export default FuelProduction;
