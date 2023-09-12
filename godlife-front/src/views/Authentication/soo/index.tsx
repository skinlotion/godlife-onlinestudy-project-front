import React from 'react'
import { useNavigate } from 'react-router-dom'
import { LOGIN_PATH } from 'constant';


//          component: 아이디 및 비밀번호 찾기 페이지         //
export default function FindLogin() {

  //          function: 네비게이트 함수          //
  const navigator = useNavigate();

  //          event handler: 로그인으로 돌아가기 클릭 이벤트 처리         //
  const onBackToLoginClickHandler = () => {
    navigator(LOGIN_PATH);
  };
  
  //          component: 이메일로 인증번호 전송 컴포넌트         //
  const SendEmailCode = () => {
    
    //          render: 이메일로 인증번호 전송 컴포넌트 렌더링          //
    return (
      <div id='find-id-login-wrapper'>
        <div className='login-box'>
          <div className='login-title'>{'갓생살기'}</div>
          <div className='login-sub-title'>{'로그인을 할 수 없습니까?'}</div>
          <div className='login-to-link-text'>{'다음으로 복구 링크 보내기'}</div>
          <input className='input-box' accept='text' placeholder='이메일을 입력하세요.'></input>
          <div className='login-to-link-send'>
            <div className='login-to-link-send-text'>{'복구 링크 보내기'}</div>
          </div>
          <div className='login-return-text' onClick={onBackToLoginClickHandler}>{'로그인으로 돌아가기'}</div>
        </div>
      </div>
    )
  }

  //          render: 아이디 및 비밀번호 찾기 페이지 렌더링         //
  return (
    <div>
      <SendEmailCode />
    </div>
  )
}
