import React from 'react'
import Nav from '../../components/nav/Nav'
import Game from './Game'
import TextScroll from '../../components/textScroll/TextScroll'
import './home.css'

function Home() {
  return (
    <div className='homepage__container'>
        <Nav />
        <Game />
        <TextScroll />
    </div>
  )
}

export default Home