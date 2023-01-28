import React, { useContext, useEffect, useState } from 'react';
import { GameContext } from '../../../context/GameContext';
import ItemHTML from './ItemHTML';
import { updateItemCost } from '../PurchaseFunctions';

function Item({ item, setItemsArray }) {
  const { playerCharacter, setPlayerCharacter } = useContext(GameContext);

  const buyItem = (item) => {
    console.log('BBBBBBB');
    if (playerCharacter.totalScore >= item.cost) {
      let character = playerCharacter;
      let newArray = character.items;

      const itemIndex = newArray.findIndex((i) => i.id === item.id);
      console.log('ITEM INDEX', itemIndex);

      newArray[itemIndex].quantity++;

      const pushArray = newArray;

      setItemsArray(pushArray);

      if (item.type === 'pointsPerClick') {
        // get current values
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

        // const newTotalsArray = playerCharacter.items;
        // const itemIdIndex = item.id - 1;

        // if (newTotalsArray.length >= 1) {
        //   let thisItem = newTotalsArray[itemIdIndex];
        //   let quantity = thisItem.quantity;
        // }

        // setItemQuantity((prev) => prev + 1);
      } else {
        alert('You cannot afford to purchase');
      }
    }
  };
  return <ItemHTML item={item} buyItem={buyItem} />;
}

export default Item;
