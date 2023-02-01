import React, { useContext, useEffect, useState } from 'react';
import AchievementsDB from '../../db/achievements.json';
import { OptionContext } from '../../context/OptionContext';
import { GameContext } from '../../context/GameContext';
import './achievements.css';

function Achievements() {
  const { playerCharacter, setPlayerCharacter } = useContext(GameContext);
  const {
    toggleAchievementsOpen,
    setToggleAchievementsOpen
  } = useContext(OptionContext);

  const [achievementsArray, setAchievementsArray] = useState(playerCharacter.achievements);

  useEffect(() => {
    setPlayerCharacter({
      ...playerCharacter,
      achievements: achievementsArray
    })
  }, [achievementsArray]);

  const openAchievements = () => {
    setToggleAchievementsOpen(false);
  };

  return (
    <div className='achievements__container'>
      <h2>Achievements</h2>
      <div className='achievements__list'>
        {achievementsArray.map((achievement, index) => {
          return (
            <article key={index} className='article'>
              <div className='achievement'>
                {achievement.name}
                {achievement.completed && <span>✔️</span>}
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
