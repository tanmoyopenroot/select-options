/**
 * Main container for injecting the store and global css
 * @module App
 */

import React from 'react';
import { injectGlobal } from 'styled-components';
import { Provider } from 'react-redux';

import configureStore from './store';
import FormContainer from './containers/form-container'

injectGlobal`
  html {
    height: 100%;
    width: 100%;
    background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  }

  body {
    font-family: "Roboto";
    margin: 0;
    padding: 0;
  }
`;

const store = configureStore();

const App = () => (
  <Provider
    store={store}
  >
    <FormContainer />  
  </Provider>
);
export default App;
