import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './app';
import reduxStore from './utils/configureStore';

ReactDOM.render(
  <Provider store={reduxStore}>
    <App />
  </Provider>, document.getElementById('root'),
);
