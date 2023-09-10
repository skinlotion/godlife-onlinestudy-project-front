import { Outlet, Route, Router, Routes, useLocation } from 'react-router-dom';
import React from 'react';
import './App.css';
import Authentication from './views/Authentication';

function App() {
  return (
    <div>
      <Authentication />
    </div>
  );
}

export default App;
