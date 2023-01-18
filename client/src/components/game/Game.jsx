import React, { useContext, useEffect, useState } from 'react';
import BuildingMenu from '../buildings/BuildingMenu';
import ItemMenu from '../items/ItemMenu';
import { GameContext } from '../../context/GameContext';
import './game.css';
import BonusMultiplier from '../bonusMultiplier/BonusMultiplier';
import Clicker from '../clicker/Clicker';

function Game() {
  const { playerCharacter, setPlayerCharacter } = useContext(GameContext);

  const [startTimer, setStartTimer] = useState(false);
  const [buildingsOwned, setBuildingsOwned] = useState([]);
  const [itemsOwned, setItemsOwned] = useState([]);

  console.log('loaded');

  useEffect(() => {
    if (playerCharacter.pps >= 1) {
      const interval = setInterval(() => {
        console.log('pps', playerCharacter.pps);
        let newPPS = playerCharacter.pps;
        let currentTotalScore = playerCharacter.totalScore;
        let currentMultiplier = playerCharacter.bonusMultiplier;
        let newTotalScore = (newPPS * currentMultiplier)  + currentTotalScore;

        setPlayerCharacter({
          ...playerCharacter,
          totalScore: newTotalScore,
        });
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [
    startTimer,
    playerCharacter.pps,
    playerCharacter.bonusMultiplier,
    playerCharacter.totalScore,
    playerCharacter.ppc,
  ]);

  setInterval(() => {
    console.log('Player', playerCharacter);
  }, 5000);

  return (
    <div className='game__container'>

      <ItemMenu itemsOwned={itemsOwned} setItemsOwned={setItemsOwned} />

      <section>
        <Clicker />
        <div className='scores__container'>
          <h3> Total Score {playerCharacter.totalScore}</h3>
          <h3> PPS {playerCharacter.pps}</h3>
          <h3> PPC {playerCharacter.ppc}</h3>
        </div>

        <div className='objects__container'>
          <h3>total items {playerCharacter.totalItemsOwned}</h3>
          <h3>total buildings {playerCharacter.totalBuildingsOwned} </h3>
          <BonusMultiplier />
        </div>
      </section>

      <BuildingMenu />
    </div>
  );
}

export default Game;
