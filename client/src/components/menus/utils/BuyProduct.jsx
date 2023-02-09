export const BuyProduct = (product, playerCharacter, setPlayerCharacter, productType, setQuantityOwned) => {
    console.log('AAAA', product);

    // Check if it can be afforded
    if (playerCharacter.totalScore >= product.cost) {
      // Find the product in players state and add to quantity
      let character = playerCharacter;
      console.log('CHARACTER', character);

      let newArray;
      console.log('NEW Array 1', newArray);

      if (productType === 'items') {
        newArray = character.items;
      }

      if (productType === 'buildings') {
        newArray = character.buildings;
      }

      console.log('NEW Array 2', newArray);

      const productIndex = newArray.findIndex((p) => p.id === product.id);
      console.log('productIndex', productIndex);

      if (productIndex !== -1) {
        newArray[productIndex].quantity++;
      } else {
        newArray.push({
          ...product,
          quantity: 1,
        });
      }

      console.log('NEW ARRAY 3', newArray);

      if (productType === 'items') {
        setPlayerCharacter({
          ...playerCharacter,
          items: newArray,
        });
      }

      console.log('PLAYER CHAR XX', playerCharacter);
      // console.log('NEW ARRAY3', newArray)

      // // Increase product cost
      const newCost = product.cost * 1.1;
      product.cost = newCost.toFixed(2);

      // PPC Product
      if (product.type === 'pointsPerClick') {
        // Assign current values
        console.log('CLLLLLICK');
        let currentPointsPerClick = playerCharacter.pointsPerClick;
        let currentTotalScore = playerCharacter.totalScore;

        let newPointsPerClickValue = currentPointsPerClick + product.effect;
        let newTotalScore = currentTotalScore - product.cost;

        let purchaseAmount = 1;
        console.log('PURChase amout', purchaseAmount);

        setQuantityOwned((q) => q + purchaseAmount);

        let newTotalBuildingsOwned = playerCharacter.totalBuildingsOwned;
        let newTotalItemsOwned = playerCharacter.totalItemsOwned;

        if (productType === 'items') {
          const newNum = playerCharacter.totalItemsOwned + purchaseAmount;
          newTotalItemsOwned = newNum;
        }

        if (productType === 'buildings') {
          const newNum =
            playerCharacter.newTotalBuildingsOwned + purchaseAmount;
          newTotalBuildingsOwned = newNum;
        }

        setPlayerCharacter({
          ...playerCharacter,
          pointsPerClick: newPointsPerClickValue,
          totalScore: newTotalScore,
          totalItemsOwned: newTotalItemsOwned,
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
        let newTotalItemsOwned = playerCharacter.totalItemsOwned;

        if (productType === 'items') {
          const newNum = playerCharacter.totalItemsOwned + purchaseAmount;
          newTotalItemsOwned = newNum;
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
          totalItemsOwned: newTotalItemsOwned,
          totalBuildingsOwned: newTotalBuildingsOwned,
        });
      }

      // set new cost
    } else {
      alert('You cannot afford to purchase');
    }
  };