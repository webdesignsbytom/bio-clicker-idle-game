import React, { useContext } from 'react';
// Components
import MenuContainer from '../menus/MenuContainer';
// Context
import { ToggleContext } from '../../context/ToggleContext';
// Data
import { BuildingsDB } from '../../utils/data/BuildingsDB';
import { ItemsDB } from '../../utils/data/ItemsDB';

function BuildingAndItemModals() {
    const {
        toggleBuildings,
        toggleItems,
      } = useContext(ToggleContext);
  return (
    <>
      {toggleBuildings && <MenuContainer displayArray={BuildingsDB} />}
      {toggleItems && <MenuContainer displayArray={ItemsDB} />}
    </>
  );
}

export default BuildingAndItemModals;
