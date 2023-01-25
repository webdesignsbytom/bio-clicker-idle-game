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
          <div className='name'>
            <h6>Name: </h6>
            <span>{building.name}</span>
          </div>
          <div className='cost'>
            <h6>Cost: </h6>
            <span>£ {building.cost}</span>
          </div>
          <div className='type'>
            <h6>Type: </h6>
            <span>{building.type}</span>
          </div>
          <div className='effect'>
            <h6>Effect: </h6>
            <span>x {building.effect}</span>
          </div>
        </div>

        <div className='purchase__item'>
          <div className='owned'>
            <h6>Owned: <span>0</span></h6>
          </div>
          <button onClick={() => buyBuilding(building)}>buy</button>
        </div>
      </div>
      <div className='desc'>{building.desc}</div>
    </div>
  );
}

export default Building;
