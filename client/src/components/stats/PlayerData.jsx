import React, { useContext } from 'react';
import './playerData.css';
import { GameContext } from '../../context/GameContext';
import BonusMultiplier from '../bonusMultiplier/BonusMultiplier';
import { Link } from 'react-router-dom';
import LevelDisplay from '../level/LevelDisplay';

function PlayerData() {
  const { playerCharacter, setPlayerCharacter } = useContext(GameContext);
  
  return (
    <section className='playerData__container'>

      <div className='player__data__container'>
        <div className='player__items__data'>
          <h6>Total buildings: {playerCharacter.totalBuildingsOwned}</h6>
          <h6>Total % increase: 402%</h6>
        </div>
        <div className='player__buildings__data'>
          <h6>Total items: {playerCharacter.totalItemsOwned}</h6>
          <h6>Total % increase: 1003%</h6>
        </div>
        <div className="player__fuel__data">
          <h6>Fuel Amount: 500 tonnes</h6>
          <h6>Fuel production: 2t per day</h6>
        </div>
      </div>
      
      <LevelDisplay />
    </section>
  );
}

export default PlayerData;
