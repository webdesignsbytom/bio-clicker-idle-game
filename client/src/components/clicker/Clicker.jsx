import React, { useContext, useState } from 'react';
import { GameContext } from '../../context/GameContext';
import { OptionContext } from '../../context/OptionContext';
import Achievements from '../achievements/Achievements';
import Completed from '../achievements/Completed';
import BonusMultiplier from '../bonusMultiplier/BonusMultiplier';
import './clicker.css';

function Clicker() {
  const { playerCharacter, setPlayerCharacter } = useContext(GameContext);
  const {
    setToggleAchievementsOpen,
    toggleAchievementsOpen,
    toggleAchievementComplete,
    setToggleAchievementComplete,
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
          <div
            className='special__link achievements'
            onClick={openAchievements}
          >
            Achievements
          </div>
          <div className='special__link quest'>Tech Tree</div>
          <div className='special__link quest'>Quests</div>
          <div className='special__link bonus'>Bonus</div>
        </article>
      </section>
      {toggleAchievementsOpen && <Achievements />}
      {toggleAchievementComplete && <Completed />}
    </>
  );
}

export default Clicker;
