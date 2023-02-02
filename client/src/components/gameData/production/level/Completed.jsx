import React, { useContext } from 'react';
import { OptionContext } from '../../../../context/OptionContext';
import { GameContext } from '../../../../context/GameContext';
import { useEffect } from 'react';

function Completed() {
  const { playerCharacter, setPlayerCharacter } = useContext(GameContext);
  const {
    setToggleLevelComplete,
    completedLevelData,
  } = useContext(OptionContext);

  const closeLevel = () => {
    setToggleLevelComplete(false);
  };

  useEffect(() => {

    if (completedLevelData.rewardType === 'pointsPerSecond') {
      const currentMultiplier = playerCharacter.perminentMultiplier
      const levelReward = completedLevelData.rewardEffect
      const newNum = currentMultiplier + levelReward
      setPlayerCharacter({
        ...playerCharacter,
        perminentMultiplier: newNum 
      })
    }
  }, [])

  return (
    <div className='completed__container'>
      <h2>Completed Level {completedLevelData.id}</h2>
      <h2>{completedLevelData.name}</h2>
      <h4>{completedLevelData.reward}</h4>
  
      <div>
        TWEET SCORES
      </div>
      <button onClick={closeLevel}>CLOSE</button>
    </div>
  );
}

export default Completed;
