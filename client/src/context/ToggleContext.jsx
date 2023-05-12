import React from 'react';
import { useState } from 'react';

export const ToggleContext = React.createContext();

const ToggleContextProvider = ({ children }) => {
  const [toggleNavigation, setToggleNavigation] = useState(false);
  const [toggleAchievements, setToggleAchievements] = useState(false);
  const [toggleTechTree, setToggleTechTree] = useState(false);
  const [toggleUpgrades, setToggleUpgrades] = useState(false);
  const [toggleQuests, setToggleQuests] = useState(false);
  const [levelCompleted, setLevelCompleted] = useState(false);
  const [achievementReady, setAchievementReady] = useState(false);

  // navigation
  const toggleNavigationFun = () => {
    setToggleNavigation(!toggleNavigation);
  };

  // Achievements
  const toggleAchievementsFun = () => {
    setToggleAchievements(!toggleAchievements);
  };

  // Achievements
  const toggleAchievementReadyFun = () => {
    setAchievementReady(!achievementReady);
  };
  // Achievements
  const toggleLevelCompletedFun = () => {
    setLevelCompleted(!levelCompleted);
  };

  // Tech Tree
  const toggleTechTreeFun = () => {
    setToggleTechTree(!toggleTechTree);
  };

  // Tech Tree
  const toggleUpgradesFun = () => {
    setToggleUpgrades(!toggleUpgrades);
  };

  // Quests
  const toggleQuestsFun = () => {
    setToggleQuests(!toggleQuests);
  };

  return (
    <ToggleContext.Provider
      value={{
        // Functions
        toggleNavigationFun,
        toggleAchievementsFun,
        toggleAchievementReadyFun,
        toggleTechTreeFun,
        toggleUpgradesFun,
        toggleQuestsFun,
        toggleLevelCompletedFun,
        // State
        toggleNavigation,
        toggleAchievements,
        achievementReady,
        toggleTechTree,
        toggleUpgrades,
        toggleQuests,
        levelCompleted,
        // Set state
        setAchievementReady,
      }}
    >
      {children}
    </ToggleContext.Provider>
  );
};

export default ToggleContextProvider;
