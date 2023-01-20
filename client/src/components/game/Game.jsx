import React, { useContext, useEffect, useState } from 'react';
import BuildingMenu from '../buildings/BuildingMenu';
import ItemMenu from '../items/ItemMenu';
import { GameContext } from '../../context/GameContext';
import './game.css';
import BonusMultiplier from '../bonusMultiplier/BonusMultiplier';
import Clicker from '../clicker/Clicker';
import { Link } from 'react-router-dom';
import Nav from '../nav/Nav';

function Game() {
  const { playerCharacter, setPlayerCharacter } = useContext(GameContext);

  const [startTimer, setStartTimer] = useState(false);
  const [pickedName, setPickedName] = useState(false);
  const [playerName, setPlayerName] = useState('')

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
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setPickedName(!pickedName)
  }

  return (
    <>
      <Nav />
      {pickedName ? (
      <div className='game__container'>
        <ItemMenu />

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
            <h3>Buildings Array {playerCharacter.buildings}</h3>
            <h3>
              Items Array:{' '}
              {playerCharacter.items.map((item, index) => {
                return (
                  <div key={index}>
                    name: {item.name}
                    id:{item.id}
                    quantity: {item.quantity}
                  </div>
                );
              })}
            </h3>
            <BonusMultiplier />

            <Link to='/admin'>ADMIN</Link>
          </div>
        </section>

        <BuildingMenu />
      </div>
      ) : (
        <div>
          <label htmlFor="playerName">Player Name</label>
          <input type="text" name='playerName' onChange={handleChange}/>
          <span>Name: {playerName}</span>
          <input type="submit" value="submit" onClick={handleSubmit}/>
        </div>
      )
      }
    </>
  );
}

export default Game;
