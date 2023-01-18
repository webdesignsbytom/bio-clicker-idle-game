import React, { useContext, useEffect, useState } from 'react';
import ItemDB from '../../db/items.json';
import Item from './Item';
import './itemMenu.css';
import { GameContext } from '../../context/GameContext';

function ItemMenu() {
  const {} = useContext(GameContext);
  const [items, setItems] = useState([]);

  console.log('Items loaded')

  useEffect(() => {
    setItems(ItemDB);
  }, []);

  return (
    <section className='itemMenu__container'>
      <div className='item__title__container'>
        <h2>Item Menu</h2>
      </div>

      <ul className='items__container'>
        {items.map((item, index) => {
          return <Item item={item} key={index} />;
        })}
      </ul>
    </section>
  );
}

export default ItemMenu;
