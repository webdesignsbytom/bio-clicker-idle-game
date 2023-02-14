import React, { useContext, useState } from 'react';
import { GameContext } from '../../context/GameContext';
import { OptionContext } from '../../context/OptionContext';
import Achievements from '../achievements/Achievements';
import LevelData from '../level/LevelData';
import AlgaeIcon from '../../assets/images/algae.png'
import ScoresDisplay from '../scoresDisplay/ScoresDisplay';
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
    setAchievementReady(false);
  };

  return (
    <>
      <div className='clicker__bg'>


        <section className='clicker__container'>
        <div className="phone__score__container">
          <ScoresDisplay />
        </div>
          {/* Level Data */}
          <LevelData />

          <div className='clicker__section'>
            <img src={AlgaeIcon} alt="clicker icon" onClick={clickButton} />
          </div>
          <article className='special__container'>
            {achievementReady ? (
              <div
                className='completeAcheive__link quest'
                onClick={openAchievements}
              >
                Achievements
              </div>
            ) : (
              <div className='special__link quest' onClick={openAchievements}>
                Achievements
              </div>
            )}

            <div className='special__link quest'>Tech Tree</div>
            <div className='special__link upgrades'>Upgrades</div>
            <div className='special__link quest'>Quests</div>
            <div className='special__link bonus'>Bonus</div>
          </article>
        </section>
      </div>
      {toggleAchievementsOpen && <Achievements />}
    </>
  );
}

export default Clicker;
