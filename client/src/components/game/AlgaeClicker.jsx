import React from 'react';
// Image
import AlgaeIcon from '../../assets/images/algae.png';

function AlgaeClicker() {
  return (
    <div className='clicker__section no__highlights'>
      <img className='w-[150px] h-[150px]' src={AlgaeIcon} alt='Algae game clicker button icon' />
    </div>
  );
}

export default AlgaeClicker;
