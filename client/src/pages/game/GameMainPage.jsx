import React, { useContext, useEffect } from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import MenuContainer from '../../components/menus/MenuContainer';
import ScoresDisplay from '../../components/scoresDisplay/ScoresDisplay';
import TextScroll from '../../components/textScroll/TextScroll';
import LevelData from '../../components/level/LevelData';
import InGameMenu from '../../components/menus/InGameMenu';
import AlgaeClicker from '../../components/algae/AlgaeClicker';

import PlayerDataContainer from '../../components/containers/PlayerDataContainer';
import LevelCompleted from '../../components/level/LevelCompleted';
// Context
import { ToggleContext } from '../../context/ToggleContext';
import { GameContext } from '../../context/GameContext';
// DB
import { ItemsDB } from '../../utils/data/ItemsDB';
import { BuildingsDB } from '../../utils/data/BuildingsDB';
import PhoneMenuContainer from '../../components/menus/PhoneMenuContainer';
import CanvasContainer from '../../components/canvas/CanvasContainer';
import SelectionsContainer from '../../components/containers/SelectionsContainer';
import BuildingAndItemModals from '../../components/containers/BuildingAndItemModals';

function GameMainPage() {
  const {
    toggleLevelCompletedFun,
    levelCompleted,
  } = useContext(ToggleContext);

  const {
    playerCharacter,
    setPlayerCharacter,
    currentLevel,
    resetPlayerStats,
    savePlayerCompleteState,
  } = useContext(GameContext);

  useEffect(() => {
    if (playerCharacter.pointsPerSecond >= 1) {
      const interval = setInterval(() => {
        let pointsPerSecondscore = playerCharacter.pointsPerSecond;
        let totalscore = playerCharacter.totalScore;
        let newScore = pointsPerSecondscore + totalscore;

        setPlayerCharacter({
          ...playerCharacter,
          totalScore: newScore,
        });
      }, 1000);
      //
      return () => {
        clearInterval(interval);
      };
    }
  }, [playerCharacter]);

  useEffect(() => {
    if (playerCharacter.totalScore >= currentLevel.targetScore) {
      completedLevel();
    }
  }, [playerCharacter.totalScore, currentLevel.targetScore]);

  const completedLevel = async () => {
    await toggleLevelCompletedFun();
    await savePlayerCompleteState();
    resetPlayerStats();
  };

  return (
    <div className='grid lg:grid-rows-reg h-screen max-h-screen overflow-hidden main__bg__gradient'>
      <Navbar />
      <main className='grid lg:grid-rows-rev h-full w-full'>
        {/* Main continer */}
        <section className='grid lg:grid-cols-121 gap-2 mt-1 px-1'>
          {/* Items Menu */}
          <div className='hidden lg:grid h-full'>
            <MenuContainer displayArray={ItemsDB} />
          </div>
          {/* Main Container */}
          <section className='grid lg:grid-rows-a1a h-full'>
            <div className='hidden lg:grid w-full border-green-950 border-solid border-2 bg-white relative mb-2'>
              <ScoresDisplay />
            </div>
            <section className='blue__bg m-1'>
              <div className='clicker__container outline outline-2 outline-green-950 mb-2 h-full'>
                <div className='grid lg:hidden border-green-950 border-solid border-2 bg-white h-fit'>
                  <ScoresDisplay />
                </div>
                <LevelData />
                {/* Canvas */}
                <CanvasContainer />
                {/* <EnemyArray /> */}
                <InGameMenu />
                <PhoneMenuContainer />
                <AlgaeClicker />
                {/* Menus for right hand bar container */}
                <SelectionsContainer />

                {levelCompleted && <LevelCompleted />}
                <BuildingAndItemModals />
              </div>
            </section>
            <section className='hidden lg:grid outline outline-2 outline-green-950 relative my-2'>
              <PlayerDataContainer />
            </section>
          </section>
          {/* Buildings Menu */}
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
