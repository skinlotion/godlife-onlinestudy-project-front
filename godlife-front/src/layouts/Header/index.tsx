import React from 'react'
import './style.css';
import { useLocation } from 'react-router-dom';

export default function Header() {

  //        state: path name 상태       //
  const { pathname } = useLocation();

  //        render: 헤더 컴포넌트 렌더링        //
  return (
    <div id='header'>
      <div className='header-container' >
        <div className='header-left-box'>
          <div className='header-logo-icon-box'>
            <div className='logo-icon'></div>
          </div>
          <div className='header-logo-text'>{'갓생살기'}</div>
        </div>

        <div className='header-right-box'>
          <div className='study-search-button'>{'스터디 검색'}</div>
          <div className='study-create-button'>{'스터디 생성'}</div>
          <div className='study-mypage-button'>{'내 정보 관리'}</div>
        </div>
      </div>
    </div>
  )
}
