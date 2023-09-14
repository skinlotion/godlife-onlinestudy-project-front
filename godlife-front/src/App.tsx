import { BrowserRouter, Outlet, Route, Router, Routes, useLocation, useNavigate } from 'react-router-dom';
import React from 'react';
import './App.css';
import FindLogin from './views/Authentication/soo';
import './views/Authentication/soo/style.css';
import { LOGIN_FIND_PATH } from './constant';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={LOGIN_FIND_PATH} element={<FindLogin />} />
        <Route path='*' element={<h1>404 Not Found</h1>} />saddsadsadsadsadsa
      </Routes>
    </BrowserRouter>
  );
}

export default App;
