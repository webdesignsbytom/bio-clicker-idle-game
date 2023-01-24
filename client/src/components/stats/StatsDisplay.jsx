import React, { useContext } from 'react';
import './statsDisplay.css';
import { GameContext } from '../../context/GameContext';

function StatsDisplay() {
  const { playerCharacter, setPlayerCharacter } = useContext(GameContext);
  return (
    <div className='statsDisplay__container'>
      <div className='scores__container'>
        <h3> Total Score {playerCharacter.totalScore}</h3>
        <h3> PPS {playerCharacter.pps}</h3>
        <h3> PPC {playerCharacter.ppc}</h3>
      </div>
    </div>
  );
}

export default StatsDisplay;
