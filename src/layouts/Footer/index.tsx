import React from 'react'
import './style.css'

export default function Footer() {

  //        render: 푸터 컴포넌트 렌더링        //
  return (
    <div id='footer'>
      <div className='footer-container'>
        <div className='footer-left-box'>
          <div className='footer-provision'>{'이용약관'}</div>
          <div className='footer-privacy-policy'>{'개인정보처리방침'}</div>
          <div className='footer-copyright'>{'Copyright © 2023 gOdLiFe'}</div>
        </div>

        <div className='footer-right-box'>
          <div className='footer-button'>
            <div className='notion-logo-icon'></div>
          </div>
          <div className='footer-button'>
            <div className='kakao-logo-icon'></div>
          </div>
          <div className='footer-button'>
            <div className='naver-logo-icon'></div>
          </div>
        </div>
      </div>
    </div>
  )
}
