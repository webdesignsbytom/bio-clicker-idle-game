import React from 'react';

function BuildingHTML({ building, buyBuilding }) {
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
          <div className='product__owned'>
            <h6>
              Owned: <span>{building.quantity}</span>
            </h6>
          </div>
          <button onClick={() => buyBuilding(building)}>buy</button>
        </div>
      </div>
      <div className='product__desc'>{building.desc}</div>
    </div>
  );
}

export default BuildingHTML;
