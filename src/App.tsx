import { Outlet, Route, Router, Routes, useLocation } from 'react-router-dom';
import React, { useRef, useState } from 'react';
import './App.css';
import Header from './layouts/Header';
import Main from './views/Main';
import Footer from './layouts/Footer';

function App() {

  //        state: 현재 페이지 url 상태       //
  const { pathname } = useLocation();

  //        description: 검색 버튼 Ref        //
  const searchDivRef = useRef<HTMLDivElement | null>(null);

  const onSearchMoveClickHandler = () => {
    if (!searchDivRef.current) return;
    searchDivRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div>      
      <Header onSearchMoveClickHandler={onSearchMoveClickHandler} />
      <Main ref={searchDivRef} />
      <Footer />
    </div>
  );
}

export default App;
