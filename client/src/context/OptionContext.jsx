import React, { useEffect, useState } from 'react';

export const OptionContext = React.createContext();

const OptionContextProvider = ({ children }) => {
  const [isAdminPanelOpen, setIsAdminPanelOpen] = useState(false);
  const [toggleAchievementsOpen, setToggleAchievementsOpen] = useState(false);
  const [toggleAchievementComplete, setToggleAchievementComplete] =
    useState(false);
  const [toggleLevelComplete, setToggleLevelComplete] = useState(false);
  const [completedLevelData, setCompletedLevelData] = useState({});
  const [achievementReady, setAchievementReady] = useState(false);
  const [toggleUpgrades, setToggleUpgrades] = useState(false);

  return (
    <OptionContext.Provider
      value={{
        isAdminPanelOpen,
        setIsAdminPanelOpen,
        toggleAchievementsOpen,
        setToggleAchievementsOpen,
        toggleAchievementComplete,
        setToggleAchievementComplete,
        achievementReady,
        setAchievementReady,
        toggleLevelComplete,
        setToggleLevelComplete,
        completedLevelData,
        setCompletedLevelData,
        toggleUpgrades,
        setToggleUpgrades,
      }}
    >
      {children}
    </OptionContext.Provider>
  );
};

export default OptionContextProvider;
