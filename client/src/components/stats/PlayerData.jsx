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
          <h4>total items {playerCharacter.totalItemsOwned}</h4>
          <h4>total buildings {playerCharacter.totalBuildingsOwned} </h4>
        </div>
        <div className='player__buildings__data'>
          <h4>Buildings Array {playerCharacter.buildings}</h4>
          <h4>items Array {playerCharacter.items}</h4>
        </div>
        <div className="player__fuel__data">
          <h4>Fuel Amount: 500 tonnes</h4>
          <h4>Fuel production: 2t per day</h4>
        </div>
      </div>
      <LevelDisplay />
    </section>
  );
}

export default PlayerData;
