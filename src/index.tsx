import React from 'react';
import { render } from 'react-dom';
import { App } from './app';
import * as serviceWorker from './serviceWorker';
import './app/index.css';

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
