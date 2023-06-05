import React, { useEffect, useState } from 'react';
import { Banner } from '../components/Banner/Banner';
import { Main } from '../components/Main/Main';
// import { data } from './../data/data.js';
import { api } from './../utils/Api';

export const MainPage = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    api.getProducts().then((data) => {
      const filteredData = data.products.slice(0, 16);
      setCards(filteredData);
    });
  }, []);

  return (
    <div>
      <Banner />
      <Main cards={cards} />
    </div>
  );
};
