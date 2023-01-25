import React, { useContext } from 'react';
import './production.css';
import { GameContext } from '../../../context/GameContext';

function Production() {
  const { playerCharacter, setPlayerCharacter } = useContext(GameContext);
  return (
    <div className='player__data__container'>
      <div className='production__data__container player__items__data'>
        <h5>Items</h5>
        <h6>Total buildings: <span>{playerCharacter.totalBuildingsOwned}</span></h6>
        <h6>Total % increase: <span>402%</span></h6>
      </div>
      <div className='production__data__container player__buildings__data'>
      <h5>Buildings</h5>

        <h6>Total items: <span>{playerCharacter.totalItemsOwned}</span></h6>
        <h6>Total % increase: <span>1003%</span></h6>
      </div>
      <div className='production__data__container player__fuel__data'>
      <h5>Fuel</h5>

        <h6>Fuel Amount: <span>500 tonnes</span></h6>
        <h6>Fuel production: <span>2t per day</span></h6>
      </div>
    </div>
  );
}

export default Production;
