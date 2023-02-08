import React from 'react';

function BuildingHTML({ building, buyBuilding, purchaseAmount }) {
  return (
    <div className='product'>
      <div className='inner__product'>
        <div className='product__image'>
          <div className='image__icon'>{building.image}</div>
        </div>

        <div className='product__data'>
          <div className='product__name'>
            <h6>Name: </h6>
            <span>{building.name}</span>
          </div>

          <div className='product__cost'>
            <h6>Cost: </h6>
            <span>£ {Math.trunc(building.cost)}</span>
          </div>

          <div className='product__type'>
            <h6>Type: </h6>
            <span>{building.typetitle}</span>
          </div>

          <div className='product__effect'>
            <h6>Effect: </h6>
            <span>+ {building.effect}</span>
          </div>
        </div>

        <div className='purchase__product'>
          <button className='btn' onClick={() => buyBuilding(building)}>
            <div className='buy__amount'>
              <h6>Buy</h6>
              <span>{purchaseAmount}</span>
            </div>
            <div className='owned__quantity'>
              <h6>Owned</h6>
              <span>{building.quantity}</span>
            </div>
          </button>
        </div>
      </div>
      <div className='product__desc'>{building.desc}</div>
    </div>
  );
}

export default BuildingHTML;
