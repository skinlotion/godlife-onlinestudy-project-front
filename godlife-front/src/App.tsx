import { Outlet, Route, Router, Routes, useLocation } from 'react-router-dom';
import React from 'react';
import './App.css';
import Header from './layouts/Header';
import Container from './layouts/Container';
import { MAIN_PATH } from './constant';
import Main from './views/Main';
import Footer from './layouts/Footer';

function App() {

  //    state: 현재 페이지 url 상태   //
  const { pathname } = useLocation();


  return (
    <div>
      {<Header />}
      {<Main />}
      {<Footer />}
    </div>
  );
}

export default App;
