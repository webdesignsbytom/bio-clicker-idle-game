import React, { useContext } from 'react';
// Components
import AchievementsContainer from './AchievementsContainer';
import TechTreeContainer from './TechTreeContainer';
import UpgradesContainer from './UpgradesContainer';
import QuestsContainer from './QuestsContainer';
// Context
import { ToggleContext } from '../../context/ToggleContext';
function SelectionsContainer() {
  const { toggleAchievements, toggleTechTree, toggleUpgrades, toggleQuests } =
    useContext(ToggleContext);
  return (
    <>
      {toggleAchievements && <AchievementsContainer />}
      {toggleTechTree && <TechTreeContainer />}
      {toggleUpgrades && <UpgradesContainer />}
      {toggleQuests && <QuestsContainer />}
    </>
  );
}

export default SelectionsContainer;
