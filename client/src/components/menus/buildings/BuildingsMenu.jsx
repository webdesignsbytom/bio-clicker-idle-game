import React, { useContext, useEffect, useState } from 'react';
import BuildingDB from '../../../db/buildings.json';
import Building from './Building';
import { GameContext } from '../../../context/GameContext';
import '../menu.css';

function BuildingsMenu() {
  const { playerCharacter, setPlayerCharacter } = useContext(GameContext);
  const [buildingsArray, setBuildingsArray] = useState(BuildingDB);
  const [purchaseAmount, setPurchaseAmount] = useState(1);

  useEffect(() => {
    setPlayerCharacter({
      ...playerCharacter,
      buildings: buildingsArray,
    });
  }, [buildingsArray]);

  const handleChange = (event) => {
    const { value, name } = event.target;
    console.log('event', value, name);
  };

  return (
    <section className='mainMenu__container'>
      <div className='titles__holder'>
        <div className='menu__title__container'>
          <h2>Building Menu</h2>
        </div>
      </div>

      <div className='product__data__main'>
        <article className='totals__container'>
          <h6>
            Total building: <span>{playerCharacter.totalBuildingsOwned}</span>
          </h6>
        </article>

        <section className='purchase__selector'>
          <form>
            <label htmlFor='one'>1</label>
            <input
              type='checkbox'
              name='one'
              id='one'
              value={1}
              onChange={handleChange}
            />
            <label htmlFor='ten'>10</label>
            <input
              type='checkbox'
              name='ten'
              id='ten'
              value={10}
              onChange={handleChange}
            />
            <label htmlFor='twentyFive'>25</label>
            <input
              type='checkbox'
              name='twentyFive'
              id='twentyFive'
              onChange={handleChange}
            />
            <label htmlFor='oneHundred'>100</label>
            <input
              type='checkbox'
              name='oneHundred'
              id='oneHundred'
              onChange={handleChange}
            />
            <label htmlFor='max'>Max</label>
            <input
              type='checkbox'
              name='max'
              id='max'
              onChange={handleChange}
              checked
            />
          </form>
        </section>
      </div>

      <div className='menu__container'>
        {buildingsArray.map((building, index) => {
          return (
            <Building
              building={building}
              purchaseAmount={purchaseAmount}
              setBuildingsArray={setBuildingsArray}
              key={index}
            />
          );
        })}
      </div>
    </section>
  );
}

export default  BuildingsMenu;
