import React, { useEffect } from 'react';
import { useState } from 'react';

export const GameContext = React.createContext();

const GameContextProvider = ({ children }) => {
  // player
  const [playerCharacter, setPlayerCharacter] = useState({
    username: '',
    // Points
    pointsPerSecond: 0,
    pointsPerClick: 1,
    totalScore: 10000000,
    timer: false,
    // Items
    totalItemsOwned: 1,
    items: [], // db model
    // Buildings
    totalBuildingsOwned: 0,
    buildings: [], // db model
    // Fuel
    totalFuelProducedCurrentLevel: 0,
    totalFuelProducedOverGame: 0,
    fuelPerSecond: 0,
    // Power
    totalPowerProducedCurrentLevel: 0,
    totalPowerProducedOverGame: 0,
    wattsProduced: 0,
    // Level
    currentLevel: 1,
    unlockedFuelProducors: false,
    unlockedPowerProducors: false,
    // Bonus
    bonusMultiplier: 1,
    baseLevelBonusMultiplier: 1,
    bonusPercentage: 0,
    // Joined timedate
    startedDateTime: null,
    lastLoggedInDateTime: null,
    latestLogoutDateTime: null,
    prestigeScore: 0
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
