import React from 'react';
import { useState } from 'react';

export const GameContext = React.createContext();

const GameContextProvider = ({ children }) => {
  // player
  const [playerCharacter, setPlayerCharacter] = useState({
    name: '',
    pps: 0,
    ppc: 1,
    totalScore: 1000,
    totalBuildingsOwned: 0,
    totalItemsOwned: 1,
    bonusMultiplier: 1,
    baseLevelBonusMultiplier: 1,
    items: [],
    buildings: []
  });

  return (
    <GameContext.Provider
      value={{
        playerCharacter,
        setPlayerCharacter,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
