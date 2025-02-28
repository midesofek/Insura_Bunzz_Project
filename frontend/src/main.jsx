import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import InsuraApp from './InsuraApp';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/InsuraApp" element={<InsuraApp />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

  // ReactDOM.render(
  //   <React.StrictMode>
  //   <BrowserRouter>
  //     <App />
  //   </BrowserRouter>
  //   </React.StrictMode>,
  //   document.getElementById('root')
  // );