import React, { useContext, useState } from 'react';
// Components
import MenuProduct from './MenuProduct';
import PurchaseNumSelector from './PurchaseNumSelector';
// Context
import { ToggleContext } from '../../context/ToggleContext';

function MenuContainer({ displayArray }) {
  const { toggleBuildingsFun, toggleItemsFun } = useContext(ToggleContext);

  const [purchaseAmount, setPurchaseAmount] = useState(1);

  const handleChange = (event) => {
    console.log('CHANHE', event.target.value);
    setPurchaseAmount(event.target.value);
  };

  const closeContainer = () => {
    if (displayArray.title === 'Items') {
      toggleItemsFun();
    }
    if (displayArray.title === 'Buildings') {
      toggleBuildingsFun();
    }
  };

  return (
    <section className='z-50 lg:z-0 grid border-2 border-solid border-green-950 blue__bg'>
      <div className='grid grid-rows-reg h-full'>
        <article className='blue__bg2 border-b-2 border-solid border-green-950 grid p-1 text-center'>
          <div className='flex justify-between items-center px-2 outline outline-2 outline-green-950 w-full bg-[#bfacb5]'>
            <h3 className='text-xl font-semibold'>{displayArray.title}</h3>
            <div className='lg:hidden' onClick={closeContainer}>
              X
            </div>
          </div>
        </article>
        <div className='grid grid-rows-reg overflow-y-scroll'>
          <PurchaseNumSelector handleChange={handleChange} />
          <ol className='grid gap-2 h-full lg:h-[500px] xl:h-[520px] 2xl:h-[540px] p-1'>
            {displayArray.content.map((product, index) => {
              return (
                <MenuProduct
                  key={index}
                  product={product}
                  purchaseAmount={purchaseAmount}
                  productType={displayArray.type}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default MenuContainer;
