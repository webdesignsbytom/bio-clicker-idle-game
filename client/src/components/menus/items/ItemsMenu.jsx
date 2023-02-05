import React, { useContext, useEffect, useState } from 'react';
import ItemDB from '../../../db/items.json';
import Item from './Item';
import { GameContext } from '../../../context/GameContext';
import '../menu.css';

function ItemsMenu() {
  const { playerCharacter, setPlayerCharacter } = useContext(GameContext);
  const [itemsArray, setItemsArray] = useState(ItemDB);
  const [purchaseAmount, setPurchaseAmount] = useState(1);

  useEffect(() => {
    setPlayerCharacter({
      ...playerCharacter,
      items: itemsArray,
    });
  }, [itemsArray]);

  const handleChange = (event) => {
    const { value, name } = event.target
    console.log('event', value, name);
  }

  

  return (
    <section className='mainMenu__container'>
      <div className='menu__title__container'>
        <h2>Item Menu</h2>
      </div>

      <div className='product__data__main'>
        <article className='totals__container'>
          <h6>
            Total items: <span>{playerCharacter.totalItemsOwned}</span>
          </h6>
          <h6>
            Total % increase: <span>1003%</span>
          </h6>
        </article>

        <section className='purchase__selector'>
            <form>
              <label htmlFor='one'>1</label>
              <input type="checkbox" name="one" id="one" value={1} onChange={handleChange}/>
              <label htmlFor='ten'>10</label>
              <input type="checkbox" name="ten" id="ten" value={10} onChange={handleChange} />
              <label htmlFor='twentyFive'>25</label>
              <input type="checkbox" name="twentyFive" id="twentyFive" onChange={handleChange}/>
              <label htmlFor='oneHundred'>100</label>
              <input type="checkbox" name="oneHundred" id="oneHundred" onChange={handleChange}/>
              <label htmlFor='max'>Max</label>
              <input type="checkbox" name="max" id="max" onChange={handleChange} checked />
            </form>
        </section>
      </div>

      <div className='menu__container'>
        {itemsArray.map((item, index) => {
          return <Item item={item} purchaseAmount={purchaseAmount} setItemsArray={setItemsArray} key={index} />;
        })}
      </div>
    </section>
  );
}

export default ItemsMenu;
