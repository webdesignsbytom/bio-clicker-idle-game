import React from 'react';

function ItemHTML({ item, buyItem, purchaseAmount, maxPurchase }) {
  return (
    <div className='product'>
      <div className='inner__product'>
        <div className='product__image'>
          <div className='image__icon'>{item.image}</div>
        </div>

        <div className='product__data'>
          <div className='product__name'>
            <h6>Name: </h6>
            <span>{item.name}</span>
          </div>

          <div className='product__cost'>
            <h6>Cost: </h6>
            <span>£ {Math.trunc(item.cost)}</span>
          </div>

          <div className='product__type'>
            <h6>Type: </h6>
            <span>{item.typetitle}</span>
          </div>

          <div className='product__effect'>
            <h6>Effect: </h6>
            <span>+ {item.effect}</span>
          </div>
        </div>

        <div className='purchase__product'>
          <button className='btn' onClick={() => buyItem(item)}>
            <div className='buy__amount'>
              <h6>Buy</h6>
              <span>{purchaseAmount === 'max' ? maxPurchase : purchaseAmount}</span>
            </div>
            <div className='owned__quantity'>
              <h6>Owned</h6>
              <span>{item.quantity}</span>
            </div>
          </button>
        </div>
      </div>
      <div className='product__desc'>{item.desc}</div>
    </div>
  );
}

export default ItemHTML;
