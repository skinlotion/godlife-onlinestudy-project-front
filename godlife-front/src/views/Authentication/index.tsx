import React, { useState } from 'react'
import './style.css';
import InputBox from '../../components/InputBox';

//      component: 인증 페이지      //
export default function Authentication() {
  
  //      state: 화면 상태      //
  const [view, setView] = useState< 'sign-in' | 'sign-up' >('sign-in');

  //      component: sign in 탭 컴포넌트        //
  const SignInTab = () => {
    
    //      state: 로그인 에러 상태     //
    const [error, setError] = useState<boolean>(false);
    //      state: 입력한 이메일 상태     //
    const [email, setEmail] = useState<string>('');

    //      event handler: 회원가입 링크 클릭 이벤트 처리     //
    const onSignUpLinkClickHandler = () => {
      setView('sign-up');
    }

    //      event handler: 로그인 버튼 클릭 이벤트 처리     //
    const onSignInButtonClickHandler = () => {
      
    }

    //      render: sign in 탭 컴포넌트 렌더링      //
    return(
      <div className='auth-box'>
        <div className='auth-top-box'>
          <div className='auth-top-logo-icon-box'>
            <div className='logo-icon'></div>
          </div>
          <div className='auth-top-message'>{'로그인을 해주세요'}</div>
          {/* <div className='auth-top-message'>{'계속하려면 로그인을 해주세요'}</div> */}
          {/* <div className='auth-middle-error-message-box'>
              <div className='login-error-icon-box'>
                <div className='login-error-icon'></div>
              </div>
              <div className='auth-middle-error-message'>{'잘못된 이메일 주소 또는 비밀번호입니다.\n'}<span className='login-description'>{'로그인'}</span>{'하는데 도움이 필요하세요?'}</div>
          </div> */}
          {/* <div className='auth-middle-registered-account-message-box'>
            <div className='auth-middle-registered-account-message'>{'이 이메일에 연결된 계정을 이미 보유하고 있습니다.\n로그인 하거나 비밀번호를 잊은 경우 재설정 하세요.'}</div>
          </div> */}
        </div>

        <div className='auth-middle-box'>
          <InputBox type='text' placeholder='이메일을 입력하세요' error={error} value={email} setValue={setEmail}/>
          {/* <InputBox /> */}
          <div className='auth-button'>{'로그인'}</div>
          <div className='auth-middle-button-box'>
            <div className='auth-middle-login-support'>{'로그인을 할 수 없나요?'}</div>
            <div className='auth-middle-message-box-divide'></div>
            <div className='auth-middle-create-account' onClick={onSignUpLinkClickHandler}>{'새로운 계정 만들기'}</div>
          </div>
        </div>
        <div className='auth-bottom-box'>
          <div className='auth-another-account-login-message'>{'다음계정을 통해 로그인'}</div>
          <div className='auth-account-login-google'>
            <div className='google-logo'></div>
          </div>
          <div className='auth-account-login-naver'>
            <div className='naver-logo'></div>
          </div>
          <div className='auth-account-login-kakao'>
            <div className='kakao-logo'></div>
          </div>
        </div>
      </div>
    );
  };

  //      component: sign up 탭 컴포넌트      //
  const SignUpTab = () => {

    //      render: sign up 탭 컴포넌트 렌더링      //
    return(
      <div className='auth-box'>
        <div className='auth-top-box'>
          <div className='auth-top-title-box'>
            <div className='auth-top-title'>{'갓생살기'}</div>
          </div>
          <div className='auth-top-message'>{'계속하려면 새로운 계정을 만드세요'}</div>
        </div>
        <div className='auth-middle-box'>
          {/* <InputBox /> */}
          <div className='auth-button'>{'가입'}</div>
          <div className='auth-termsofuse'>{`가입하면 Atlassian Cloud 이용 약관에 동의하고\n개인정보 보호정책을 인정한 것으로 간주됩니다.`}</div>
        </div>
        <div className='auth-bottom-box'>
          <div className='auth-next-create-account-message'>{'또는 다음 계정을 사용하여 계정생성'}</div>
          <div className='auth-next-create-account-box'>
            <div className='auth-create-account-google'></div>
            <div className='auth-create-account-naver'></div>
            <div className='auth-create-account-daum'></div>
          </div>
          <div className='auth-account-exists-message'>{'이미 계정이 있습니까?'}</div>
        </div>
      </div>
    );
  }

  //      render: 인증 페이지 렌더링      //
  return (
    <div id='auth-wrapper'>
      <div className='background-image'>
        {view === 'sign-in' && <SignInTab />}
        {view === 'sign-up' && <SignUpTab />}
      </div>
    </div>
  )
}
