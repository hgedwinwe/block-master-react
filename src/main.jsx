import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { BlockMasterApp } from './BlockMasterApp';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    <HashRouter>
      <BlockMasterApp />
    </HashRouter>
    {/* </BrowserRouter> */}
  </React.StrictMode>
);
