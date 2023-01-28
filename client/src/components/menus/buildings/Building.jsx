import React, { useContext } from 'react';
import { GameContext } from '../../../context/GameContext';
import BuildingHTML from './BuildingHTML';

function Building({ building, setBuildingsArray }) {
  // Player data from context
  const { playerCharacter, setPlayerCharacter } = useContext(GameContext);

  const buyBuilding = (building) => {
    // Check if it can be afforded
    if (playerCharacter.totalScore >= building.cost) {
      // Find the item in players state and add to quantity
      let character = playerCharacter;
      let newArray = character.buildings;

      const buildingIndex = newArray.findIndex((b) => b.id === building.id);
      console.log('building INDEX', buildingIndex);
      // Increment the quantity
      newArray[buildingIndex].quantity++;

      // Increase item cost
      const newCost = building.cost * 1.1;
      newArray[buildingIndex].cost = newCost.toFixed(2);

      const pushArray = newArray;
      setBuildingsArray(pushArray);

      if (building.type === 'pointsPerClick') {
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
        });
      }

      if (building.type === 'pointsPerSecond') {
        let currentpointsPerSecond = playerCharacter.pointsPerSecond;
        let currentTotalScore = playerCharacter.totalScore;

        let newpointsPerSecondValue = currentpointsPerSecond + building.effect;
        let newTotalScore = currentTotalScore - building.cost;

        let purchaseAmount = 1;
        let newTotalBuildingsOwned =
          playerCharacter.totalBuildingsOwned + purchaseAmount;

        setPlayerCharacter({
          ...playerCharacter,
          pointsPerSecond: newpointsPerSecondValue,
          totalScore: newTotalScore,
          totalBuildingsOwned: newTotalBuildingsOwned,
        });
      }
    } else {
      alert('You cannot afford to purchase');
    }
  };

  return <BuildingHTML building={building} buyBuilding={buyBuilding} />;
}

export default Building;
