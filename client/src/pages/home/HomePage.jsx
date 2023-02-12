import React, { useContext } from 'react';
import Nav from '../../components/nav/Nav';
import Game from './GameContainer';
import TextScroll from '../../components/textScroll/TextScroll';
import AdminPanel from '../../components/admin/AdminPanel';
import './home.css';
import Completed from '../../components/level/Completed';
import { OptionContext } from '../../context/OptionContext';
import Clicker from '../../components/clicker/Clicker';

function Home() {
  const { toggleLevelComplete } = useContext(OptionContext);

  return (
    <>
      <div className='homepage__container'>
        <Nav />
        {toggleLevelComplete ? <Completed /> : <Game />}
        <TextScroll />
      </div>
    </>
  );
}

export default Home;
