import React, { useContext, useState } from 'react';
import { GameContext } from '../../../context/GameContext';

function Item({ item }) {
  // Player data from context
  const { playerCharacter, setPlayerCharacter } = useContext(GameContext);
  const [itemQuantity, setItemQuantity] = useState(0)

  const buyItem = (item) => {
    console.log('item', item);

    if (playerCharacter.totalScore >= item.cost) {
      console.log('totalscore', playerCharacter.totalScore)
      console.log('cost', item.cost);
      let character = playerCharacter;
      console.log('char', character);
      let newArray = character.items;
      console.log('newArray', newArray);

      const itemIndex = newArray.findIndex((i) => i.id === item.id);
      console.log('itemIndex', itemIndex);

      if (itemIndex !== -1) {
        newArray[itemIndex].quantity++;
      } else {
        newArray.push({
          ...item,
          quantity: 1,
        });
      }

      const pushArray = newArray;

      if (item.type === 'PPC') {
        // get current values
        let currentPpc = playerCharacter.ppc;
        let currentTotalScore = playerCharacter.totalScore;

        let newPpcValue = currentPpc + item.effect;
        let newTotalScore = currentTotalScore - item.cost;

        let purchaseAmount = 1;
        let newTotalItemsOwned =
          playerCharacter.totalItemsOwned + purchaseAmount;

        setPlayerCharacter({
          ...playerCharacter,
          ppc: newPpcValue,
          totalScore: newTotalScore,
          totalItemsOwned: newTotalItemsOwned,
          items: pushArray,
        });
      }

      if (item.type === 'PPS') {
        let timerValue = true
        let currentPps = playerCharacter.pps;
        console.log('currentPps', currentPps)
        let currentTotalScore = playerCharacter.totalScore;

        let newPpsValue = currentPps + item.effect;
        let newTotalScore = currentTotalScore - item.cost;

        let purchaseAmount = 1;
        let newTotalItemsOwned =
          playerCharacter.totalItemsOwned + purchaseAmount;

        setPlayerCharacter({
          ...playerCharacter,
          pps: newPpsValue,
          totalScore: newTotalScore,
          timer: timerValue,
          totalItemsOwned: newTotalItemsOwned,
          items: pushArray,
        });
      }

      setItemQuantity(prev => prev + 1)
    } else {
      alert('You cannot afford to purchase');
    }
  };

  return (
    <div className='product'>
      <div className='inner__product'>
        <div className='product__image'>
          <div className='image__icon'>{item.image}</div>
        </div>

        <div className='product__data'>
          <div className='product__name'>
            <h6>Name: </h6>
            <span>{item.name}</span>
          </div>
          <div className='product__cost'>
            <h6>Cost: </h6>
            <span>£ {item.cost}</span>
          </div>
          <div className='product__type'>
            <h6>Type: </h6>
            <span>{item.type}</span>
          </div>
          <div className='product__effect'>
            <h6>Effect: </h6>
            <span>+ {item.effect}</span>
          </div>
        </div>

        <div className='purchase__product'>
          <div className='product__owned'>
            <h6>Owned: <span>{itemQuantity}</span></h6>
          </div>
          <button onClick={() => buyItem(item)}>buy</button>
        </div>
      </div>
      <div className='product__desc'>{item.desc}</div>
    </div>
  );
}

export default Item;
