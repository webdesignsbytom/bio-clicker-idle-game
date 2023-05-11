import React from 'react';
import { useState } from 'react';
// Data
import { AchievementsDB } from '../utils/data/AchievementsDB';

export const GameContext = React.createContext();

const GameContextProvider = ({ children }) => {
  // player
  const [playerCharacter, setPlayerCharacter] = useState({
    username: '',
    // Points
    basePointsPerSecond: 1,
    // Actual displayed points
    pointsPerSecond: 2,
    pointsPerClick: 1,
    totalTimesClicked: 0,
    multiplierIncome: 0,
    totalScore: 0,
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
    perminentMultiplier: 1,
    bonusMultiplier: 1,
    bonusPercentage: 0,
    // Joined timedate
    startedDateTime: null,
    lastLoggedInDateTime: null,
    latestLogoutDateTime: null,
    prestigeScore: 0,
    achievements: AchievementsDB.content,
    // Gems and paid items
    gems: 50,
  });
  const [increaseConstant] = useState(1.1);

  return (
    <GameContext.Provider
      value={{
        playerCharacter,
        increaseConstant,
        setPlayerCharacter,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
