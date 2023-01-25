import React, { useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import './scoresDisplay.css';

function ScoresDisplay() {
  const { playerCharacter, setPlayerCharacter } = useContext(GameContext);
  return (
    <section className='scoresDisplay__container'>
      <div className='scores__container'>
        
        <div className='score__container'>
          <h5> PPS </h5>
          <span>{Math.trunc(playerCharacter.pps)}</span>
        </div>
        <div className='score__container'>
          <h5> Total Score </h5>
          <span>{Math.trunc(playerCharacter.totalScore)}</span>
        </div>
        <div className='score__container'>
          <h5> PPC </h5>
          <span>{Math.trunc(playerCharacter.ppc)}</span>
        </div>
      </div>
    </section>
  );
}

export default ScoresDisplay;
