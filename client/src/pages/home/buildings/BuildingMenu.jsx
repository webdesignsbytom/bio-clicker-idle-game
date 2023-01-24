import React, { useEffect, useState } from 'react';
import BuildingDB from '../../../db/buildings.json';
import Building from './Building';
import './buildingMenu.css'

function BuildingMenu() {
  const [buildings, setbuildings] = useState([]);

  console.log('Buildings loaded')

  useEffect(() => {
    setbuildings(BuildingDB);
  }, []);

  return (
    <section className='buildingMenu__container'>
      <div className='building__title__container'>
        <h2>BuildingMenu</h2>
      </div>

      <ul className="buildings__container">
            {buildings.map((building, index) => {
                return <Building building={building} key={index} />
            })}
      </ul>
    </section>
  );
}

export default BuildingMenu