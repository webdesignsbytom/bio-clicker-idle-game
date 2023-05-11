import React, { useContext } from 'react';
import { GameContext } from '../../context/GameContext';

function ScoresDisplay() {
  const { playerCharacter } = useContext(GameContext);

  const newPPS =
    playerCharacter.pointsPerSecond *
    playerCharacter.basePointsPerSecond *
    playerCharacter.perminentMultiplier;
  
  console.log('NEW PPS (Score Display)', newPPS);

  return (
    <section className='grid w-full bg-green-700'>
      <div className='grid grid-cols-3 p-1 gap-1 text-center h-fit font-semibold leading-4'>
        <div className='grid h-fit outline outline-2 outline-green-950 bg-[#bfacb5] p-1'>
          <h5 className='grid'>
            PPS
            <span>{Math.trunc(newPPS)}</span>
          </h5>
        </div>
        <div className='grid h-fit outline outline-2 outline-green-950 bg-[#bfacb5] p-1'>
          <h5 className='grid'>
            Total Score
            <span>{Math.trunc(playerCharacter.totalScore)}</span>
          </h5>
        </div>
        <div className='grid h-fit outline outline-2 outline-green-950 bg-[#bfacb5] p-1'>
          <h5 className='grid'>
            PPC
            <span>{Math.trunc(playerCharacter.pointsPerClick)}</span>
          </h5>
        </div>
      </div>
    </section>
  );
}

export default ScoresDisplay;
