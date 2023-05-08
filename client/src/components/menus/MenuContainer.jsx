import React from 'react';
import MenuProduct from './MenuProduct';

function MenuContainer({ displayArray }) {
  return (
    <section className='grid grid-rows-reg'>
      <article className='bg-green-500 grid items-center justify-center py-2 px-2 text-center border-b-2 border-solid border-black'>
        <h3 className='text-xl font-semibold'>{displayArray.title}</h3>
      </article>
      <div className='grid'>
        <ol className='grid gap-2 overflow-y-scroll h-[580px] p-1'>
          {displayArray.content.map((product, index) => {
            return <MenuProduct key={index} product={product} />;
          })}
        </ol>
      </div>
    </section>
  );
}

export default MenuContainer;
