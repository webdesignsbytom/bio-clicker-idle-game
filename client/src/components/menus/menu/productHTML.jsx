import React from 'react';

function ProductHTML({ product, buyProduct, purchaseAmount, maxPurchase }) {
  console.log('image', product.image)
  return (
    <div className='product'>
      <div className='inner__product'>
        <div className='product__image'>
          <div className='image__icon'>{product.image}</div>
        </div>

        <div className='product__data'>
          <div className='product__name'>
            <h6>Name: </h6>
            <span>{product.name}</span>
          </div>

          <div className='product__cost'>
            <h6>Cost: </h6>
            <span>£ {Math.trunc(product.cost)}</span>
          </div>

          <div className='product__type'>
            <h6>Type: </h6>
            <span>{product.typetitle}</span>
          </div>

          <div className='product__effect'>
            <h6>Effect: </h6>
            <span>+ {product.effect}</span>
          </div>
        </div>

        <div className='purchase__product'>
          <button className='btn' onClick={() => buyProduct(product)}>
            <div className='buy__amount'>
              <h6>Buy</h6>
              <span>{purchaseAmount === 'max' ? maxPurchase : purchaseAmount}</span>
            </div>
            <div className='owned__quantity'>
              <h6>Owned <span>{product.quantity}</span></h6>
              
            </div>
          </button>
        </div>
      </div>
      <div className='product__desc'>{product.desc}</div>
    </div>
  );
}

export default ProductHTML;
