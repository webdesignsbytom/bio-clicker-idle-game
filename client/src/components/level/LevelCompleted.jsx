import React, { useContext } from 'react';
import { ToggleContext } from '../../context/ToggleContext';
import LevelCompletedStats from './LevelCompletedStats';

function LevelCompleted() {
  const { toggleLevelCompletedFun } = useContext(ToggleContext);

  return (
    <section className='grid absolute top-0 left-0 z-40 h-full p-4 bg-blue-200 outline outline-4 outline-black overflow-hidden w-full'>
      <article className='grid items-center justify-center p-2'>
        <div className='outline-4 outline-black outline rounded-xl px-6 py-8 text-center'>
          <div className='mb-4'>
            <h2 className='text-3xl font-bold'>LEVEL COMPLETED</h2>
          </div>

          <section>
            <LevelCompletedStats />
          </section>
          <div>
            <button
              className='outline-2 outline-black bg-slate-400 text-gray-100 outline rounded-xl py-2 px-4'
              onClick={toggleLevelCompletedFun}
            >
              Start Next Level
            </button>
          </div>
        </div>
      </article>
    </section>
  );
}

export default LevelCompleted;
