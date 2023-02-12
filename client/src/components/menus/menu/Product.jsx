import React, { useContext, useEffect, useState } from 'react';
import { GameContext } from '../../../context/GameContext';
import ProductHTML from './ProductHTML';

function Product({ product, type, setProductArray, purchaseAmount }) {
  const { playerCharacter, setPlayerCharacter } = useContext(GameContext);
  const [maxPurchase, setMaxPurchase] = useState(null);
  const [productType] = useState(type);
  const [quantityOwned, setQuantityOwned] = useState(0);
  const [increaseConstant] = useState(1.1)

  useEffect(() => {
    if (purchaseAmount === 'max') {
      const playerScore = playerCharacter.totalScore;
      const productCost = product.cost;
      const totalPurchasable = playerScore / productCost;
      setMaxPurchase(Math.trunc(totalPurchasable));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
    if (productType === 'buildings') {
      const buildingArray = playerCharacter.buildings;
      const foundBuilding = buildingArray.find((building) => building.id === product.id);
      if (foundBuilding) {
        setQuantityOwned(foundBuilding.quantity);
        product.cost = foundBuilding.cost
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const buyProduct = (product) => {
    // Check if it can be afforded
    const purchasePrice = purchaseAmount * product.cost
    console.log('purchasePrice', purchasePrice)

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

      if (productIndex !== -1) {
        let newQ = newArray[productIndex].quantity + Number(purchaseAmount)
        console.log('new q', newQ);
        console.log('newArray', newArray)
        newArray[productIndex].quantity = Number(newQ)
        //
        let newCost = newArray[productIndex].cost * increaseConstant;
        console.log('newcost', newCost)
        newArray[productIndex].cost = Number(newCost)
        //
      } else {
        //
        newArray.push({
          ...product,
          quantity: Number(purchaseAmount),
        });
      }

      if (productType === 'items') {
        setPlayerCharacter({
          ...playerCharacter,
          items: newArray,
        });
      }

      // // Increase product cost
      let purchaseCount = Number(purchaseAmount)

      let startingPrice = product.cost
      let newTotalCost = startingPrice
      console.log('starting price', startingPrice)
      console.log('newTotalCost1', newTotalCost)

      for (let i = 0; i < purchaseCount; i++) {
        newTotalCost *= increaseConstant
      }
      console.log('newTotalCost2', newTotalCost)

      product.cost = newTotalCost.toFixed(2);

      // PPC Product
      if (product.type === 'pointsPerClick') {
        // Assign current values

        let currentPointsPerClick = playerCharacter.pointsPerClick;
        let currentTotalScore = playerCharacter.totalScore;

        let newPointsPerClickValue = currentPointsPerClick + product.effect;
        let newTotalScore = currentTotalScore - purchasePrice;

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

      // // PPS Item
      // if (product.type === 'pointsPerSecond') {
      //   let currentPointsPerSecond = playerCharacter.pointsPerSecond;
      //   let currentTotalScore = playerCharacter.totalScore;

      //   let newPointsPerSecondValue = currentPointsPerSecond + product.effect;
      //   let newTotalScore = currentTotalScore - product.cost;

      //   let purchaseAmount = 1;

      //   setQuantityOwned((q) => q + purchaseAmount);

      //   let newTotalBuildingsOwned = playerCharacter.totalBuildingsOwned;
      //   let currentTotalItemsOwned = playerCharacter.totalItemsOwned;

      //   if (productType === 'items') {
      //     const newNum = playerCharacter.totalItemsOwned + purchaseAmount;
      //     currentTotalItemsOwned = newNum;
      //   }

      //   if (productType === 'buildings') {
      //     const newNum =
      //       playerCharacter.newTotalBuildingsOwned + purchaseAmount;
      //     newTotalBuildingsOwned = newNum;
      //   }

      //   setPlayerCharacter({
      //     ...playerCharacter,
      //     pointsPerSecond: newPointsPerSecondValue,
      //     totalScore: newTotalScore,
      //     totalItemsOwned: currentTotalItemsOwned,
      //     totalBuildingsOwned: newTotalBuildingsOwned,
      //   });
      // }

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
