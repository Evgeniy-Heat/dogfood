import React from 'react';

import { ReactComponent as Like } from './../../images/ic-favorites-fill.svg';

import "./card.css"

export const Card = ({
  name,
  price,
  picture,
  image,
  gender,
  discount,
  ...args
}) => {

  return (
    <div className='card'>
      <div className='card__sticky card__sticky_type_top-left'>
        {!!discount && <span className='card__discount'>-{discount}%</span>}
      </div>
      <div className='card__sticky card__sticky_type_top-right'>
        <Like />
      </div>
      <a href='/' className='card__link'>
        <img src={picture ?? image} alt='food' className='card__image' />
        <div className='card__desc'>
          <span className='card__price'>{price ?? gender}</span>
          <span className='card__weight'>100гр</span>
        </div>
        <p className='card__name'>{name}</p>
      </a>
      <span className='card__card btn btn_type_primary'>В Корзину</span>
    </div>
  );
};
