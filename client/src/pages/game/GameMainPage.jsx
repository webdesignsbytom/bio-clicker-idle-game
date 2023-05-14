import React, { useContext, useEffect } from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import EnemyArray from '../../components/enemies/EnemyArray';
import MenuContainer from '../../components/menus/MenuContainer';
import ScoresDisplay from '../../components/scoresDisplay/ScoresDisplay';
import TextScroll from '../../components/textScroll/TextScroll';
import LevelData from '../../components/level/LevelData';
import InGameMenu from '../../components/menus/InGameMenu';
import AlgaeClicker from '../../components/game/AlgaeClicker';
import AchievementsContainer from '../../components/containers/AchievementsContainer';
import TechTreeContainer from '../../components/containers/TechTreeContainer';
import UpgradesContainer from '../../components/containers/UpgradesContainer';
import QuestsContainer from '../../components/containers/QuestsContainer';
import PlayerDataContainer from '../../components/containers/PlayerDataContainer';
import LevelCompleted from '../../components/level/LevelCompleted';
// Context
import { ToggleContext } from '../../context/ToggleContext';
import { GameContext } from '../../context/GameContext';
// DB
import { ItemsDB } from '../../utils/data/ItemsDB';
import { BuildingsDB } from '../../utils/data/BuildingsDB';
import PhoneMenuContainer from '../../components/menus/PhoneMenuContainer';

function GameMainPage() {
  const {
    toggleAchievements,
    toggleTechTree,
    toggleUpgrades,
    toggleQuests,
    toggleLevelCompletedFun,
    levelCompleted,
    toggleBuildings,
    toggleItems,
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
            <div className='hidden lg:grid border-green-950 border-solid border-2 bg-white relative mb-2'>
              <ScoresDisplay />
            </div>
            <div className='blue__bg'>
              <div className='clicker__container outline outline-2 outline-green-950 mb-2 h-full'>
                <div className='grid lg:hidden border-green-950 border-solid border-2 bg-white h-fit'>
                  <ScoresDisplay />
                </div>
                <LevelData />
                <EnemyArray />
                <InGameMenu />
                <PhoneMenuContainer />
                <AlgaeClicker />
                {toggleAchievements && <AchievementsContainer />}
                {toggleTechTree && <TechTreeContainer />}
                {toggleUpgrades && <UpgradesContainer />}
                {toggleQuests && <QuestsContainer />}
                {levelCompleted && <LevelCompleted />}
                {toggleBuildings && <MenuContainer displayArray={BuildingsDB} />}
                {toggleItems && <MenuContainer displayArray={ItemsDB} />}
              </div>
            </div>
            <section className='hidden lg:grid outline outline-2 outline-green-950 bg-white relative mb-4'>
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
