import React from 'react';
import ReactDOM from 'react-dom';
// import initFirebase from './api/firebase';
import { Provider } from 'react-redux';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';

import 'bulma/css/bulma.css';
import App from './containers/App/App';
import * as serviceWorker from './utils/serviceWorker';
import configureStore from './store/config';
import moment from 'moment';

import('moment/locale/' + window.navigator.language);
// initFirebase();
moment.locale();

ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
