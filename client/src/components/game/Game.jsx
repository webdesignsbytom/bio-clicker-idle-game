import React, { useContext, useEffect, useState } from 'react';
import BuildingMenu from '../buildings/BuildingMenu';
import ItemMenu from '../items/ItemMenu';
import { GameContext } from '../../context/GameContext';
import './game.css';
import BonusMultiplier from '../bonusMultiplier/BonusMultiplier';
import Clicker from '../clicker/Clicker';
import { Link } from 'react-router-dom';
import Nav from '../nav/Nav';
import StatsDisplay from '../stats/StatsDisplay';
import PlayerData from '../stats/PlayerData';

function Game() {
  const { playerCharacter, setPlayerCharacter } = useContext(GameContext);

  const [startTimer, setStartTimer] = useState(false);
  const [pickedName, setPickedName] = useState(false);
  const [playerName, setPlayerName] = useState('');

  console.log('loaded');

  useEffect(() => {
    if (playerCharacter.pps >= 1) {
      const interval = setInterval(() => {
        let newPPS = playerCharacter.pps;
        let currentTotalScore = playerCharacter.totalScore;
        let currentMultiplier = playerCharacter.bonusMultiplier;
        let newTotalScore = newPPS * currentMultiplier + currentTotalScore;

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

  const handleChange = (event) => {
    const { value } = event.target;

    setPlayerName(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setPickedName(!pickedName);
  };

  return (
    <>
      <div className='gamePage__container'>
        {/* <Nav /> */}

        <div className='game__container'>
          <ItemMenu />

          

          <BuildingMenu />
        </div>
      </div>
    </>
  );
}

export default Game;
