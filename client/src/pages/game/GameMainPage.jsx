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
// Context
import { ToggleContext } from '../../context/ToggleContext';
import { GameContext } from '../../context/GameContext';
// DB
import { ItemsDB } from '../../utils/data/ItemsDB';
import { BuildingsDB } from '../../utils/data/BuildingsDB';
import { LevelsDB } from '../../utils/data/LevelsDB';
// Functions

function GameMainPage() {
  const { toggleAchievements, toggleTechTree, toggleUpgrades, toggleQuests } =
    useContext(ToggleContext);
  const { playerCharacter, setPlayerCharacter } = useContext(GameContext);

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

  // if (playerCharacter.totalScore >= LevelsDB.content[playerCharacter.currentLevel - 1].targetScore) {
  //   console.log('WINNNNNNNN');
  // }

  return (
    <div className='grid lg:grid-rows-reg h-screen max-h-screen overflow-hidden main__bg__gradient'>
      <Navbar />
      <main className='grid lg:grid-rows-rev h-full w-full'>
        {/* Main continer */}
        <section className='grid lg:grid-cols-121 gap-2 mt-1 px-1'>
          {/* Buildings Menu */}
          <div className='hidden lg:grid h-full'>
            <MenuContainer displayArray={ItemsDB} />
          </div>
          {/* Main Container */}
          <section className='grid grid-rows-reg lg:grid-rows-a1a h-full'>
            <div className='grid border-green-950 border-solid border-2 bg-white relative mb-2'>
              <ScoresDisplay />
            </div>
            <div className='blue__bg'>
              <div className='clicker__container outline outline-2 outline-green-950 mb-2 h-full'>
                <LevelData />
                <EnemyArray />
                <InGameMenu />
                <AlgaeClicker />
                {toggleAchievements && <AchievementsContainer />}
                {toggleTechTree && <TechTreeContainer />}
                {toggleUpgrades && <UpgradesContainer />}
                {toggleQuests && <QuestsContainer />}
              </div>
            </div>
            <div className='hidden lg:grid outline outline-2 outline-green-950 bg-white relative mb-4'>
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
