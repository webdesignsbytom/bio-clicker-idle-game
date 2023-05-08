import React from 'react'
import Navbar from '../../components/nav/Navbar'
import EnemyAnimation from '../../components/enemies/EnemyAnimation'
import EnemyArray from '../../components/enemies/EnemyArray'

function GameMainPage() {
  return (
    <div className='grid grid-rows-reg h-screen md:background__design'>
        <Navbar />
        <main className='bg-red-300 p-4 grid'>
          <section className='bg-blue-400 grid grid-cols-3 gap-4'>
            <div className='grid outline outline-2 outline-black bg-white'>a</div>
            <div className='grid outline outline-2 outline-black bg-white relative'>
              {/* <EnemyAnimation /> */}
              <EnemyArray />
            </div>
            <div className='grid outline outline-2 outline-black bg-white'>a</div>
          </section>
        </main>
    </div>
  )
}

export default GameMainPage