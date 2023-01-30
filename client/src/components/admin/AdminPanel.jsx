import React, { useContext } from 'react';
import './adminPanel.css';
import { OptionContext } from '../../context/OptionContext';
import { GameContext } from '../../context/GameContext';

function AdminPanel() {
  const { playerCharacter, setPlayerCharacter } = useContext(GameContext);
  const { isAdminPanelOpen, setIsAdminPanelOpen } = useContext(OptionContext);

  let gameArray = playerCharacter

//   const headers = Object.keys(gameArray)
//   console.log('headers', headers)

//   const gameValues = Object.values(gameArray)

  const gameStateItem = Object.entries(gameArray)
  return (
    <>
      {isAdminPanelOpen && (
        <div className='admin__panel__container'>
          {gameStateItem.map((item, index) => {
            return (
                <div key={index}>{item[0]}: {' '} {item[1]}</div>
            )
          })}
        </div>
      )}
    </>
  );
}

export default AdminPanel;
