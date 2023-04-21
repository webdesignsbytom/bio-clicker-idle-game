import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import GameContextProvider from './context/GameContext';
import OptionContextProvider from './context/OptionContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <GameContextProvider>
        <OptionContextProvider>
          <App />
        </OptionContextProvider>
      </GameContextProvider>
    </BrowserRouter>
);
