import React from 'react';
import { useState } from 'react';

export const ToggleContext = React.createContext();

const ToggleContextProvider = ({ children }) => {
  const [toggleNavigation, setToggleNavigation] = useState(false);
  const [toggleAchievements, setToggleAchievements] = useState(false);
  const [toggleTechTree, setToggleTechTree] = useState(false);
  const [toggleUpgrades, setToggleUpgrades] = useState(false);
  const [toggleQuests, setToggleQuests] = useState(false);
  const [achievementReady, setAchievementReady] = useState(false);

  // navigation
  const toggleNavigationFun = () => {
    setToggleNavigation(!toggleNavigation);
  };

  // Achievements
  const toggleAchievementsFun = () => {
    setToggleAchievements(!toggleAchievements);
  };

  // Tech Tree
  const toggleTechTreeFun = () => {
    console.log('xx');
    setToggleTechTree(!toggleTechTree);
  };

  // Tech Tree
  const toggleUpgradesFun = () => {
    console.log('xx');
    setToggleUpgrades(!toggleUpgrades);
  };

  // Quests
  const toggleQuestsFun = () => {
    console.log('xx');
    setToggleQuests(!toggleQuests);
  };

  return (
    <ToggleContext.Provider
      value={{
        // Functions
        toggleNavigationFun,
        toggleAchievementsFun,
        toggleTechTreeFun,
        toggleUpgradesFun,
        toggleQuestsFun,
        // State
        toggleNavigation,
        toggleAchievements,
        achievementReady,
        toggleTechTree,
        toggleUpgrades,
        toggleQuests,
        // Set state
        setAchievementReady
      }}
    >
      {children}
    </ToggleContext.Provider>
  );
};

export default ToggleContextProvider;
