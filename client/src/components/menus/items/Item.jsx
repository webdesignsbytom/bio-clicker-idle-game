import React, { useContext } from 'react';
import { GameContext } from '../../../context/GameContext';
import ItemHTML from './ItemHTML';

function Item({ item, setItemsArray, purchaseAmount }) {
  // Player data from context
  const { playerCharacter, setPlayerCharacter } = useContext(GameContext);

  const buyItem = (item) => {
    // Check if it can be afforded
    if (playerCharacter.totalScore >= item.cost) {
      // Find the item in players state and add to quantity
      let character = playerCharacter;
      let newArray = character.items;
      const itemIndex = newArray.findIndex((i) => i.id === item.id);

      // Increment the quantity
      newArray[itemIndex].quantity++;

      // Increase item cost
      const newCost = item.cost * 1.1;
      newArray[itemIndex].cost = newCost.toFixed(2);

      const pushArray = newArray;
      setItemsArray(pushArray);

      // PPC Item
      if (item.type === 'pointsPerClick') {
        // Assign current values
        let currentpointsPerClick = playerCharacter.pointsPerClick;
        let currentTotalScore = playerCharacter.totalScore;

        let newpointsPerClickValue = currentpointsPerClick + item.effect;
        let newTotalScore = currentTotalScore - item.cost;

        let purchaseAmount = 1;
        let newTotalItemsOwned =
          playerCharacter.totalItemsOwned + purchaseAmount;

        setPlayerCharacter({
          ...playerCharacter,
          pointsPerClick: newpointsPerClickValue,
          totalScore: newTotalScore,
          totalItemsOwned: newTotalItemsOwned,
          unlockedFuelProducors: true
        });
      }

      // PPS Item
      if (item.type === 'pointsPerSecond') {
        let currentpointsPerSecond = playerCharacter.pointsPerSecond;
        let currentTotalScore = playerCharacter.totalScore;

        let newpointsPerSecondValue = currentpointsPerSecond + item.effect;
        let newTotalScore = currentTotalScore - item.cost;

        let purchaseAmount = 1;
        let newTotalItemsOwned =
          playerCharacter.totalItemsOwned + purchaseAmount;
        console.log('AAAAAAAAAAAAA', playerCharacter.totalitemsOwned);

        setPlayerCharacter({
          ...playerCharacter,
          pointsPerSecond: newpointsPerSecondValue,
          totalScore: newTotalScore,
          totalItemsOwned: newTotalItemsOwned,
        });
      }
    } else {
      alert('You cannot afford to purchase');
    }
  };
  return <ItemHTML item={item} purchaseAmount={purchaseAmount} buyItem={buyItem} />;
}

export default Item;
