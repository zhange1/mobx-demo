import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'mobx-react'
import Store from './store/index.js'
import * as mobx from 'mobx'

mobx.configure({enforceActions:'always'})


ReactDOM.render(
  <Provider stores={Store}>
    <App></App>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
