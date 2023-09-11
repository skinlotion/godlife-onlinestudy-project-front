import { Outlet, Route, Router, Routes, useLocation } from 'react-router-dom';
import React from 'react';
import './App.css';
import Login from './views/Authentication/soo';
import './views/Authentication/soo/style.css';

function App() {
  return (
    <div>
      <Login />
    </div>
  );
}

export default App;
