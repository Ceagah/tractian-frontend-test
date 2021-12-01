import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Routes/routes';
import './styles/global.css';

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);
