import React, { useContext } from 'react';
// Context
import { GameContext } from '../../context/GameContext';

function LevelCompletedStats() {
  const { playerCharacter } = useContext(GameContext);

  let len = playerCharacter.playerLevelCompletedData.length;
  const { totalScore, pointsPerSecond, pointsPerClick, totalTimesClicked } =
    playerCharacter.playerLevelCompletedData[len - 1];

  return (
    <div>
      <div className='my-2'>
        <h4>Congratulations <span className='italic font-semibold'>{playerCharacter.username}</span></h4>
      </div>
      <div className='mb-4'>
        <div>
          <span>Total Points Per Second: </span>
          <span className='font-semibold'>{pointsPerSecond}</span>
        </div>
        <div>
          <span>Total Points Per Click: </span>
          <span className='font-semibold'>{pointsPerClick}</span>
        </div>
        <div>
          <span>Total Clicks: </span>
          <span className='font-semibold'>{totalTimesClicked}</span>
        </div>
        <div>
          <span>Total Score: </span>
          <span className='font-semibold'>{totalScore}</span>
        </div>
      </div>
    </div>
  );
}

export default LevelCompletedStats;
