import React, { useContext } from 'react';
import { GameContext } from '../../context/GameContext';

function Item({ item }) {
  // Player data from context
  const { playerCharacter, setPlayerCharacter } = useContext(GameContext);

  const buyItem = (item) => {
    console.log('item', item);

    if (playerCharacter.totalScore >= item.cost) {
      let newItemName = item.name;

      let newArray = playerCharacter.items.slice();
      newArray.push(newItemName);

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
          items: newArray,
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
          items: newArray,
        });
      }
    } else {
      alert('You cannot afford to purchase');
    }
  };

  return (
    <li className='item'>
      <div className='item__image'>{item.image}</div>

      <div className='item__data'>
        <div className='name'>Name:{item.name}</div>
        <div className='cost'>Cost £{item.cost}</div>
        <div className='type'>Type:{item.type}</div>
        <div className='effect'>Effect:{item.effect}</div>
      </div>

      <div className='purchase__item'>
        <button onClick={() => buyItem(item)}>buy</button>
      </div>
    </li>
  );
}

export default Item;
