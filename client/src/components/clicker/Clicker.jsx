import React, { useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import BonusMultiplier from '../bonusMultiplier/BonusMultiplier';
import './clicker.css';

function Clicker() {
  const { playerCharacter, setPlayerCharacter } = useContext(GameContext);

  const clickButton = () => {
    let newpointsPerClick = playerCharacter.pointsPerClick;
    let currentTotalScore = playerCharacter.totalScore;
    let currentMultiplier = playerCharacter.bonusMultiplier;
    let newTotalScore = newpointsPerClick * currentMultiplier + currentTotalScore;

    setPlayerCharacter({
      ...playerCharacter,
      totalScore: newTotalScore,
    });
  };

  return (
    <>
      <section className='clicker__container'>
        <button onClick={clickButton}>CLICK ME</button>
        {/* <BonusMultiplier /> */}
      </section>
    </>
  );
}

export default Clicker;
