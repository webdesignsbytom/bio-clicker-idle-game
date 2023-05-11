import React, { useContext } from 'react';
// Context
import { ToggleContext } from '../../context/ToggleContext';

function InGameMenu() {
  const {
    toggleAchievementsFun,
    toggleTechTreeFun,
    toggleUpgradesFun,
    toggleQuestsFun,
  } = useContext(ToggleContext);

  return (
    <article className='absolute top-4 right-0 grid gap-1'>
      <div
        className='special__link no__highlights'
        onClick={toggleAchievementsFun}
      >
        Achievements
      </div>
      <div
        onClick={toggleTechTreeFun}
        className='special__link no__highlights '
      >
        Tech Tree
      </div>
      <div onClick={toggleUpgradesFun} className='special__link no__highlights '>
        Upgrades
      </div>
      <div onClick={toggleQuestsFun} className='special__link no__highlights '>
        Quests
      </div>
      -{' '}
    </article>
  );
}

export default InGameMenu;
