import React, { useContext } from 'react';
import { GameContext } from '../../context/GameContext';

function ScoresDisplay() {
  const { playerCharacter, setPlayerCharacter } = useContext(GameContext);

  const newPPS =
    playerCharacter.pointsPerSecond *
    playerCharacter.basePointsPerSecond *
    playerCharacter.perminentMultiplier;
  console.log('newpps', newPPS);

  return (
    <section className='grid w-full bg-green-700'>
      <div className='grid grid-cols-3 p-1 gap-1 text-center'>
        <div className='outline outline-2 outline-black'>
          <h5> PPS </h5>
          <span>{Math.trunc(newPPS)}</span>
        </div>
        <div className='outline outline-2 outline-black'>
          <h5> Total Score </h5>
          <span>{Math.trunc(playerCharacter.totalScore)}</span>
        </div>
        <div className='outline outline-2 outline-black'>
          <h5> PPC </h5>
          <span>{Math.trunc(playerCharacter.pointsPerClick)}</span>
        </div>
      </div>
    </section>
  );
}

export default ScoresDisplay;
