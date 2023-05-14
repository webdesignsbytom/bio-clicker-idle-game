import React, { useContext } from 'react';
// Context
import { ToggleContext } from '../../context/ToggleContext';
import { GameContext } from '../../context/GameContext';
import { AchievementsListener } from '../../utils/AchievementsListener';

function InGameMenu() {
  const { playerCharacter } = useContext(GameContext);
  const { toggleAchievementReadyFun, achievementReady } = useContext(ToggleContext)

  const {
    toggleAchievementsFun,
    toggleTechTreeFun,
    toggleUpgradesFun,
    toggleQuestsFun,
  } = useContext(ToggleContext);

  AchievementsListener()
  
  return (
    <article className='absolute top-16 lg:top-4 right-0 grid gap-1'>
      <div
      className={
        achievementReady === true
          ? 'special__link no__highlights bg-red-500 animate-pulse'
          : 'special__link no__highlights'
      }
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
