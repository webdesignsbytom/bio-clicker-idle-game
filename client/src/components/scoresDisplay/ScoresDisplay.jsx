import React, { useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import './scoresDisplay.css';

function ScoresDisplay() {
  const { playerCharacter, setPlayerCharacter } = useContext(GameContext);

  const newPPS = (playerCharacter.pointsPerSecond * playerCharacter.basePointsPerSecond) * playerCharacter.perminentMultiplier
  console.log('newpps', newPPS);

  return (
    <section className='scoresDisplay__container'>
      <div className='scores__container'>
        
        <div className='score__container'>
          <h5> PPS </h5>
          <span>{Math.trunc(newPPS)}</span>
        </div>
        <div className='score__container'>
          <h5> Total Score </h5>
          <span>{Math.trunc(playerCharacter.totalScore)}</span>
        </div>
        <div className='score__container'>
          <h5> PPC </h5>
          <span>{Math.trunc(playerCharacter.pointsPerClick)}</span>
        </div>
      </div>
    </section>
  );
}

export default ScoresDisplay;
