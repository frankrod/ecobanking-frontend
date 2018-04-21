import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { PersistGate } from 'redux-persist/integration/react';
import store, { history, persistor } from './store';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </PersistGate>
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();
