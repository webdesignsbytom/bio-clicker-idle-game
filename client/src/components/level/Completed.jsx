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
    <div className='completed__containerx'>
      <div className='completed__titles'>
        <h2>Completed Level <br />{completedLevelData.id}</h2>
        <h4>{completedLevelData.name}</h4>
      </div>

      <div className='tweet__container'>
        <button
          onClick={tweetQuote}
          class='twitter__button'
          id='twitter'
          title='Tweet This!'
        > Tweet This!
          <i class='fab fa-twitter'></i>
          <h6>Earn 5 gems!</h6>
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
        <button className='btn' onClick={closeLevel}>
          NEXT LEVEL
        </button>
      </div>
    </div>
  );
}

export default Completed;
