import React, { useContext } from 'react';
import { GameContext } from '../../../context/GameContext';
import ItemHTML from './ItemHTML';

function Item({ item, setItemsArray }) {
  // Player data from context
  const { playerCharacter, setPlayerCharacter } = useContext(GameContext);

  const buyItem = (item) => {
    console.log('click xxx')
    // Check if it can be afforded
    if (playerCharacter.totalScore >= item.cost) {
      // Find the item in players state and add to quantity
      let character = playerCharacter;
      console.log('character', character)
      let newArray = character.items;
      console.log('new array', newArray);
      const itemIndex = newArray.findIndex((i) => i.id === item.id);
      console.log('ITEM INDEX', itemIndex);

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
  return <ItemHTML item={item} buyItem={buyItem} />;
}

export default Item;
