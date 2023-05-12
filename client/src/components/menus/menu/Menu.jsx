import React, { useContext, useEffect, useState } from 'react';
import { GameContext } from '../../../context/GameContext';
import './menu.css';
import Product from './Product';

function Menu({ menuDB, type, title }) {
  const { playerCharacter } = useContext(GameContext);
  const [productArray, setProductArray] = useState(menuDB.content);
  const [purchaseAmount, setPurchaseAmount] = useState('max');
  const [total, setTotal] = useState(null)

  useEffect(() => {
    if (menuDB.type === 'items') {
      setTotal(playerCharacter.totalItemsOwned)
    }

    if (menuDB.type === 'buildings') {
      setTotal(playerCharacter.totalBuildingsOwned)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playerCharacter.totalItemsOwned, playerCharacter.totalBuildingsOwned]);

  // Select amount of products to purchase
  const handleChange = (event) => {
    const { value } = event.target;

    setPurchaseAmount(value);
  };

  return (
    <section className='mainMenu__container'>
      <div className='titles__holder'>
        <div className='menu__title__container'>
          <h2>{title} Menu</h2>
        </div>
      </div>

      <div className='product__data__main'>
        <article className='totals__container'>
          <h6>
            Total {title}: <span>{total}</span>
          </h6>
        </article>

        
      </div>

      <div className='menu__container'>
        {productArray.map((product, index) => {
          return (
            <Product
              product={product}
              type={type}
              purchaseAmount={purchaseAmount}
              setProductArray={setProductArray}
              key={index}
            />
          );
        })}
      </div>
      
    </section>
  );
}

export default Menu;
