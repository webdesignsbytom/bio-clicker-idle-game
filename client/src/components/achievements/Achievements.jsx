import React, { useContext, useEffect, useState } from 'react';
import AchievementsDB from '../../db/achievements.json';
import { OptionContext } from '../../context/OptionContext';
import { GameContext } from '../../context/GameContext';
import './achievements.css';

function Achievements() {
  const { playerCharacter, setPlayerCharacter } = useContext(GameContext);
  const {
    toggleAchievementsOpen,
    setToggleAchievementsOpen,
    toggleAchievementComplete,
    setToggleAchievementComplete,
  } = useContext(OptionContext);

  const [achievementsArray, setAchievementsArray] = useState(AchievementsDB);

  const openAchievements = () => {
    setToggleAchievementsOpen(!toggleAchievementsOpen);
  };

  useEffect(() => {
    console.log('AAAAAAAAAAAAAAAA');
    console.log(
      'playerCharacter.totalTimesClicked',
      playerCharacter.totalTimesClicked
    );

    // if(playerCharacter.totalTimesClicked === 10) {
    //   setToggleAchievementComplete(true)
    // }
  }, [playerCharacter.totalTimesClicked]);

  // useEffect(() => {
  //   console.log('achievements USE EFFECT')

  //   setPlayerCharacter({
  //     ...playerCharacter,
  //     achievements: achievementsArray
  //   })
  // }, [achievementsArray]);

  return (
    <div className='achievements__container'>
      <h2>Achievements</h2>
      <div className='achievements__list'>
        {achievementsArray.map((achievement, index) => {
          return (
            <article className='article'>
              <div className='achievement'>
                {achievement.name}
                <input type='checkbox' name='' id='' />
              </div>
            </article>
          );
        })}
      </div>
      <button onClick={openAchievements}>Close</button>
    </div>
  );
}

export default Achievements;
