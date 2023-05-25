import React from 'react';
import { Banner } from '../components/Banner/Banner';
import { Main } from '../components/Main/Main';
import data from './../data/data.json';

export const MainPage = () => {
  return (
    <div>
      <Banner />
      <Main cards={data} />
    </div>
  );
};
