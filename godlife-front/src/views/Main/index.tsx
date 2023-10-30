import React from 'react'
import './style.css';

//      component: 인증 페이지      //
export default function Main() {

  //    component: 메인 상단 컴포넌트   //
  const MainTop = () => {
    
    //    render: 메인 상단 컴포넌트 렌더링   //
    return (
      <div id='main-top-wrapper'>
        <div className='main-top-container'>

          <div className='main-top-up-box'>
            <div className='main-top-up-box-studyroom-title'>{'내가 참여한 스터디방 정보'}</div>
            <div className='main-top-up-box-studyroom-tap'></div>
          </div>

          <div className='main-top-down-box'>
            <div className='main-top-down-calendar-box'>
              <div className='main-top-down-box-calendar-title'>{'내 캘린더'}</div>
              <div className='main-top-down-box-calendar'></div>
            </div>
            <div className='main-top-down-todolist-box'>
              <div className='main-top-down-box-todolist-title'>{'MY To Do List'}</div>
              <div className='main-top-down-box-todolist'></div>
            </div>
          </div>
          
        </div>
      </div>
    );
  }

  //    component: 메인 중단 컴포넌트   //
  const MainMiddle = () => {
    
    return (
      <></>
    )
  }

  //    component: 메인 하단 컴포넌트   //
  const MainBottom = () => {
    return (
      <></>
    )
  }

  //    render: 메인 페이지 렌더링    //
  return (
    <>
      <MainTop />
      <MainMiddle />
      <MainBottom />
    </>
  )
}
