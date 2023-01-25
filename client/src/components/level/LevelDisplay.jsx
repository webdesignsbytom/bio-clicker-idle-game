import React from 'react';
import './levelDisplay.css';
import Logo from '../../assets/images/algae.png';

function LevelDisplay() {
  return (
    <section className='gameProduction__data__container'>

      <div className='gameProduction__data fuel__data__container'>

        <div className='data__image'>
          <div className='gameProduction__image'>
            <p className='gameProduction__icon'>🔥</p>
          </div>
        </div>
        <div className='data__info'>
          <div className='fuel__production'>
            <span>Fuel Production</span>
            <h6>10,000 gallons</h6>
          </div>
          <div className='total__fuel'>
            <span>Total Fuel</span>
            <h6>1 million gallons</h6>
          </div>
        </div>
      </div>

      <div className='gameProduction__data power__data__container'>
        <div className='data__image'>
          <div className='gameProduction__image'>
            <p className='gameProduction__icon'>🔥</p>
          </div>
        </div>
        <div className='data__info'>
          <div className='power__production'>
            <span>Power Production</span>
            <h6>10 TW</h6>
          </div>
          <div className='power__coverage'>
            <span>Power Supply</span>
            <h6>50 Cities</h6>
          </div>
        </div>
      </div>

      <div className='gameProduction__data level__data__container'>
        <div className='data__image'>
            <p className='gameProduction__icon'>🔥</p>
        </div>
        <div className='data__info'>
          <div className='level__name'>
            <span>Level Name</span>
            <h6>Yoda Planet</h6>
          </div>
          <div className='gameProduction__targetScore'>
            <span>Target Score</span>
            <h6>1,000,000</h6>
          </div>
          <div className='gameProduction__scoreDifference'>
            <span>Score Needed</span>
            <h6>300,000</h6>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LevelDisplay;
