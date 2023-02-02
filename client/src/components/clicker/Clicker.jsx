import React, { useContext, useState } from 'react';
import { GameContext } from '../../context/GameContext';
import { OptionContext } from '../../context/OptionContext';
import Achievements from '../achievements/Achievements';
import './clicker.css';

function Clicker() {
  const { playerCharacter, setPlayerCharacter } = useContext(GameContext);
  const {
    setToggleAchievementsOpen,
    toggleAchievementsOpen,
    toggleAchievementComplete,
    setToggleAchievementComplete,
    achievementReady,
    setAchievementReady
  } = useContext(OptionContext);



  const clickButton = () => {
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
  };

  const openAchievements = () => {
    setToggleAchievementsOpen(!toggleAchievementsOpen);
    setAchievementReady(false)
  };

  return (
    <>
      <section className='clicker__container'>
        <div className='clicker__section'>
          <button onClick={clickButton}>
            CLICK ME {playerCharacter.totalTimesClicked}
          </button>
        </div>
        <article className='special__container'>
          {achievementReady ? <div
            className='completeAcheive__link quest'
            onClick={openAchievements}
          >
            Achievements
          </div> : <div
            className='special__link quest'
            onClick={openAchievements}
          >
            Achievements
          </div>}
          <div className='special__link quest'>Tech Tree</div>
          <div className='special__link quest'>Quests</div>
          <div className='special__link bonus'>Bonus</div>
        </article>
      </section>
      {toggleAchievementsOpen && <Achievements />}
    </>
  );
}

export default Clicker;
