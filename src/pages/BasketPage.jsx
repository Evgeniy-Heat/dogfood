import React, { useContext, useState, useEffect } from 'react';
import { Ctx } from './../context/Ctx';
import { Basket } from '../components/Basket/Basket';
import { BasketFull } from '../components/BasketFull/BasketFull';

export const BasketPage = () => {
  const [gds, setGds] = useState([]);
  const { basket, goods } = useContext(Ctx);
	console.log(goods);
	console.log("basket: " + basket);
	
  useEffect(() => {
    const arr = [];
    if (goods.length) {
      basket.forEach((el) => {
        arr.push(goods.filter((g) => g._id === el.id)[0]);
      });
    }
    setGds(arr);
  }, [basket, goods]);

  return (
    <>{goods?.length ? <BasketFull gds={gds} basket={basket} /> : <Basket />}</>
  );
};
