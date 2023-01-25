import React, { useContext, useEffect, useState } from 'react';
import ItemDB from '../../../db/items.json';
import Item from './Item';
import { GameContext } from '../../../context/GameContext';
import '../menu.css'

function ItemMenu() {
  const {} = useContext(GameContext);
  const [items, setItems] = useState([]);

  console.log('Items loaded')

  useEffect(() => {
    setItems(ItemDB);
  }, []);

  return (
    <section className='menu__container'>
      <div className='menu__title__container'>
        <h2>Item Menu</h2>
      </div>

      <div className='menu__container'>
        {items.map((item, index) => {
          return <Item item={item} key={index} />;
        })}
      </div>
    </section>
  );
}

export default ItemMenu;
