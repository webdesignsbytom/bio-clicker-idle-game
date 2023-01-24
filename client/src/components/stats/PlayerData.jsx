import React, { useContext } from 'react'
import './playerData.css'
import { GameContext } from '../../context/GameContext';
import BonusMultiplier from '../bonusMultiplier/BonusMultiplier';
import { Link } from 'react-router-dom';

function PlayerData() {
    const { playerCharacter, setPlayerCharacter } = useContext(GameContext);
  return (
    <section className='playerData__container'>
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
          </div>
    </section>
  )
}

export default PlayerData