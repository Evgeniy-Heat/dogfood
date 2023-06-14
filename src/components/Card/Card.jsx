import React, { useContext } from 'react';

import { ReactComponent as Like } from './../../images/ic-favorites-fill.svg';
import { Link } from 'react-router-dom';
import './card.css';
import { Ctx } from '../../context/Ctx';

export const Card = ({ card }) => {
  const { setBasket } = useContext(Ctx);
    
  const buy = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setBasket((prev) => {
      const test = prev.filter((el) => el.id === e._id);
      if (test.length) {
        return prev.map((el) => {
          if (el.id === e._id) {
            el.cnt++;
          }
          return el;
        });
      } else {
        return [...prev, { id: e._id, cnt: 1 }];
      }
    });
  };

  
  return (
    <div className='card'>
      <div className='card__sticky card__sticky_type_top-left'>
        {!!card.discount && (
          <span className='card__discount'>-{card.discount}%</span>
        )}
      </div>
      <div className='card__sticky card__sticky_type_top-right'>
        <Like />
      </div>
      <Link to={`/product/${card._id}`} className='card__link'>
        <img
          src={card.pictures ?? card.image}
          alt='food'
          className='card__image'
        />
        <div className='card__desc'>
          {!!card.discount && <span className='card__old-price'>{card.price}₽</span>}
          <span className='card__wight'>{card.wight}</span>
          <span className='card__wight'>в наличии: {card.stock} шт</span>
        </div>
        <p className='card__name'>{card.name}</p>
      </Link>
      <button className='card__card btn btn_type_primary' onClick={buy}>
        В Корзину
      </button>
    </div>
  );
};
