import React, { useContext } from 'react';
import { GameContext } from '../../../context/GameContext';

function Building({ building }) {
  // Player data from context
  const { playerCharacter, setPlayerCharacter } = useContext(GameContext);

  const buyBuilding = (building) => {

    if (playerCharacter.totalScore >= building.cost) {
      let newBuildingName = building.name;
      let newArray = playerCharacter.buildings.slice();
      newArray.push(newBuildingName);

      if (building.type === 'ppc') {
        let currentPpc = playerCharacter.ppc;
        let currentTotalScore = playerCharacter.totalScore;

        let newPpcValue = currentPpc + building.effect;
        let newTotalScore = currentTotalScore - building.cost;

        let purchaseAmount = 1;
        let newTotalBuildingsOwned =
          playerCharacter.totalBuildingsOwned + purchaseAmount;

        setPlayerCharacter({
          ...playerCharacter,
          ppc: newPpcValue,
          totalScore: newTotalScore,
          totalBuildingsOwned: newTotalBuildingsOwned,
          buildings: newArray
        });
      }

      if (building.type === 'pps') {
        let currentPps = playerCharacter.pps;
        let currentTotalScore = playerCharacter.totalScore;

        let newPpsValue = currentPps + building.effect;
        let newTotalScore = currentTotalScore - building.cost;

        let purchaseAmount = 1;
        let newTotalBuildingsOwned =
          playerCharacter.totalBuildingsOwned + purchaseAmount;

        setPlayerCharacter({
          ...playerCharacter,
          pps: newPpsValue,
          totalScore: newTotalScore,
          totalBuildingsOwned: newTotalBuildingsOwned,
          buildings: newArray

        });
      }
    } else {
      alert('You cannot afford to purchase');
    }
  };

  return (
    <div className='building'>
      <div className='inner__building'>
        <div className='building__image'>
          <div className='image__icon'>{building.image}</div>
        </div>

        <div className='building__data'>
          <div className='name'>{building.name}</div>
          <div className='cost'>£{building.cost}</div>
          <div className='type'>{building.type}</div>
          <div className='effect'>{building.effect}</div>
        </div>

        <div className='purchase__building'>
          <div className='owned'>Owned{}</div>
          <button onClick={() => buyBuilding(building)}>buy</button>
        </div>
      </div>
      <div className='desc'>{building.desc}</div>
    </div>
  );
}

export default Building;
