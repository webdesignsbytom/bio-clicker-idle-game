import React, { useEffect, useState } from 'react';
import BuildingDB from '../../../db/buildings.json';
import Building from './Building';
import { GameContext } from '../../../context/GameContext';
import '../menu.css'

function BuildingMenu() {
  const [buildings, setbuildings] = useState([]);

  console.log('Buildings loaded')

  useEffect(() => {
    setbuildings(BuildingDB);
  }, []);

  return (
    <section className='menu__container'>
      <div className='menu__title__container'>
        <h2>BuildingMenu</h2>
      </div>

      <div className='menu__container'>
        {buildings.map((building, index) => {
          return <Building building={building} key={index} />;
        })}
      </div>
    </section>
  );
}

export default BuildingMenu