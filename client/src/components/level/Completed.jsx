import React, { useContext } from 'react';
import { OptionContext } from '../../context/OptionContext';
import { GameContext } from '../../context/GameContext';
import { useEffect } from 'react';
import { resetOwnedBuildings, resetOwnedItems } from '../../utils/Resets';
import './completed.css';

function Completed() {
  const { playerCharacter, setPlayerCharacter } = useContext(GameContext);
  const { setToggleLevelComplete, completedLevelData } =
    useContext(OptionContext);

  const closeLevel = () => {
    setToggleLevelComplete(false);
  };

  useEffect(() => {
    if (completedLevelData.rewardType === 'pointsPerSecond') {
      const currentMultiplier = playerCharacter.perminentMultiplier;
      const levelReward = completedLevelData.rewardEffect;
      const newNum = currentMultiplier + levelReward;
      resetOwnedBuildings(playerCharacter, setPlayerCharacter);
      resetOwnedItems(playerCharacter, setPlayerCharacter);
      setPlayerCharacter({
        ...playerCharacter,
        perminentMultiplier: newNum,
      });
    }
  }, []);

  // Tweet Quote
  const tweetQuote = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${completedLevelData}`;
    window.open(twitterUrl, '_blank');
  };

  return (
    <div className='completed__container'>

      <div className='completed__titles'>
        <h2>Completed Level {completedLevelData.id}</h2>
        <h2>{completedLevelData.name}</h2>
        <h4>{completedLevelData.reward}</h4>
      </div>

      <div className='tweet__container'>
        <button
          onClick={tweetQuote}
          class='twitter__button'
          id='twitter'
          title='Tweet This!'
        >
          <i class='fab fa-twitter'> Tweet This!</i>
        </button>
      </div>

      <div className='level__rewards'>
        <div className='rewards__title'>LEVEL REWARDS</div>
        <div className='rewards__container'>
          <div className='general__rewards'>Gems</div>
          <div className='twitterBonus__rewards'>Double Gems</div>
        </div>
      </div>

      <div className='close__container'>
        <button className='close__btn' onClick={closeLevel}>
          CLOSE
        </button>
      </div>
    </div>
  );
}

export default Completed;
