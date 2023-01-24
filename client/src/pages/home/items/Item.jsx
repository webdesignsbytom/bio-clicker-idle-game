import React, { useContext } from 'react';
import { GameContext } from '../../../context/GameContext';

function Item({ item }) {
  // Player data from context
  const { playerCharacter, setPlayerCharacter } = useContext(GameContext);

  const buyItem = (item) => {
    console.log('item', item);

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

      if (item.type === 'ppc') {
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

      if (item.type === 'pps') {
        let currentPps = playerCharacter.pps;
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
          totalItemsOwned: newTotalItemsOwned,
          items: pushArray,
        });
      }
    } else {
      alert('You cannot afford to purchase');
    }
  };

  return (
    <div className='item'>
      <div className='inner__item'>
        <div className='item__image'>
          <div className='image__icon'>{item.image}</div>
        </div>

        <div className='item__data'>
          <div className='name'>{item.name}</div>
          <div className='cost'>£{item.cost}</div>
          <div className='type'>{item.type}</div>
          <div className='effect'>{item.effect}</div>
        </div>

        <div className='purchase__item'>
          <div className='owned'>Owned{}</div>
          <button onClick={() => buyItem(item)}>buy</button>
        </div>
      </div>
      <div className='desc'>{item.desc}</div>
    </div>
  );
}

export default Item;
