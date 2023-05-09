import React, { useContext } from 'react';
// Context
import { ToggleContext } from '../../context/ToggleContext';

function InGameMenu() {
  const { toggleAchievementsFun, toggleAchievements } =
    useContext(ToggleContext);

  return (
    <article className='absolute top-4 right-0 grid gap-1'>
      <div
        className='special__link no__highlights'
        onClick={toggleAchievementsFun}
      >
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
