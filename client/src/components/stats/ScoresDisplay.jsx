import React, { useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import './scoresDisplay.css';

function ScoresDisplay() {
  const { playerCharacter, setPlayerCharacter } = useContext(GameContext);
  return (
    <section className='scoresDisplay__container'>
      <div className='scores__container'>
        <div className='score__container'>
          <h3> Total Score {playerCharacter.totalScore}</h3>
        </div>
        <div className='score__container'>
          <h3> PPS {playerCharacter.pps}</h3>
        </div>
        <div className='score__container'>
          <h3> PPC {playerCharacter.ppc}</h3>
        </div>
      </div>
    </section>
  );
}

export default ScoresDisplay;
