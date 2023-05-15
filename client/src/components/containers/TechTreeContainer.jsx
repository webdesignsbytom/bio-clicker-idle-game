import React, { useContext, useEffect, useState } from 'react';
// Context
import { GameContext } from '../../context/GameContext';
import { ToggleContext } from '../../context/ToggleContext';
import { TechDB } from '../../utils/data/TechDB';

const TechTreeData = TechDB;

function TechTreeContainer() {
  const { playerCharacter, setPlayerCharacter } = useContext(GameContext);
  const { toggleTechTreeFun } = useContext(ToggleContext);
  console.log('TechTreeData', TechTreeData);

  const [techTreeArray, setTechTreeArray] = useState(TechTreeData);

  return (
    <section className='grid absolute top-0 left-0 z-40 h-full bg-yellow-100 outline outline-4 outline-black overflow-hidden w-full'>
      <article className='overflow-y-scroll h-full'>
        <div className='mt-1 pb-1 border-b-2 border-solid border-black'>
          <h2 className='font-semibold text-center'>Tech Tree</h2>
        </div>
        <div className='achievements__list'>
          {techTreeArray.content.map((tech, index) => {
            return (
              <article
                key={index}
                className='grid border-b-2 border-black border-solid p-1'
              >
                <section className='grid grid-flow-col'>
                  <div className='grid'>
                    <h4>Tech Name: {tech.name}</h4>
                    <h5>Cost ${tech.cost}</h5>
                  </div>
                  <div className='p-1'>
                    {tech.owned ? <span>✔️</span> : <span>Not Owned</span>}
                  </div>
                  <div>
                    <button className='outline-2 outline outline-black rounded-xl px-4 py-1 h-fit'>
                      BUY
                    </button>
                  </div>
                </section>
              </article>
            );
          })}
        </div>
      </article>
      <div className='p-2 grid justify-center'>
        <button
          className='outline-2 outline outline-black rounded-xl px-4 py-1 h-fit'
          onClick={toggleTechTreeFun}
        >
          Close
        </button>
      </div>
    </section>
  );
}

export default TechTreeContainer;
