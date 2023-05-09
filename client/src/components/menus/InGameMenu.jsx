import React, { useContext } from 'react';
// Context
import { OptionContext } from '../../context/OptionContext';
import '../clicker/clicker.css';

function InGameMenu() {
  const { achievementReady } = useContext(OptionContext);

  return (
    <article className='absolute top-4 right-0 grid gap-1'>
      <div className='special__link no__highlights'>
        {/* <div className='special__link no__highlights quest' onClick={openAchievements}> */}
        Achievements
      </div>

      <div className='special__link no__highlights '>Tech Tree</div>
      <div className='special__link no__highlights '>Upgrades</div>
      <div className='special__link no__highlights '>Quests</div>
      <div className='special__link no__highlights '>Bonus</div>
    </article>
  );
}

export default InGameMenu;
