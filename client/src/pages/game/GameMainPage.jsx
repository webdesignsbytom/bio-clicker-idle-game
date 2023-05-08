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
    <div className='grid grid-rows-reg h-screen lg:max-h-screen lg:overflow-hidden main__bg__gradient'>
      <Navbar />
      <main className='grid h-full w-full mt-2'>
        <section className='grid grid-cols-121 gap-2'>
          {/* Buildings Menu */}
          <div className='hidden lg:grid h-full'>
            <MenuContainer displayArray={ItemsDB} />
          </div>
          {/* Main Container */}
          <div className='grid outline outline-2 outline-black bg-white relative mb-4'>
            {/* <EnemyAnimation /> */}
            <EnemyArray />
          </div>
          {/* Upgrades Menu */}
          <div className='hidden lg:grid'>
            <MenuContainer displayArray={BuildingsDB} />
          </div>
        </section>
      </main>
    </div>
  );
}

export default GameMainPage;
