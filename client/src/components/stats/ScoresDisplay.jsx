import React, { useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import './scoresDisplay.css';

function ScoresDisplay() {
  const { playerCharacter, setPlayerCharacter } = useContext(GameContext);
  return (
    <section className='scoresDisplay__container'>
      <div className='scores__container'>
        <div>
          <div className='score__container'>
            <h3> Total Score {Math.trunc(playerCharacter.totalScore)}</h3>
          </div>
        </div>
        <div className='incomes__container'>
          <div className='score__container'>
            <h3> PPS {Math.trunc(playerCharacter.pps)}</h3>
          </div>
          <div className='score__container'>
            <h3> PPC {Math.trunc(playerCharacter.ppc)}</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScoresDisplay;
