import React from 'react'
import Nav from '../../components/nav/Nav'
import Game from './GameContainer'
import TextScroll from '../../components/textScroll/TextScroll'
import AdminPanel from '../../components/admin/AdminPanel'
import './home.css'

function Home() {
  return (
    <div className='homepage__container'>
        <Nav />
        <Game />
        <TextScroll />
        <AdminPanel />
    </div>
  )
}

export default Home