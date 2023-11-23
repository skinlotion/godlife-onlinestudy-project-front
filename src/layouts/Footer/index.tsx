import React from 'react'
import './style.css'

export default function Footer() {

  
  //          event handler: 이용약관 아이콘 버튼 클릭 이벤트 처리         //
  const onUserAgreementClickHandler = () => {
    window.location.href = 'https://www.instagram.com';
  }
  //          event handler: 개인정보처리방침 버튼 클릭 이벤트 처리         //
  const onPersonalInfomationClickHandler = () => {
    window.location.href = 'https://www.instagram.com';
  }
  //          event handler: 노션 아이콘 버튼 클릭 이벤트 처리         //
  const onNotionIconClickHandler = () => {
    window.location.href = 'https://www.instagram.com';
  }
  //          event handler: 카카오 아이콘 버튼 클릭 이벤트 처리         //
  const onKaKaoIconClickHandler = () => {
    window.open('https://blog.naver.com');
  }
  //          event handler: 네이버 아이콘 버튼 클릭 이벤트 처리         //
  const onNaverBlogIconClickHandler = () => {
    window.open('https://blog.naver.com');
  }

  //        render: 푸터 컴포넌트 렌더링        //
  return (
    <div id='footer'>
      <div className='footer-container'>
        <div className='footer-left-box'>
          <div className='footer-provision' onClick={onUserAgreementClickHandler}>{'이용약관'}</div>
          <div className='footer-privacy-policy' onClick={onPersonalInfomationClickHandler}>{'개인정보처리방침'}</div>
          <div className='footer-copyright'>{'Copyright © 2023 gOdLiFe'}</div>
        </div>

        <div className='footer-right-box'>
          <div className='footer-button'>
            <div className='notion-logo-icon' onClick={onNotionIconClickHandler}></div>
          </div>
          <div className='footer-button'>
            <div className='kakao-logo-icon' onClick={onKaKaoIconClickHandler}></div>
          </div>
          <div className='footer-button'>
            <div className='naver-logo-icon' onClick={onNaverBlogIconClickHandler}></div>
          </div>
        </div>
      </div>
    </div>

  )
}
