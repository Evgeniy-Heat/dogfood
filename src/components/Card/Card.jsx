import React from 'react';

import { ReactComponent as Like } from './../../images/ic-favorites-fill.svg';
import {Link} from "react-router-dom"; 
import "./card.css"

export const Card = ({card}) => {
  return (
    <div className='card'>
      <div className='card__sticky card__sticky_type_top-left'>
        {!!card.discount && <span className='card__discount'>-{card.discount}%</span>}
      </div>
      <div className='card__sticky card__sticky_type_top-right'>
        <Like />
      </div>
      <Link to={`/product/${card._id}`} className='card__link'>       
             <img src={card.pictures ?? card.image} alt='food' className='card__image' />
        <div className='card__desc'>
          <span className='card__price'>{card.price ?? card.gender}</span>
          <span className='card__weight'>100гр</span>
        </div>
        <p className='card__name'>{card.name}</p>
      </Link>
      <span className='card__card btn btn_type_primary'>В Корзину</span>
    </div>
  );
};
