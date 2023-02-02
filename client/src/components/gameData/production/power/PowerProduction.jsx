import React from 'react';
import './powerProduction.css';
function PowerProduction() {
  return (
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
  );
}

export default PowerProduction;
