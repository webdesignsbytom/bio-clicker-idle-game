import React, { useContext } from 'react';
// Context
import { GameContext } from '../../context/GameContext';
// Image
import AlgaeIcon from '../../assets/images/algae.png';

function AlgaeClicker() {
  const { playerCharacter, setPlayerCharacter } = useContext(GameContext);

  const AddClicksToScore = () => {
      let newpointsPerClick = playerCharacter.pointsPerClick;
      let currentTotalScore = playerCharacter.totalScore;
      let currentMultiplier = playerCharacter.bonusMultiplier;
      let totalClicks = playerCharacter.totalTimesClicked;
  
      let newTotalClicks = totalClicks + 1;
      let newTotalScore =
        newpointsPerClick * currentMultiplier + currentTotalScore;
  
      setPlayerCharacter({
        ...playerCharacter,
        totalScore: newTotalScore,
        totalTimesClicked: newTotalClicks,
      });

  }
  
  return (
    <div className='z-30 clicker__section no__highlights'>
      <img onClick={AddClicksToScore} className='w-[150px] h-[150px]' src={AlgaeIcon} alt='Algae game clicker button icon' />
    </div>
  );
}

export default AlgaeClicker;
