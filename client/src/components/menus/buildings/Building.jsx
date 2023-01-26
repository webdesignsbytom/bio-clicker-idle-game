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
          buildings: newArray
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
          buildings: newArray

        });
      }
    } else {
      alert('You cannot afford to purchase');
    }
  };

  return (
    <div className='product'>
      <div className='inner__product'>
        <div className='product__image'>
          <div className='image__icon'>{building.image}</div>
        </div>

        <div className='product__data'>
          <div className='product__name'>
            <span>Name: </span>
            <h6>{building.name}</h6>
          </div>
          <div className='product__cost'>
            <span>Cost: </span>
            <h6>£ {building.cost}</h6>
          </div>
          <div className='product__type'>
            <span>Type: </span>
            <h6>{building.type}</h6>
          </div>
          <div className='product__effect'>
            <span>Effect: </span>
            <h6>x {building.effect}</h6>
          </div>
        </div>

        <div className='purchase__product'>
          <div className='product__owned'>
            <h6>Owned: <span>0</span></h6>
          </div>
          <button onClick={() => buyBuilding(building)}>buy</button>
        </div>
      </div>
      <div className='product__desc'>{building.desc}</div>
    </div>
  );
}

export default Building;
