import React from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import EnemyArray from '../../components/enemies/EnemyArray';
import MenuContainer from '../../components/menus/MenuContainer';
// DB
import { ItemsDB } from '../../utils/data/ItemsDB';
import { BuildingsDB } from '../../utils/data/BuildingsDB';
import ScoresDisplay from '../../components/scoresDisplay/ScoresDisplay';
import TextScroll from '../../components/textScroll/TextScroll';
import LevelData from '../../components/level/LevelData'
import InGameMenu from '../../components/menus/InGameMenu';
import AlgaeClicker from '../../components/game/AlgaeClicker';

function GameMainPage() {
  return (
    <div className='grid grid-rows-reg h-screen lg:max-h-screen lg:overflow-hidden main__bg__gradient'>
      <Navbar />
      <main className='grid grid-rows-rev h-full w-full'>
        {/* Main continer */}
        <section className='grid grid-cols-121 gap-2 mt-1 px-1'>
          {/* Buildings Menu */}
          <div className='hidden lg:grid h-full'>
            <MenuContainer displayArray={ItemsDB} />
          </div>
          {/* Main Container */}
          <section className='grid grid-rows-a1a h-full'>
            <div className='grid border-black border-solid border-4 bg-white relative mb-4'>
              <ScoresDisplay />
            </div>
            <div className='clicker__container outline outline-2 outline-black bg-white mb-4'>
              <EnemyArray />
              <LevelData />
              <InGameMenu />
              <AlgaeClicker />
            </div>
            <div className='grid outline outline-2 outline-black bg-white relative mb-4'>
              data
            </div>
          </section>
          {/* Upgrades Menu */}
          <div className='hidden lg:grid'>
            <MenuContainer displayArray={BuildingsDB} />
          </div>
        </section>

        {/* Text footer */}
        <TextScroll />
      </main>
    </div>
  );
}

export default GameMainPage;
