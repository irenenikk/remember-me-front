import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import createStore from './state/store';

// This replaces the textColor value on the palette
// and then update the keys for each component that depends on it.
// More on Colors: http://www.material-ui.com/#/customization/col

const store = createStore();

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root'));
registerServiceWorker();
