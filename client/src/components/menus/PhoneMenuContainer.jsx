import React, { useContext } from 'react';
// Images
import BuildingImage from '../../assets/images/buildings/factory.png';
import ItemImage from '../../assets/images/items/coffee-machine.png';
import { ToggleContext } from '../../context/ToggleContext';

function PhoneMenuContainer() {
  const { toggleBuildingsFun, toggleItemsFun } = useContext(ToggleContext);

  const openItemMenu = () => {
    toggleItemsFun();
  };

  const openBuildingMenu = () => {
    toggleBuildingsFun();
  };

  return (
    <section className='absolute top-16 lg:top-4 left-0 grid lg:hidden gap-2'>
      <div
        onClick={openBuildingMenu}
        className='p-2 bg-transparent-black rounded-xl ml-2 active:scale-105 duration-200'
      >
        <img
          className='w-12 h-12 active:scale-105 duration-200'
          src={BuildingImage}
          alt='Buildings'
        />
      </div>
      <div
        onClick={openItemMenu}
        className='p-2 bg-transparent-black rounded-xl ml-2 active:scale-105 duration-200'
      >
        <img
          className='w-12 h-12 active:scale-105 duration-200'
          src={ItemImage}
          alt='Itemsf'
        />
      </div>
    </section>
  );
}

export default PhoneMenuContainer;
