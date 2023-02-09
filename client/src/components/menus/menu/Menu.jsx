import React, { useContext, useEffect, useState } from 'react';
import { GameContext } from '../../../context/GameContext';
import '../menu.css';
import Product from './Product';

function Menu({ menuDB, type, title }) {
  const { playerCharacter, setPlayerCharacter } = useContext(GameContext);
  const [productArray, setProductArray] = useState(menuDB[0].content);
  const [purchaseAmount, setPurchaseAmount] = useState('max');
  const [total, setTotal] = useState(null)

  useEffect(() => {
    console.log('PRODUCT ARRAY', productArray);

    if (menuDB[0].type === 'items') {
      setPlayerCharacter({
        ...playerCharacter,
        items: productArray,
      });
      setTotal(playerCharacter.totalItemsOwned)
    }

    if (menuDB[0].type === 'buildings') {
      setPlayerCharacter({
        ...playerCharacter,
        buildings: productArray,
      });
      setTotal(playerCharacter.totalBuildingsOwned)

    }
  }, [productArray]);

  // Select amount of products to purchase
  const handleChange = (event) => {
    const { value, name } = event.target;

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
          <h6>Total
            {/* Total {title}: <span>{playerCharacter.total}</span> */}
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
