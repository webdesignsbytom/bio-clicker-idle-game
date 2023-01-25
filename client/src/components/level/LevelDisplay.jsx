import React from 'react';
import './levelDisplay.css';
import Logo from '../../assets/images/algae.png';

function LevelDisplay() {
  return (
    <section className='level__data__container'>
      <div className="fuel__data__container">
        <div className="fuel__production">
          <span>Fuel Production</span>
          <h6>10,000 gallons</h6>
        </div>
        <div className="total__fuel">
          <span>Total Fuel</span>
          <h6>1 million gallons</h6>
        </div>
      </div>

      <div className="power__data__container">
        <div className="power__production">
          <span>Power Production</span>
          <h6>10 TW</h6>
        </div>
        <div className="power__coverage">
          <span>Power Supply</span>
          <h6>50 Cities</h6>
        </div>
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
