import React from 'react';
import MenuProduct from './MenuProduct';

function MenuContainer({ displayArray }) {
  return (
    <section className='grid border-4 border-solid border-black bg-green-950'>
      <div className='grid grid-rows-reg'>
        <article className='bg-green-700 border-b-4 border-solid border-black grid p-1 text-center'>
          <div className='outline outline-2 outline-black w-full'>
            <h3 className='text-xl font-semibold'>{displayArray.title}</h3>
          </div>
        </article>
        <div className='grid'>
          <ol className='grid gap-2 overflow-y-scroll lg:h-[650px] xl:h-[720px] 2xl:h-[750px] p-1'>
            {displayArray.content.map((product, index) => {
              return <MenuProduct key={index} product={product} />;
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default MenuContainer;
