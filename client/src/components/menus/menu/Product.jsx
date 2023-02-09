import React, { useContext, useEffect, useState } from 'react';
import { GameContext } from '../../../context/GameContext';
import ProductHTML from './productHTML';

function Product({ product, type, setProductArray, purchaseAmount }) {
  // Player data from context
  const { playerCharacter, setPlayerCharacter } = useContext(GameContext);
  const [maxPurchase, setMaxPurchase] = useState(null)

  useEffect(() => {
    if (purchaseAmount === 'max') {
      const playerScore = playerCharacter.totalScore
      const productCost = product.cost
      const totalPurchasable = playerScore / productCost
      setMaxPurchase(Math.trunc(totalPurchasable))
    }
  }, [playerCharacter.totalScore, purchaseAmount])

  const buyProduct = (product) => {
    console.log('AAAA')
    // Check if it can be afforded
    if (playerCharacter.totalScore >= product.cost) {
      // Find the product in players state and add to quantity
      let character = playerCharacter;
      let newArray = []

      if (type === 'items') {
        newArray.push(character.items[0].content)
      }
      if (type === 'buildings') {
        newArray.push(character.buildings[0].content)
      }
      console.log('NEW ARRAY', newArray)
      const productIndex = newArray.findIndex((p) => p.id === product.id);

      // Increment the quantity
      newArray[productIndex].quantity++;

      // Increase product cost
      const newCost = product.cost * 1.1;
      newArray[productIndex].cost = newCost.toFixed(2);

      const pushArray = newArray;
      setProductArray(pushArray);

      // PPC Product
      if (product.type === 'pointsPerClick') {
        // Assign current values
        let currentPointsPerClick = playerCharacter.pointsPerClick;
        let currentTotalScore = playerCharacter.totalScore;

        let newPointsPerClickValue = currentPointsPerClick + product.effect;
        let newTotalScore = currentTotalScore - product.cost;

        let purchaseAmount = 1;
        let newTotalProductsOwned =
          playerCharacter.totalProductsOwned + purchaseAmount;

        setPlayerCharacter({
          ...playerCharacter,
          pointsPerClick: newPointsPerClickValue,
          totalScore: newTotalScore,
          totalProductsOwned: newTotalProductsOwned,
        });
      }

      // PPS Item
      if (product.type === 'pointsPerSecond') {
        let currentPointsPerSecond = playerCharacter.pointsPerSecond;
        let currentTotalScore = playerCharacter.totalScore;

        let newPointsPerSecondValue = currentPointsPerSecond + product.effect;
        let newTotalScore = currentTotalScore - product.cost;

        let purchaseAmount = 1;
        let newTotalProductsOwned =
          playerCharacter.totalProductsOwned + purchaseAmount;

        setPlayerCharacter({
          ...playerCharacter,
          pointsPerSecond: newPointsPerSecondValue,
          totalScore: newTotalScore,
          totalProductsOwned: newTotalProductsOwned,
        });
      }
    } else {
      alert('You cannot afford to purchase');
    }
  };
  return <ProductHTML product={product} purchaseAmount={purchaseAmount} maxPurchase={maxPurchase} buyProduct={buyProduct} />;
}

export default Product;
