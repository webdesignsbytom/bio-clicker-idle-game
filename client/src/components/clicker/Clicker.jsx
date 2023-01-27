import React, { useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import BonusMultiplier from '../bonusMultiplier/BonusMultiplier';
import './clicker.css';

function Clicker() {
  const { playerCharacter, setPlayerCharacter } = useContext(GameContext);

  const clickButton = () => {
    let newPPC = playerCharacter.ppc;
    let currentTotalScore = playerCharacter.totalScore;
    let currentMultiplier = playerCharacter.bonusMultiplier;
    let newTotalScore = newPPC * currentMultiplier + currentTotalScore;

    setPlayerCharacter({
      ...playerCharacter,
      totalScore: newTotalScore,
    });
  };

  return (
    <>
      <section className='clicker__container'>
        <div className='clicker__section'>
          <button onClick={clickButton}>CLICK ME</button>
        </div>
        <article className='special__container'>
          <div className="special__link bonus">Bonus</div>
          <div className="special__link achievements">Achievements</div>
          <div className="special__link quest">Quests</div>
        </article>
      </section>
    </>
  );
}

export default Clicker;
