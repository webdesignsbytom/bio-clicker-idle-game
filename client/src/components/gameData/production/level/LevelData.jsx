import React from 'react'

function LevelData({ currentLevel }) {
  return (
    <div className='gameProduction__data level__data__container'>
        <div className='data__image'>
          <p className='gameProduction__icon'>🔥</p>
        </div>
        <div className='data__info'>
          <div className='level__name'>
            <span>Level Name</span>
            <h6>
              {currentLevel.name} {currentLevel.id}
            </h6>
          </div>
          <div className='gameProduction__targetScore'>
            <span>Target Score</span>
            <h6>{currentLevel.targetScore}</h6>
          </div>
        </div>
      </div>
  )
}

export default LevelData