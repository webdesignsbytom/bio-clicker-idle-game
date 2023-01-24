import React from 'react';
import './levelDisplay.css';
import Logo from '../../assets/images/algae.png';

function LevelDisplay() {
  return (
    <section className='level__data__container'>
      <div className='levelImg__container'>
        <img src={Logo} alt='logo' />
      </div>
      <div className='level__data'>
        <div className='level__name'>
          <span>Level Name</span>
          <h6>Yoda Planet</h6>
        </div>
        <div className='level__targetScore'>
          <span>Target Score</span>
          <h6>1,000,000</h6>
        </div>
      </div>
    </section>
  );
}

export default LevelDisplay;
