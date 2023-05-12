import React from 'react';

function PurchaseNumSelector({ purchaseAmount, handleChange }) {
    
  return (
    <section className='grid'>
      <form className='grid grid-flow-col px-1 text-gray-100'>
        <div className='grid grid-flow-col items-center w-fit gap-1'>
          <label htmlFor='one'>1</label>
          <input
            type='checkbox'
            name='one'
            id='one'
            className='mt-1'
            value={1}
            onChange={handleChange}
            // checked={purchaseAmount === 1 ? 'active' : ''}
          />
        </div>
        <div className='grid grid-flow-col items-center w-fit gap-1'>
          <label htmlFor='ten'>10</label>
          <input
            type='checkbox'
            name='ten'
            id='ten'
            className='mt-1'
            value={10}
            onChange={handleChange}
            // checked={purchaseAmount === '10' ? 'active' : ''}
          />
        </div>
        <div className='grid grid-flow-col items-center w-fit gap-1'>
          <label htmlFor='twentyFive'>25</label>
          <input
            type='checkbox'
            name='twentyFive'
            id='twentyFive'
            className='mt-1'
            onChange={handleChange}
            value={25}
            // checked={purchaseAmount === '25' ? 'active' : ''}
          />
        </div>
        <div className='grid grid-flow-col items-center w-fit gap-1'>
          <label htmlFor='oneHundred'>100</label>
          <input
            type='checkbox'
            name='oneHundred'
            id='oneHundred'
            className='mt-1'
            value={100}
            onChange={handleChange}
            // checked={purchaseAmount === '100' ? 'active' : ''}
          />
        </div>
        <div className='grid grid-flow-col items-center w-fit gap-1'>
          <label htmlFor='max'>Max</label>
          <input
            type='checkbox'
            name='max'
            id='max'
            className='mt-1'
            value={'max'}
            onChange={handleChange}
            // checked={purchaseAmount === 'max' ? 'active' : ''}
          />
        </div>
      </form>
    </section>
  );
}

export default PurchaseNumSelector;
