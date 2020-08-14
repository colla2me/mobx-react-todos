import React from 'react';
import HomeStore from '../home';
import AboutStore from '../about';

export const storeContext = React.createContext({
  homeStore: new HomeStore(),
  aboutStore: new AboutStore()
});