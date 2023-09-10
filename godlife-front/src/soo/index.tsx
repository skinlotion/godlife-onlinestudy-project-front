import React from 'react'

export default function Login() {
  return (
    <div id='fail-login'>
      <div className='login-box'>
        <div className='login-title'>갓생살기</div>
        <div className='login-sub-title'>로그인을 할 수 없습니까?</div>
        <div className='login-to-link-text'>다음으로 복구 링크 보내기</div>
        <input className='input-box' placeholder='이메일을 입력하세요.'></input>
        <div className='login-to-link-send'>
          <div className='login-to-link-send-text'>복구 링크 보내기</div>
        </div>
        <div className='login-return-text'>로그인으로 돌아가기</div>
      </div>
      <div className='back-image-people'></div>
    </div>
  )
}
