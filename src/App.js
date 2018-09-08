import React from 'react';
import { injectGlobal } from 'styled-components';
import { Provider } from 'react-redux';

import configureStore from './store';
import FormContainer from './containers/form-container'

injectGlobal`
  body {
    font-family: "Roboto";
    background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
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
