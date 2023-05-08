import React from 'react';

function MenuProduct({
  product,
  buyProduct,
  purchaseAmount,
  maxPurchase,
  quantityOwned,
}) {
  return (
    <section className=''>
      <div className=''>
        <img src={product.image} alt={product.name} />
      </div>

      <div className=''>
        <h6>Name: </h6>
        <span>{product.name}</span>
      </div>

      <div className=''>
        <h6>Cost: </h6>
        <span>£ {Math.trunc(product.cost)}</span>
      </div>

      <div className=''>
        <h6>Type: </h6>
        <span>{product.typetitle}</span>
      </div>

      <div className=''>
        <h6>Effect: </h6>
        <span>+ {product.effect}</span>
      </div>

      <button className='' onClick={() => buyProduct(product)}>
        <div className=''>
          <h6>Buy</h6>
          <span>{purchaseAmount === 'max' ? maxPurchase : purchaseAmount}</span>
        </div>
        <div className=''>
          <h6>
            Owned <span>{quantityOwned}</span>
          </h6>
        </div>
      </button>

      <div className=''>{product.desc}</div>
    </section>
  );
}

export default MenuProduct;
