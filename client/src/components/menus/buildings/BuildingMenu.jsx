import React, { useContext, useEffect, useState } from 'react';
import BuildingDB from '../../../db/buildings.json';
import Building from './Building';
import { GameContext } from '../../../context/GameContext';
import '../menu.css';

function BuildingMenu() {
  const { playerCharacter, setPlayerCharacter } = useContext(GameContext);
  const [buildingsArray, setBuildingsArray] = useState(BuildingDB);

  console.log('Buildings loaded');

  useEffect(() => {
    console.log('BUILDINS USE EFFECT')
    setPlayerCharacter({
      ...playerCharacter,
      buildings: buildingsArray
    })

  }, [buildingsArray]);

  return (
    <section className='menu__container'>
      <div className='menu__title__container'>
        <h2>BuildingMenu</h2>
      </div>
      <div className='product__deltaV'>
        <h6>
          Total buildings: <span>{playerCharacter.totalBuildingsOwned}</span>
        </h6>
        <h6>
          Total % increase: <span>402%</span>
        </h6>
      </div>
      <div className='menu__container'>
        {buildingsArray.map((building, index) => {
          return <Building building={building} setBuildingsArray={setBuildingsArray} key={index} />;
        })}
      </div>
    </section>
  );
}

export default BuildingMenu;
