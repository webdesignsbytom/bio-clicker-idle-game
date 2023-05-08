import React from 'react';

function MenuProduct({
  product,
  buyProduct,
  purchaseAmount,
  maxPurchase,
  quantityOwned,
}) {
  return (
    <li className='grid gap-1 items-center rounded text-[8px] p-1 product__container'>
      <section className='grid grid-cols-a1a product__container rounded px-1 py-1 gap-1'>
        <div className='grid product__container items-center justify-center'>
          <img
            className='object-cover w-[75px] rounded'
            src={product.image}
            alt={product.name}
          />
        </div>

        <section className='grid grid-cols-2 product__container rounded p-2'>
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

        <div className='grid w-full'>
          <button
            className='rounded product__container p-2 w-full'
            onClick={() => buyProduct(product)}
          >
            <h6 className='p-1'>BUY</h6>
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

      <section className='product__container rounded px-2 py-1 text-sm'>
        <p className='leading-3'>{product.desc}</p>
      </section>
    </li>
  );
}

export default MenuProduct;
