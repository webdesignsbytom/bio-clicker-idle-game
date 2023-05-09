import React from 'react';
import { useState } from 'react';

export const ToggleContext = React.createContext();

const ToggleContextProvider = ({ children }) => {
  const [toggleNavigation, setToggleNavigation] = useState(false);
  const [toggleAchievements, setToggleAchievements] = useState(false);

  // navigation
  const toggleNavigationFun = () => {
    setToggleNavigation(!toggleNavigation);
  };

  // Achievements
  const toggleAchievementsFun = () => {
    setToggleAchievements(!toggleAchievements);
  };

  return (
    <ToggleContext.Provider
      value={{
        // Functions
        toggleNavigationFun,
        toggleAchievementsFun,
        // State
        toggleNavigation,
        toggleAchievements,
      }}
    >
      {children}
    </ToggleContext.Provider>
  );
};

export default ToggleContextProvider;
