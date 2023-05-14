import React, { useEffect } from 'react';
import { useState } from 'react';
// Data
import { AchievementsDB } from '../utils/data/AchievementsDB';
import { LevelsDB } from '../utils/data/LevelsDB';
import { ItemsDB } from '../utils/data/ItemsDB';
import { BuildingsDB } from '../utils/data/BuildingsDB';

export const GameContext = React.createContext();

const GameContextProvider = ({ children }) => {
  // player
  const [playerCharacter, setPlayerCharacter] = useState({
    username: 'The Great Humongo',
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
    // Memory
    playerLevelCompletedData: [],
  });

  const [increaseConstant] = useState(1.1);
  const [currentLevel, setCurrentLevel] = useState({});

  useEffect(() => {
    const currentLevel = playerCharacter.currentLevel;
    const levelIndex = currentLevel - 1;
    setCurrentLevel(LevelsDB.content[levelIndex]);
  }, [playerCharacter.currentLevel]);

  const resetPlayerStats = () => {
    let newLevel = playerCharacter.currentLevel + 1;

    ItemsDB.content.forEach(item => {
      item.quantityOwned = 0
    });

    BuildingsDB.content.forEach(buildings => {
      buildings.quantityOwned = 0
    });

    setPlayerCharacter({
      ...playerCharacter,
      pointsPerSecond: 0,
      pointsPerClick: 1,
      totalScore: 0,
      totalItemsOwned: 0,
      items: [], // db model
      totalBuildingsOwned: 0,
      buildings: [], // db model
      currentLevel: newLevel,
    });
  };

  const savePlayerCompleteState = () => {
    let playerData = playerCharacter;
    let newArray = playerCharacter.playerLevelCompletedData;

    newArray.push(playerData);

    setPlayerCharacter({
      ...playerCharacter,
      playerLevelCompletedData: newArray,
    });
  };

  return (
    <GameContext.Provider
      value={{
        // Functions
        resetPlayerStats,
        savePlayerCompleteState,
        // State
        playerCharacter,
        increaseConstant,
        currentLevel,
        setPlayerCharacter,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
