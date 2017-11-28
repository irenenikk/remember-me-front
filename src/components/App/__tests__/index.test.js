import React from 'react';
import ReactDOM from 'react-dom';
import App from '..//index';
import { Provider } from 'react-redux';
import createStore from '../../../state/store';

it('renders without crashing', () => {
  const store = createStore();
  const div = document.createElement('div');
  ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, div);
});
