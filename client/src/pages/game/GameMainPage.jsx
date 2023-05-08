import React from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import EnemyArray from '../../components/enemies/EnemyArray';
import MenuContainer from '../../components/menus/MenuContainer';
// DB
import { ItemsDB } from '../../utils/data/ItemsDB';
import { BuildingsDB } from '../../utils/data/BuildingsDB';

function GameMainPage() {

  return (
    <div className='grid grid-rows-reg h-screen md:background__design'>
      <Navbar />
      <main className='bg-red-300 p-2 grid'>
        <section className='bg-blue-400 grid grid-cols-121 gap-2'>
          {/* Buildings Menu */}
          <div className='grid outline outline-2 outline-black bg-white'>
            <MenuContainer displayArray={ItemsDB} />
          </div>
          {/* Main Container */}
          <div className='grid outline outline-2 outline-black bg-white relative'>
            {/* <EnemyAnimation /> */}
            <EnemyArray />
          </div>
          {/* Upgrades Menu */}
          <div className='grid outline outline-2 outline-black bg-white'>
            <MenuContainer displayArray={BuildingsDB} />
          </div>
        </section>
      </main>
    </div>
  );
}

export default GameMainPage;
