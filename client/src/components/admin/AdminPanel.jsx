import React, { useContext, useEffect, useState } from 'react';
import './adminPanel.css';
import { OptionContext } from '../../context/OptionContext';
import { GameContext } from '../../context/GameContext';

function AdminPanel() {
  const { playerCharacter, setPlayerCharacter } = useContext(GameContext);
  const { isAdminPanelOpen, setIsAdminPanelOpen } = useContext(OptionContext);
  const [userArray, setUserArray] = useState([]);
  const [keysArray, setKeysArray] = useState([]);
  const [valuesArray, setValuesArray] = useState([]);

  let gameArray = playerCharacter;

  useEffect(() => {
    const gameStateItem = Object.entries(gameArray);
    const gameKeys = Object.keys(gameArray);
    const gameValues = Object.values(gameArray);
    setKeysArray(gameKeys)
    setValuesArray(gameValues)
  }, []);

  return (
    <>
      {isAdminPanelOpen && (
        <div className='admin__panel__container'>
          {keysArray.map((key, index) => {
            console.log('key', key);
            return (
              <div className='key__container' key={index}>
                <h3>{key}</h3>
              </div>
            );
          })}
          {valuesArray.map((value, index) => {
            return (
              <div className='value__container' key={index}>
                <h3>{value}</h3>
              </div>
            )
            })}
        </div>
      )}
    </>
  );
}

export default AdminPanel;
