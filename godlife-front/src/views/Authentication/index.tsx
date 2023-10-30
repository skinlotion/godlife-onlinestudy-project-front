// import React, { useRef, useState } from 'react'
import './style.css';
// import InputBox from '../../components/InputBox';
// import { loginInfoMock } from '../../mocks';

// //      component: 인증 페이지      //
// export default function Authentication() {
  
//   //      state: 화면 상태      //
//   const [view, setView] = useState< 'sign-in' | 'sign-up' >('sign-in');

//   //      component: sign in 탭 컴포넌트        //
//   const SignInTab = () => {

//     //      state: 비밀번호 입력 요소 참조 상태     //
//     const passwordRef = useRef<HTMLInputElement | null>(null);
//     //      state: 로그인 에러 상태     //
//     const [error, setError] = useState<boolean>(false);
//     // //      state: 로그인 에러 메세지 상태      //
//     // const [errorMessage, setErrorMessage] = useState<string>('');
//     //      state: 입력한 이메일 상태     //
//     const [email, setEmail] = useState<string>('');
//     // //      state: 이메일 에러 상태     //
//     // const [emailError, setEmailError] = useState<boolean>(false);
//     // //      state: 이메일 에러 메세지 상태      //
//     // const [emailErrorMessage, setEmailErrorMessage] = useState<string>('');

//     //    state: 이메일 존재 확인 상태      //
//     const [emailExistenceCheck, setEmailExistenceCheck] = useState<boolean>(false);

//     //      state: 이메일 패턴 에러 상태     //
//     const [emailPatternError, setEmailPatternError] = useState<boolean>(false);
//     //      state: 이메일 패턴 에러 메세지 상태      //
//     const [emailPatternErrorMessage, setEmailPatternErrorMessage] = useState<string>('');

//     //      state: 입력한 비밀번호 상태     //
//     const [password, setPassword] = useState<string>('');
//     //      state: 비밀번호 인풋 타입 상태      //
//     const [passwordType, setPasswordType] = useState<'text' | 'password'>('password');
//     //      state: 비밀번호 인풋 버튼 아이콘 상태     //
//     const [passwordIcon, setPasswordIcon] = useState<'eye-off-icon' | 'eye-on-icon'>('eye-off-icon');

//     //      event handler: 비밀번호 아이콘 클릭 이벤트 처리     //
//     const onPasswordIconClickHandler = () => {
//       if (passwordType === 'password'){
//         setPasswordIcon('eye-on-icon');
//         setPasswordType('text');
//       }
//       if (passwordType === 'text'){
//         setPasswordIcon('eye-off-icon');
//         setPasswordType('password');
//       }
//     }

//     //      event handler: 회원가입 링크 클릭 이벤트 처리     //
//     const onSignUpLinkClickHandler = () => {
//       setView('sign-up');
//     }

//     //      event handler: 로그인 버튼 클릭 이벤트 처리     //
//     const onSignInButtonClickHandler = () => {

//       setError(false);
//       setEmailPatternError(false);
//       setEmailPatternErrorMessage('');
//       setEmailExistenceCheck(false);

//       //      description: 이메일 패턴 확인     //
//       const emailPattern = /^[a-zA-Z0-9]*@([-.]?[a-zA-Z0-9])*\.[a-zA-Z]{2,4}$/
//       const checkedEmailPattern = !emailPattern.test(email);
//       if (checkedEmailPattern) {
//         setEmailPatternError(true);
//         setEmailPatternErrorMessage('이메일 주소가 올바르지 않습니다.');
//         return;
//       }

//       //      description: 이메일 여부 확인     //
//       const isEmailExistenceCheck = email === loginInfoMock.email;
//       if (!isEmailExistenceCheck) {
//         return;
//       }
//       setEmailExistenceCheck(true);

//       //      description: 패스워드 공백 확인     //
//       const isPasswordCheck = password.length === 0;
//       if (isPasswordCheck) {
//         return;
//       }

//       //      description: 이메일 및 비밀번호 일치 확인     //
//       const isSuccess = email === loginInfoMock.email && password === loginInfoMock.password;
//       if (!isSuccess) {
//         setError(true);
//         return;
//       }

//       alert('로그인 성공입니다.');

//     }

//     //      render: sign in 탭 컴포넌트 렌더링      //
//     return(
//       <div className='auth-box'>
//         <div className='auth-top-box'>
//           <div className='auth-top-logo-icon-box'>
//             <div className='logo-icon'></div>
//           </div>
//           <div className='auth-top-message'>{'로그인을 해주세요'}</div>
//         </div>

//         <div className='auth-middle-box'>
          
//           {!emailPatternError && !error && (
//             <div className='margin-box'></div>
//           )}

//           {emailPatternError && (
//           <div className='inputbox-error-message-box'>
//             <div className='login-error-icon-box'>
//                 <div className='login-error-icon'></div>
//             </div>
//             <div className='inputbox-error-message'>{emailPatternErrorMessage}</div>
//           </div>
//           )}

//           {error && (
//             <div className='inputbox-error-message-box'>
//               <div className='login-error-icon-box'>
//                   <div className='login-error-icon'></div>
//               </div>
//               <div className='inputbox-error-message'>{'잘못된 이메일 주소 또는 비밀번호입니다.\n'}<span className='login-description'>{'로그인'}</span>{'하는데 도움이 필요하세요?'}</div>
//             </div>
//           )}
          
//           <InputBox label='로그인' type='text' placeholder='이메일을 입력하세요' value={email} setValue={setEmail} icon='email-update-icon'/>
//           {emailExistenceCheck && (
//             <InputBox label='비밀번호' ref={passwordRef} type={passwordType} placeholder='비밀번호를 입력하세요' value={password} setValue={setPassword} icon={passwordIcon} onButtonClick={onPasswordIconClickHandler} />
//           )}
//           <div className='auth-button' onClick={onSignInButtonClickHandler}>{'로그인'}</div>
//           <div className='auth-middle-button-box'>
//             <div className='auth-middle-login-support'>{'로그인을 할 수 없나요?'}</div>
//             <div className='auth-middle-message-box-divide'></div>
//             <div className='auth-middle-create-account' onClick={onSignUpLinkClickHandler}>{'새로운 계정 만들기'}</div>
//           </div>
//         </div>

//         <div className='auth-bottom-box'>
//           <div className='auth-another-account-login-message'>{'다음계정을 통해 로그인'}</div>
//           <div className='auth-account-login-google'>
//             <div className='google-logo'></div>
//           </div>
//           <div className='auth-account-login-naver'>
//             <div className='naver-logo'></div>
//           </div>
//           <div className='auth-account-login-kakao'>
//             <div className='kakao-logo'></div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   //      component: sign up 탭 컴포넌트      //
//   const SignUpTab = () => {

//     //      state: 비밀번호 입력 요소 참조 상태     //
//     const passwordRef = useRef<HTMLInputElement | null>(null);
//     //      state: 로그인 에러 상태     //
//     const [error, setError] = useState<boolean>(false);
//     //      state: 페이지 번호 상태      //
//     const [page, setPage] = useState<'1-3-0' | '1-3-1' | '1-4-0'>('1-3-0');
//     //      state: 입력한 이메일 상태     //
//     const [email, setEmail] = useState<string>('');
//     // //    state: 이메일 존재 확인 상태      //
//     // const [emailExistenceCheck, setEmailExistenceCheck] = useState<boolean>(false);    
//     //      state: 입력한 비밀번호 상태     //
//     const [password, setPassword] = useState<string>('');
//     //      state: 비밀번호 인풋 타입 상태      //
//     const [passwordType, setPasswordType] = useState<'text' | 'password'>('password');
//     //      state: 비밀번호 인풋 버튼 아이콘 상태     //
//     const [passwordIcon, setPasswordIcon] = useState<'eye-off-icon' | 'eye-on-icon'>('eye-off-icon');

//     //      event handler: 로그인 링크 클릭 이벤트 처리     //
//     const onSignInLinkClickHandler = () => {
//       setView('sign-in');
//     }

//     //      event handler: clude 이용 약관 클릭 이벤트 처리      //
//     const onCloudExplanationClickHandler = () => {
//       // 새 탭 열기
//       const newTab = window.open('https://www.atlassian.com/legal/cloud-terms-of-service', '_blank');

//       // 새 탭이 정상적으로 열리면 이동
//       if (newTab) {
//         newTab.focus();
//       } else {
//         // 팝업 차단 등으로 인해 열리지 않을 경우 대체 동작을 수행
//         window.location.href = 'https://www.atlassian.com/legal/cloud-terms-of-service';
//       }
//     }

//     //      event handler: 개인정보 보호정책 클릭 이벤트 처리      //
//     const onProtectionPolicyClickHandler = () => {
//       // 새 탭 열기
//       const newTab = window.open('https://www.atlassian.com/legal/privacy-policy#what-this-policy-covers', '_blank');

//       // 새 탭이 정상적으로 열리면 이동
//       if (newTab) {
//         newTab.focus();
//       } else {
//         // 팝업 차단 등으로 인해 열리지 않을 경우 대체 동작을 수행
//         window.location.href = 'https://www.atlassian.com/legal/privacy-policy#what-this-policy-covers';
//       }
//     }

//     //      event handler: 비밀번호 아이콘 클릭 이벤트 처리     //
//     const onPasswordIconClickHandler = () => {
//       if (passwordType === 'password'){
//         setPasswordIcon('eye-on-icon');
//         setPasswordType('text');
//       }
//       if (passwordType === 'text'){
//         setPasswordIcon('eye-off-icon');
//         setPasswordType('password');
//       }
//     }

//     //      event handler: 가입 버튼 클릭 이벤트 처리     //
//     const onSignUpButtonClickHandler = () => {

//       //      description: 이메일 여부 확인     //
//       const isEmailExistenceCheck = email === loginInfoMock.email;
//       if (!isEmailExistenceCheck) {
//         alert('등록되지 않은 이메일');
//         return;
//       }
      
//       setPage('1-4-0');
//     }

//     //      event handler: 로그인 버튼 클릭 이벤트 처리     //
//     const onSignInButtonClickHandler = () => {

//       setError(false);

//       //      description: 패스워드 공백 확인     //
//       const isPasswordCheck = password.length === 0;
//       if (isPasswordCheck) {
//         return;
//       }

//       //      description: 이메일 및 비밀번호 일치 확인     //
//       const isSuccess = email === loginInfoMock.email && password === loginInfoMock.password;
//       if (!isSuccess) {
//         setError(true);
//         return;
//       }
      
//       alert('로그인 성공입니다.');
//     }

//     //      event handler: 회원가입 링크 클릭 이벤트 처리     //
//     const onSignUpLinkClickHandler = () => {
//       setEmail('');
//       setView('sign-up');
//       setPage('1-3-0');
//     }

//     //      render: sign up 탭 컴포넌트 렌더링      //
//     return(
//       <div className='auth-box'>
//         <div className='auth-top-box'>
//           <div className='auth-top-logo-icon-box'>
//             <div className='logo-icon'></div>
//           </div>
//           {page === '1-3-0' && (
//             <div className='auth-top-message'>{'계속하려면 새로운 계정을 만드세요'}</div>
//           )}
//           {page === '1-4-0' && (
//             <div className='auth-top-message'>{'계속하려면 로그인을 해주세요'}</div>
//           )}
//         </div>

//         {page === '1-3-0' && (
//           <div className='auth-middle-signup-box'>
//             <div className='margin-box'></div>
//             <InputBox label='로그인' type='text' placeholder='사용할 이메일을 입력하세요.' value={email} setValue={setEmail} icon='email-update-icon'/>
//             <div className='auth-button' onClick={onSignUpButtonClickHandler}>{'가입'}</div>
//             <div className='auth-termsofuse'>{'가입하면 Atlassian '}<span className='cloud-Explanation' onClick={onCloudExplanationClickHandler}>{'Cloud 이용 약관'}</span>{'에 동의하고\n'}<span className='protection-policy' onClick={onProtectionPolicyClickHandler} >{'개인정보 보호정책'}</span>{'을 인정한 것으로 간주됩니다.'}</div>
//           </div>
//         )}

//         {page === '1-4-0' && (
//           <div className='auth-middle-signup-text-box'>
//             <div className='auth-middle-registered-account-message-box'>
//               <div className='auth-middle-registered-account-message'>{'이 이메일에 연결된 계정을 이미 보유하고 있습니다.\n로그인 하거나 비밀번호를 잊은 경우 재설정 하세요.'}</div>
//             </div>

//             <InputBox label='로그인' type='text' placeholder='이메일을 입력하세요' value={email} setValue={setEmail} icon='email-update-icon'/>
//             <InputBox label='비밀번호' ref={passwordRef} type={passwordType} placeholder='비밀번호를 입력하세요' value={password} setValue={setPassword} icon={passwordIcon} onButtonClick={onPasswordIconClickHandler} />
//             <div className='auth-button' onClick={onSignInButtonClickHandler}>{'로그인'}</div>

//             <div className='auth-middle-button-box'>
//               <div className='auth-middle-login-support'>{'로그인을 할 수 없나요?'}</div>
//               <div className='auth-middle-message-box-divide'></div>
//               <div className='auth-middle-create-account' onClick={onSignUpLinkClickHandler}>{'새로운 계정 만들기'}</div>
//             </div>
//           </div>
//         )}

//         <div className='auth-bottom-signup-box'>
//           {page === '1-3-0' && (
//             <div className='auth-next-create-account-message'>{'또는 다음 계정을 사용하여 계정생성'}</div>
//           )}
//           {page === '1-4-0' && (
//             <div className='auth-next-create-account-text-message'>{'다음계정을 통해 로그인'}</div>
//           )}
//           <div className='auth-account-login-google'>
//             <div className='google-logo'></div>
//           </div>
//           <div className='auth-account-login-naver'>
//             <div className='naver-logo'></div>
//           </div>
//           <div className='auth-account-login-kakao'>
//             <div className='kakao-logo'></div>
//           </div>
//           {page === '1-3-0' && (
//             <div className='auth-account-exists-message' onClick={onSignInLinkClickHandler}>{'이미 계정이 있습니까?'}</div>
//           )}
//         </div>
//       </div>
//     );
//   }

//   //      render: 인증 페이지 렌더링      //
//   return (
//     <div id='auth-wrapper'>
//       <div className='background-image'>
//         {view === 'sign-in' && <SignInTab />}
//         {view === 'sign-up' && <SignUpTab />}
//       </div>
//     </div>
//   )
// }
