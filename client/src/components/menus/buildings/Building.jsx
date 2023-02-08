import React, { useContext } from 'react';
import { GameContext } from '../../../context/GameContext';
import BuildingHTML from './BuildingHTML';

function Building({ building, setBuildingsArray, purchaseAmount }) {
  // Player data from context
  const { playerCharacter, setPlayerCharacter } = useContext(GameContext);

  const buyBuilding = (building) => {
    // Check if it can be afforded
    if (playerCharacter.totalScore >= building.cost) {
      // Find the building in players state and add to quantity
      let character = playerCharacter;
      let newArray = character.buildings;
      const buildingIndex = newArray.findIndex((i) => i.id === building.id);

      // Increment the quantity
      newArray[buildingIndex].quantity++;

      // Increase building cost
      const newCost = building.cost * 1.1;
      newArray[buildingIndex].cost = newCost.toFixed(2);

      const pushArray = newArray;
      setBuildingsArray(pushArray);

      // PPC Building
      if (building.type === 'pointsPerClick') {
        // Assign current values
        let currentpointsPerClick = playerCharacter.pointsPerClick;
        let currentTotalScore = playerCharacter.totalScore;

        let newpointsPerClickValue = currentpointsPerClick + building.effect;
        let newTotalScore = currentTotalScore - building.cost;

        let purchaseAmount = 1;
        let newTotalBuildingsOwned =
          playerCharacter.totalBuildingsOwned + purchaseAmount;

        setPlayerCharacter({
          ...playerCharacter,
          pointsPerClick: newpointsPerClickValue,
          totalScore: newTotalScore,
          totalBuildingsOwned: newTotalBuildingsOwned,
          unlockedFuelProducors: true
        });
      }

      // PPS Item
      if (building.type === 'pointsPerSecond') {
        let currentPointsPerSecond = playerCharacter.pointsPerSecond;
        let currentTotalScore = playerCharacter.totalScore;

        let newPointsPerSecondValue = currentPointsPerSecond + building.effect;
        let newTotalScore = currentTotalScore - building.cost;

        let purchaseAmount = 1;
        let newTotalBuildingOwned =
          playerCharacter.totalBuildingOwned + purchaseAmount;
        console.log('AAAAAAAAAAAAA', playerCharacter.totalBuildingOwned);

        setPlayerCharacter({
          ...playerCharacter,
          pointsPerSecond: newPointsPerSecondValue,
          totalScore: newTotalScore,
          totalBuildingOwned: newTotalBuildingOwned,
        });
      }
    } else {
      alert('You cannot afford to purchase');
    }
  };
  return <BuildingHTML building={building} purchaseAmount={purchaseAmount} buyBuilding={buyBuilding} />;
}

export default Building;
