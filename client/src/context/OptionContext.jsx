import React, { useEffect, useState } from 'react';

export const OptionContext = React.createContext();

const OptionContextProvider = ({ children }) => {
  const [isAdminPanelOpen, setIsAdminPanelOpen] = useState(false);
  const [toggleAchievementsOpen, setToggleAchievementsOpen] = useState(false);
  const [toggleAchievementComplete, setToggleAchievementComplete] =
    useState(false);
  const [toggleLevelComplete, setToggleLevelComplete] = useState(false);
  const [completedLevelData, setCompletedLevelData] = useState({});

  return (
    <OptionContext.Provider
      value={{
        isAdminPanelOpen,
        setIsAdminPanelOpen,
        toggleAchievementsOpen,
        setToggleAchievementsOpen,
        toggleAchievementComplete,
        setToggleAchievementComplete,
        toggleLevelComplete,
        setToggleLevelComplete,
        completedLevelData,
        setCompletedLevelData,
      }}
    >
      {children}
    </OptionContext.Provider>
  );
};

export default OptionContextProvider;
