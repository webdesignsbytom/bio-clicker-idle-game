import React, { useEffect } from 'react';
import { useState } from 'react';
import AchievementsDB from './../db/achievements.json';
import ItemsDB from './../db/items.json';
import BuildingsDB from './../db/buildings.json';

export const GameContext = React.createContext();

const GameContextProvider = ({ children }) => {
  // player
  const [playerCharacter, setPlayerCharacter] = useState({
    username: '',
    // Points
    basePointsPerSecond: 1,
      // Actual displayed points
    pointsPerSecond: 0,
    pointsPerClick: 1,
    totalTimesClicked: 0,
    multiplierIncome: 0,
    totalScore: 1000,
    timer: false,
    // Items
    totalItemsOwned: 0,
    items: ItemsDB, // db model
    // Buildings
    totalBuildingsOwned: 0,
    buildings: BuildingsDB, // db model
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
    perminentMultiplier: 1,
    bonusMultiplier: 1,
    bonusPercentage: 0,
    // Joined timedate
    startedDateTime: null,
    lastLoggedInDateTime: null,
    latestLogoutDateTime: null,
    prestigeScore: 0,
    achievements: AchievementsDB,
    // Gems and paid items
    gems: 50
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
