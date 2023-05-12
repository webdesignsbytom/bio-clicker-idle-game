import React, { useState } from 'react';
import MenuProduct from './MenuProduct';
import PurchaseNumSelector from './PurchaseNumSelector';

function MenuContainer({ displayArray }) {
  const [purchaseAmount, setPurchaseAmount] = useState(1)

  const handleChange = (event) => {
    console.log('CHANHE', event.target.value);
    setPurchaseAmount(event.target.value)
  }

  return (
    <section className='grid border-2 border-solid border-green-950 bg-green-950'>
      <div className='grid grid-rows-reg'>
        <article className='bg-green-700 border-b-2 border-solid border-green-950 grid p-1 text-center'>
          <div className='outline outline-2 outline-green-950 w-full bg-[#bfacb5]'>
            <h3 className='text-xl font-semibold'>{displayArray.title}</h3>
          </div>
        </article>
        <div className='grid'>
          <PurchaseNumSelector handleChange={handleChange} />
          <ol className='grid gap-2 overflow-y-scroll lg:h-[500px] xl:h-[520px] 2xl:h-[540px] p-1'>
            {displayArray.content.map((product, index) => {
              return <MenuProduct key={index} product={product} purchaseAmount={purchaseAmount} productType={displayArray.type} />;
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default MenuContainer;
