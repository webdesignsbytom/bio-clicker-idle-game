import React from 'react';

function MenuProduct({
  product,
  buyProduct,
  purchaseAmount,
  maxPurchase,
  quantityOwned,
}) {
  return (
    <li className='grid items-center p-1 outline outline-2 outline-black text-xs'>
      <section className='grid grid-flow-col'>
        <div className=''>
          <img
            className='w-[50px] h-[50px] outline outline-2 outline-black rounded-lg'
            src={product.image}
            alt={product.name}
          />
        </div>

        <section className='grid grid-cols-2'>
          <div className='grid'>
            <h6>Name: </h6>
            <span>{product.name}</span>
          </div>

          <div className='grid'>
            <h6>Cost: </h6>
            <span>£ {Math.trunc(product.cost)}</span>
          </div>

          <div className='grid'>
            <h6>Type: </h6>
            <span>{product.typetitle}</span>
          </div>

          <div className='grid'>
            <h6>Effect: </h6>
            <span>+ {product.effect}</span>
          </div>
        </section>

        <div className='grid'>
          <button className='outline outline-2 outline-black rounded-lg' onClick={() => buyProduct(product)}>
            <h6>BUY</h6>
            {/* <div className=''>
          <h6>Buy</h6>
          <span>{purchaseAmount === 'max' ? maxPurchase : purchaseAmount}</span>
          </div>
        <div className=''>
        <h6>
        Owned <span>{quantityOwned}</span>
        </h6>
    </div> */}
          </button>
        </div>
      </section>

      <section className=''>
        <p className='leading-3'>{product.desc}</p>
      </section>
    </li>
  );
}

export default MenuProduct;
