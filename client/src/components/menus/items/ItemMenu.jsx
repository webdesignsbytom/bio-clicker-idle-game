import React, { useContext, useEffect, useState } from 'react';
import ItemDB from '../../../db/items.json';
import Item from './Item';
import { GameContext } from '../../../context/GameContext';
import '../menu.css';

function ItemMenu() {
  const { playerCharacter, setPlayerCharacter } = useContext(GameContext);
  const [itemsArray, setItemsArray] = useState(ItemDB);

  useEffect(() => {
    console.log('ITEMS USE EFFECT')
    setPlayerCharacter({
      ...playerCharacter,
      items: itemsArray
    })

  }, [itemsArray]);

  return (
    <section className='menu__container'>
      <div className='menu__title__container'>
        <h2>Item Menu</h2>
      </div>

      <div className='product__deltaV'>
        <h6>
          Total items: <span>{playerCharacter.totalItemsOwned}</span>
        </h6>
        <h6>
          Total % increase: <span>1003%</span>
        </h6>
      </div>

      <div className='menu__container'>
        {itemsArray.map((item, index) => {
          return <Item item={item} setItemsArray={setItemsArray} key={index} />;
        })}
      </div>
    </section>
  );
}

export default ItemMenu;
