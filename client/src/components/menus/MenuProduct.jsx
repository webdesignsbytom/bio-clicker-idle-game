import React, { useContext } from 'react';
import { GameContext } from '../../context/GameContext';

function MenuProduct({ product, purchaseAmount, productType }) {
  const { playerCharacter, setPlayerCharacter, increaseConstant } =
    useContext(GameContext);

  const buyProduct = (product) => {
    // Check if it can be afforded
    const purchasePrice = purchaseAmount * product.cost;
    console.log('purchasePrice', purchasePrice);

    console.log('PLAYER XX', playerCharacter.items);
    console.log('PLAYER XX', playerCharacter.totalItemsOwned);

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
        let newQ = newArray[productIndex].quantity + Number(purchaseAmount);
        console.log('new q', newQ);
        console.log('newArray', newArray);
        newArray[productIndex].quantity = Number(newQ);
        //
        let newCost = newArray[productIndex].cost * increaseConstant;
        console.log('newcost', newCost);
        newArray[productIndex].cost = Number(newCost);
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
      let purchaseCount = Number(purchaseAmount);

      let startingPrice = product.cost;
      let newTotalCost = startingPrice;
      console.log('starting price', startingPrice);
      console.log('newTotalCost1', newTotalCost);

      for (let i = 0; i < purchaseCount; i++) {
        newTotalCost *= increaseConstant;
      }
      console.log('newTotalCost2', newTotalCost);

      product.cost = newTotalCost.toFixed(2);

      // PPC Product
      if (product.type === 'pointsPerClick') {
        // Assign current values

        let currentPointsPerClick = playerCharacter.pointsPerClick;
        let currentTotalScore = playerCharacter.totalScore;

        let newPointsPerClickValue = currentPointsPerClick + product.effect;
        let newTotalScore = currentTotalScore - purchasePrice;

        // setQuantityOwned((prev) => prev + Number(purchaseAmount));

        let newTotalBuildingsOwned = playerCharacter.totalBuildingsOwned;
        let currentTotalItemsOwned = playerCharacter.totalItemsOwned;
        console.log('newTotalItems', currentTotalItemsOwned);

        if (productType === 'items') {
          let newNum = currentTotalItemsOwned + Number(purchaseAmount);
          console.log('newnum', newNum);
          currentTotalItemsOwned = Number(newNum);
          console.log('currentTotalItemsOwned: ' + currentTotalItemsOwned);
        }

        if (productType === 'buildings') {
          let newNum = playerCharacter.newTotalBuildingsOwned + purchaseAmount;
          newTotalBuildingsOwned = newNum;
        }

        let testNum = Number(currentTotalItemsOwned);

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

        // setQuantityOwned((q) => q + purchaseAmount);

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
    <li className='grid gap-1 items-center rounded text-[8px] p-1 product__container'>
      <section className='grid grid-cols-a1a product__container rounded px-1 py-1 gap-1'>
        <div className='grid product__container items-center justify-center w-[60px] h-[60px]'>
          <img
            className='object-cover rounded'
            src={product.image}
            alt={product.name}
          />
        </div>

        <section className='grid product__container rounded py-1 px-2 leading-2'>
          <div className='flex w-full justify-between'>
            <h6>Name: </h6>
            <span>{product.name}</span>
          </div>

          <div className='flex w-full justify-between'>
            <h6>Cost: </h6>
            <span>£ {Math.trunc(product.cost)}</span>
          </div>

          <div className='flex w-full justify-between'>
            <h6>Type: </h6>
            <span>{product.typetitle}</span>
          </div>

          <div className='flex w-full justify-between'>
            <h6>Effect: </h6>
            <span>+ {product.effect}</span>
          </div>
        </section>

        <div className='grid w-full'>
          <button
            className='rounded product__container p-2 w-full'
            onClick={() => buyProduct(product)}
          >
            <h6 className='p-1'>BUY</h6>
            <div className=''>
              {/* <span>
                {purchaseAmount === 'max' ? maxPurchase : purchaseAmount}
              </span> */}
            </div>
            <div className=''>
              <h6 className='grid'>
                Owned <span>{product.quantityOwned}</span>
              </h6>
            </div>
          </button>
        </div>
      </section>

      <section className='product__container rounded px-1 py-[2px] text-[8px]'>
        <p className='leading-2'>{product.desc}</p>
      </section>
    </li>
  );
}

export default MenuProduct;
