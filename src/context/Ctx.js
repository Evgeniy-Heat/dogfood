import React from 'react';

export const Ctx = React.createContext({
  user: {},
  token: '',
  api: {},
  setUser: () => {},
  setToken: () => {},
  setApi: () => {},
  modalActive: false,
  setModalActive: () => {},
  products: [],
  goods: [],
  setGoods: () => {},
  visibleGoods: [],
  setVisibleGoods: () => {},
  favorites: [],
  setFavorites: () => {},
});
