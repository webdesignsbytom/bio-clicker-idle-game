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
    totalTimesClicked: 0,
    totalScore: 10000000,
    timer: false,
    // Items
    totalItemsOwned: 0,
    items: [], // db model
    // Buildings
    totalBuildingsOwned: 0,
    buildings: [], // db model
    // Fuel
    fuelPerSecond: 0,
    totalFuelProducedCurrentLevel: 0,
    totalFuelProducedOverGame: 0,
    // Power
    wattsProduced: 0,
    totalPowerProducedCurrentLevel: 0,
    totalPowerProducedOverGame: 0,
    // Level
    currentLevel: 1,
    percentageCompleted: 0,
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
    prestigeScore: 0,
    achievements: []
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
