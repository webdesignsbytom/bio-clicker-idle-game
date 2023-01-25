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

      if (item.type === 'ppc' || 'PPC') {
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

      if (item.type === 'pps' || 'PPS') {
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
            <h6>Owned: <span>0</span></h6>
          </div>
          <button onClick={() => buyItem(item)}>buy</button>
        </div>
      </div>
      <div className='product__desc'>{item.desc}</div>
    </div>
  );
}

export default Item;
