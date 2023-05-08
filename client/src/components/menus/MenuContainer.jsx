import React from 'react';
import MenuProduct from './MenuProduct';

function MenuContainer({ displayArray }) {
  return (
    <section className='bg-red-400'>
      <article className='bg-yellow-400 grid items-center justify-center py-2 px-2 text-center border-b-2 border-solid border-black'>
        <h3 className='text-xl font-semibold'>{displayArray.title}</h3>
      </article>
      <ol className='bg-orange-400'>
        {displayArray.content.map((product, index) => {
          return (
            <MenuProduct key={index} product={product} />
          )
        })}
      </ol>
    </section>
  );
}

export default MenuContainer;
