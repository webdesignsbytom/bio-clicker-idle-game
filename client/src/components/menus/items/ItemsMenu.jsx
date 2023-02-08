import React, { useContext, useEffect, useState } from 'react';
import ItemDB from '../../../db/items.json';
import Item from './Item';
import { GameContext } from '../../../context/GameContext';
import '../menu.css';

function ItemsMenu() {
  const { playerCharacter, setPlayerCharacter } = useContext(GameContext);
  const [itemsArray, setItemsArray] = useState(ItemDB);
  const [purchaseAmount, setPurchaseAmount] = useState('max');

  useEffect(() => {
    setPlayerCharacter({
      ...playerCharacter,
      items: itemsArray,
    });
  }, [itemsArray]);

  const handleChange = (event) => {
    const { value, name } = event.target;
    console.log('event', value, name);

    setPurchaseAmount(value)
  };

  return (
    <section className='mainMenu__container'>
      <div className='titles__holder'>
        <div className='menu__title__container'>
          <h2>Item Menu</h2>
        </div>
      </div>

      <div className='product__data__main'>
        <article className='totals__container'>
          <h6>
            Total items: <span>{playerCharacter.totalItemsOwned}</span>
          </h6>
        </article>

        <section className='purchase__selector'>
          <form>
            <label htmlFor='one'>1</label>
            <input
              type='checkbox'
              name='one'
              id='one'
              value={'1'}
              onChange={handleChange}
              checked={purchaseAmount === '1' ? 'active' : ''}
            />
            <label htmlFor='ten'>10</label>
            <input
              type='checkbox'
              name='ten'
              id='ten'
              value={'10'}
              onChange={handleChange}
              checked={purchaseAmount === '10' ? 'active' : ''}
            />
            <label htmlFor='twentyFive'>25</label>
            <input
              type='checkbox'
              name='twentyFive'
              id='twentyFive'
              onChange={handleChange}
              value={'25'}
              checked={purchaseAmount === '25' ? 'active' : ''}
            />
            <label htmlFor='oneHundred'>100</label>
            <input
              type='checkbox'
              name='oneHundred'
              id='oneHundred'
              value={'100'}
              onChange={handleChange}
              checked={purchaseAmount === '100' ? 'active' : ''}

            />
            <label htmlFor='max'>Max</label>
            <input
              type='checkbox'
              name='max'
              id='max'
              value={'max'}
              onChange={handleChange}
              checked={purchaseAmount === 'max' ? 'active' : ''}
            />
          </form>
        </section>
      </div>

      <div className='menu__container'>
        {itemsArray.map((item, index) => {
          return (
            <Item
              item={item}
              purchaseAmount={purchaseAmount}
              setItemsArray={setItemsArray}
              key={index}
            />
          );
        })}
      </div>
    </section>
  );
}

export default ItemsMenu;
