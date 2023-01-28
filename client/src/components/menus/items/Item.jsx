import React, { useContext, useEffect, useState } from 'react';
import { GameContext } from '../../../context/GameContext';
import ItemHTML from './ItemHTML';
import {getHi} from '../PurchaseFunctions'

function Item({ item }) {
  const { playerCharacter, setPlayerCharacter } = useContext(GameContext);
  const [itemQuantity, setItemQuantity] = useState(0);
  // const [toggleBuy, setToggleBuy] = useState(false);

  useEffect(() => {
    const newArray = playerCharacter.items;
    const itemId = item.id;
    const foundItem = newArray.find((item) => item.id === itemId);
    if (foundItem) {
      const quantity = foundItem.quantity;
      setItemQuantity(quantity);
    }
  }, []);

  // const toggleBuySwitch = () => {
  //   setToggleBuy(true);
  //   setToggleBuy(false);
  // };
  const buyItem = (item) => {
    // toggleBuySwitch();

    if (playerCharacter.totalScore >= item.cost) {
      let character = playerCharacter;
      let newArray = character.items;

      const itemIndex = newArray.findIndex((i) => i.id === item.id);

      if (itemIndex !== -1) {
        newArray[itemIndex].quantity++;
      } else {
        newArray.push({
          ...item,
          quantity: 1,
        });
      }

      const pushArray = newArray;

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
          items: pushArray,
        });
      }

      if (item.type === 'pointsPerSecond') {
        let timerValue = true;
        let currentpointsPerSecond = playerCharacter.pointsPerSecond;
        console.log('currentpointsPerSecond', currentpointsPerSecond);
        let currentTotalScore = playerCharacter.totalScore;

        let newpointsPerSecondValue = currentpointsPerSecond + item.effect;
        let newTotalScore = currentTotalScore - item.cost;

        let purchaseAmount = 1;
        let newTotalItemsOwned =
          playerCharacter.totalItemsOwned + purchaseAmount;

        setPlayerCharacter({
          ...playerCharacter,
          pointsPerSecond: newpointsPerSecondValue,
          totalScore: newTotalScore,
          timer: timerValue,
          totalItemsOwned: newTotalItemsOwned,
          items: pushArray,
        });
      }

      const newTotalsArray = playerCharacter.items;
      const itemIdIndex = item.id - 1;

      if (newTotalsArray.length >= 1) {
        let thisItem = newTotalsArray[itemIdIndex];
        let quantity = thisItem.quantity;
      }

      setItemQuantity((prev) => prev + 1);
    } else {
      alert('You cannot afford to purchase');
    }
  };

  return <ItemHTML item={item} itemQuantity={itemQuantity} buyItem={buyItem} />;
}

export default Item;
