import React, { useContext, useEffect, useState } from 'react';
import { GameContext } from '../../../context/GameContext';
import { setCost } from '../utils/ItemsDB';
import ProductHTML from './ProductHTML';

function Product({ product, type, setProductArray, purchaseAmount }) {
  const { playerCharacter, setPlayerCharacter } = useContext(GameContext);
  const [maxPurchase, setMaxPurchase] = useState(null);
  const [productType, setProductType] = useState(type);
  const [quantityOwned, setQuantityOwned] = useState(0);
  const [increaseConstant, setIncreaseConstant] = useState(1.1)

  useEffect(() => {
    if (purchaseAmount === 'max') {
      const playerScore = playerCharacter.totalScore;
      const productCost = product.cost;
      const totalPurchasable = playerScore / productCost;
      setMaxPurchase(Math.trunc(totalPurchasable));
    }
  }, [playerCharacter.totalScore, purchaseAmount]);

  useEffect(() => {
    if (productType === 'items') {
      const itemArray = playerCharacter.items;
      const foundItem = itemArray.find((item) => item.id === product.id);
      if (foundItem) {
        setQuantityOwned(foundItem.quantity);
        product.cost = foundItem.cost
      }
    } 
  }, []);

  const buyProduct = (product) => {
    // Check if it can be afforded
    const purchasePrice = purchaseAmount * product.cost

    console.log('PLAYER XX', playerCharacter.items)
    console.log('PLAYER XX', playerCharacter.totalItemsOwned)

    if (playerCharacter.totalScore >= purchasePrice) {
      // Find the product in players state and add to quantity
      let character = playerCharacter;

      let newArray;

      if (productType === 'items') {
        newArray = character.items;
      }

      if (productType === 'buildings') {
        newArray = character.buildings;
      }

      let productIndex = newArray.findIndex((p) => p.id === product.id);
      console.log('Product Index: ', productIndex);

      if (productIndex !== -1) {
        let newQ = newArray[productIndex].quantity + Number(purchaseAmount)
        console.log('new q', newQ);
        console.log('newArray', newArray)
        newArray[productIndex].quantity = Number(newQ)
        //
        let newCost = newArray[productIndex].cost * increaseConstant;
        newArray.push({
          ...product,
          cost: newCost
        });
        //
      } else {
        //
        newArray.push({
          ...product,
          quantity: purchaseAmount,
        });
      }

      if (productType === 'items') {
        setPlayerCharacter({
          ...playerCharacter,
          items: newArray,
        });
      }

      // // Increase product cost
      const newCost = product.cost * 1.1;
      product.cost = newCost.toFixed(2);

      // PPC Product
      if (product.type === 'pointsPerClick') {
        // Assign current values

        let currentPointsPerClick = playerCharacter.pointsPerClick;
        let currentTotalScore = playerCharacter.totalScore;

        let newPointsPerClickValue = currentPointsPerClick + product.effect;
        let newTotalScore = currentTotalScore - product.cost;

        setQuantityOwned((prev) => prev + Number(purchaseAmount));

        let newTotalBuildingsOwned = playerCharacter.totalBuildingsOwned;
        let currentTotalItemsOwned = playerCharacter.totalItemsOwned;
        console.log('newTotalItems', currentTotalItemsOwned)

        if (productType === 'items') {
          let newNum = currentTotalItemsOwned + Number(purchaseAmount);
          console.log('newnum', newNum)
          currentTotalItemsOwned = Number(newNum);
          console.log('currentTotalItemsOwned: ' + currentTotalItemsOwned)
        }

        if (productType === 'buildings') {
          let newNum =
            playerCharacter.newTotalBuildingsOwned + purchaseAmount;
          newTotalBuildingsOwned = newNum;
        }

        let testNum = Number(currentTotalItemsOwned)

        setPlayerCharacter({
          ...playerCharacter,
          pointsPerClick: newPointsPerClickValue,
          totalScore: newTotalScore,
          totalItemsOwned: testNum,
          totalBuildingsOwned: newTotalBuildingsOwned,
        });
      }

      // PPS Item
      if (product.type === 'pointsPerSecond') {
        let currentPointsPerSecond = playerCharacter.pointsPerSecond;
        let currentTotalScore = playerCharacter.totalScore;

        let newPointsPerSecondValue = currentPointsPerSecond + product.effect;
        let newTotalScore = currentTotalScore - product.cost;

        let purchaseAmount = 1;

        setQuantityOwned((q) => q + purchaseAmount);

        let newTotalBuildingsOwned = playerCharacter.totalBuildingsOwned;
        let currentTotalItemsOwned = playerCharacter.totalItemsOwned;

        if (productType === 'items') {
          const newNum = playerCharacter.totalItemsOwned + purchaseAmount;
          currentTotalItemsOwned = newNum;
        }

        if (productType === 'buildings') {
          const newNum =
            playerCharacter.newTotalBuildingsOwned + purchaseAmount;
          newTotalBuildingsOwned = newNum;
        }

        setPlayerCharacter({
          ...playerCharacter,
          pointsPerSecond: newPointsPerSecondValue,
          totalScore: newTotalScore,
          totalItemsOwned: currentTotalItemsOwned,
          totalBuildingsOwned: newTotalBuildingsOwned,
        });
      }

      // set new cost
    } else {
      alert('You cannot afford to purchase');
    }
  };
  
  return (
    <ProductHTML
      product={product}
      purchaseAmount={purchaseAmount}
      maxPurchase={maxPurchase}
      buyProduct={buyProduct}
      quantityOwned={quantityOwned}
    />
  );
}

export default Product;
