import React, { useContext } from 'react';
// Context
import { GameContext } from '../../context/GameContext';

function PlayerDataContainer() {
  const { playerCharacter } = useContext(GameContext);
  return (
    <div className='bg-black text-white h-full'>
      <div className='py-1 px-2'>
        <h5>Player Data</h5>
      </div>
      <article className='flex justify-between px-2 text-xs pb-1'>
        <div className='grid grid-flow-col w-fit'>
          <h6>Total Times Clicked: </h6>
          <span>{playerCharacter.totalTimesClicked}</span>
        </div>
        <div className='grid grid-flow-col w-fit'>
          <h6>Total Items Owned: </h6>
          <span>{playerCharacter.totalItemsOwned}</span>
        </div>
        <div className='grid grid-flow-col w-fit'>
          <h6>Total Buildings Owned: </h6>
          <span>{playerCharacter.totalBuildingsOwned}</span>
        </div>
      </article>
    </div>
  );
}

export default PlayerDataContainer;
