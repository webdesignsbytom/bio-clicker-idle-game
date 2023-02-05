import React from 'react';

function ItemHTML({ item, buyItem, purchaseAmount }) {
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

          <div className='product__quantity'>
            <h6>Owned: </h6>
            <span>{item.quantity}</span>
          </div>

          <div className='product__income'>
            <h6>Income: </h6>
            <span>{item.income}</span>
          </div>
        </div>

        <div className='purchase__product'>
          {/* <div className='product__owned'>
            <h6>
              Owned: <span>{item.quantity}</span>
            </h6>
          </div> */}
          <button className='buy__btn' onClick={() => buyItem(item)}>buy {purchaseAmount}</button>
        </div>
      </div>
      <div className='product__desc'>{item.desc}</div>
    </div>
  );
}

export default ItemHTML;
