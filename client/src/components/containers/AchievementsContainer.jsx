import React, { useContext } from 'react';
// Context
import { GameContext } from '../../context/GameContext';
import { ToggleContext } from '../../context/ToggleContext';


function AchievementsContainer() {
  const { playerCharacter } = useContext(GameContext);
  const { toggleAchievementsFun } = useContext(ToggleContext);


  return (
    <section className='grid absolute top-0 left-0 z-40 h-full bg-yellow-100 outline outline-4 outline-black overflow-hidden w-full'>
      <article className='overflow-y-scroll h-full'>
        <div className='mt-1 pb-1 border-b-2 border-solid border-black'>
          <h2 className='font-semibold text-center'>Achievements</h2>
        </div>
        <div className='achievements__list'>
          {playerCharacter.achievements.map((achievement, index) => {
            return (
              <article
                key={index}
                className='grid border-b-2 border-black border-solid p-1'
              >
                <div className='grid grid-flow-col'>
                  <div className='grid'>
                    <h4>{achievement.title}</h4>
                    <h5>{achievement.desc}</h5>
                  </div>
                  <div className='p-1'>
                    {achievement.completed && <span>✔️</span>}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </article>
      <div className='p-2 grid justify-center'>
        <button
          className='outline-2 outline outline-black rounded-xl px-4 py-1'
          onClick={toggleAchievementsFun}
        >
          Close
        </button>
      </div>
    </section>
  );
}

export default AchievementsContainer;
