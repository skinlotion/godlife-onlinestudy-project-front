import React, { useState, KeyboardEvent, useRef, useEffect } from 'react'
import InputBox from '../../components/InputBox';
import './style.css';
export default function Authentication() {
    
    //          state : 
    const [registeremail, SetRegisteremail] = useState<boolean> (false);
    //          state: 비밀번호 입력 요소 참조 상태          //
    const passwordRef = useRef<HTMLInputElement | null>(null);
    //          state :
    const [passwordErrorState, SetPasswordErrorState] = useState<number> (1);
    //          state: 화면 상태          //
     const [view, setView] = useState<
        'sign-in-card' | 'sing-up-email-card' | 'search-password-card' 
        | 'search-password-email-autentication-card' 
        >('sign-in-card');

    const [resetPasswordLevel, setResetPasswordLevel] = useState<number>(1);
    const [singupLevel, setSignUpInLevel] = useState<number>(1);
    const [singUpInformationLevel, setSingUpInformationLevel] = useState<number> (1)

    //          event handler: 이메일 인풋 key down 이벤트 처리          //
    const onEmailKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key !== 'Enter') return;
        if (!passwordRef.current) return;
        passwordRef.current.focus();
    }
    //          event handler: 비밀번호 인풋 key down 이벤트 처리          //
    const onPasswordKeyDownHanlder = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key !== 'Enter') return;
        onSignInButtonClickHandler();
    }
    //          event handler: 비밀번호 인풋 버튼 클릭 이벤트 처리          //
    const onPasswordIconClickHandler = () => {
    }
    //          event handler: 로그인 버튼 클릭 이벤트 처리          //
    const onSignInButtonClickHandler = () => {
    }


    //          component : sign in main card         //
    const SignInCard = () => {
        
        //          state : 로그인 단계 상태         //
        const [signInLevel, setSignInLevel] = useState<1 | 2>(1);
        //          state: 비밀번호 입력 요소 참조 상태          //
        const passwordRef = useRef<HTMLInputElement | null>(null);
        //          state: 입력한 이메일 상태          //
        const [email, setEmail] = useState<string>('');
        //          state: 입력한 비밀번호 상태          //
        const [password, setPassword] = useState<string>('');
        //          state: 비밀번호 인풋 타입 상태          //
        const [passwordType, setPasswordType] = useState<'text' | 'password'>('password');
        //          state: 비밀번호 인풋 버튼 아이콘 상태          //
        const [passwordIcon, setPasswordIcon] = useState<'eye-off-icon' | 'eye-on-icon'>('eye-off-icon');
        //          state: 이메일 에러 상태          //
        const [signInEmailerror, setSignInEmailError] = useState<boolean>(false);
        //          state: 비번 에러 상태          //
        const [signPasswordInerror, setSignInPasswordError] = useState<boolean>(false);
        
        //          event handler: 이메일 인풋 key down 이벤트 처리          //
        const onEmailKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key !== 'Enter') return;
        setSignInLevel(2);
        }
        //          event handler: 비밀번호 인풋 key down 이벤트 처리          //
        const onPasswordKeyDownHanlder = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key !== 'Enter') return;
        onSignInButtonClickHandler();
        }
        //          event handler: 비밀번호 인풋 버튼 클릭 이벤트 처리          //
        const onPasswordIconClickHandler = () => {
            if (passwordType === 'text') {
            setPasswordType('password');
            setPasswordIcon('eye-off-icon');
            }
            if (passwordType === 'password') {
            setPasswordType('text');
            setPasswordIcon('eye-on-icon');
            }
        }
        //          event handler: '새로운 계정 만들기' 버튼 클릭 이벤트 처리          //
        const onSignUpLinkClickHandler = () => {
            setView('sing-up-email-card');
        }

        //          event handler: '로그인을 할 수 없나요?' 링크 버튼 클릭 이벤트 처리          //
        const onSearchPasswordCardLinkClickHandler = () => {
            setView('search-password-card');
        }

        useEffect(() => {
        }, [signInLevel])

        //        render : 로그인 페이지 랜더링        //
        return (
            <div className='sign-in-card'>
                <div className='sign-in-top-box'>
                    <div className='auth-top-box'>
                        <div className='godlife-logo-icon-box'>
                            <div className='godlife-logo-icon'></div>
                        </div>
                        <div className='auth-page-text-box'>로그인을 해주세요</div>
                    </div>
                    {signPasswordInerror &&(
                        <div className='auth-error-message-container'>
                            <div className='auth-error-message-box'>
                                <div className='error-logo-image'></div>
                                <div className='error-message-text'>{'잘못된 이메일 주소 또는 비밀번호 입니다.\n로그인 하는데 도움이 필요하세요?'}</div>
                            </div>
                        </div>    
                    )}
                    <div className='sign-in-middle-box'>
                        <div className='email-input-box'> 
                        <InputBox label={''} type='text' placeholder='이메일 주소를 입력해주세요.' error={signInEmailerror} value={email} setValue={setEmail} onKeyDown={onEmailKeyDownHandler} />
                        </div>
                        {signInLevel===2 && 
                        <>
                            <div className='password-input-box'>
                            <InputBox ref={passwordRef} label={''} type={passwordType} placeholder='비밀번호를 입력해주세요.' error={signPasswordInerror} value={password} setValue={setPassword} icon={passwordIcon} onKeyDown={onPasswordKeyDownHanlder} onButtonClick={onPasswordIconClickHandler} />
                            </div>
                        </>
                        }
                        <div className='sign-in-button-box' onClick={onSignInButtonClickHandler}>{'로그인'}</div>
                        <div className='authentication-page-chage-button'>
                            <div className='search-password-navigator-button' onClick={onSearchPasswordCardLinkClickHandler}>{'로그인을 할 수 없나요?'}</div>
                            <div className='authentication-page-chage-button-divider'>{'\|'}</div>
                            <div className='sing-up-navigator-button' onClick={onSignUpLinkClickHandler} >{'새로운 계정 만들기'}</div>
                        </div>
                    </div>
                </div>
                <div className='Oauth-box'>
                    <div className='Oauth-box-title'>다음계정을 통해 로그인</div>
                    <div className='google-sign-in-box'>
                        <div className='google-logo-image'></div>
                        <div className='google-logo-name'>Google</div>
                    </div>
                    <div className='kakao-sign-in-box'>
                        <div className='kakao-logo-image'></div>
                        <div className='kakao-logo-name'>Kakao</div>
                    </div>
                    <div className='naver-sign-in-box'>
                        <div className='naver-logo-image'></div>
                        <div className='naver-logo-name'>Naver</div>
                    </div>
                </div>
            </div>
        )
    }
    //          component : search password card         //
    const SearchPasswordCard = () => {
        
        //          event handler: '복구 링크 보내기' 버튼 클릭 이벤트 처리          //
        const sendMessageButtonClickHandler = () => {
            setView('search-password-email-autentication-card');
        }

        //          event handler: '로그인 돌아기기' 버튼 클릭 이벤트 처리          //
        const onSignUpLinkClickHandler = () => {
            setView('sign-in-card');
        }
        
        //          state: 입력한 이메일 상태          //
        const [email, setEmail] = useState<string>('');

        //        render : 비밀번호 찾기 페이지 랜더링        //
        return (
            <div className='search-password-card'>
                <div className='search-password-top-box'>
                    <div className='auth-top-box'>
                        <div className='godlife-logo-icon-box'>
                            <div className='godlife-logo-icon'></div>
                        </div>
                        <div className='auth-page-text-box'>{'로그인을 할 수 없습니까?'}</div>
                    </div>
                    <div className='search-password-middle-box'>
                        <div className='search-password-message'>{'다음으로 복구 링크 보내기'}</div>
                        <div className='search-password-inputbox'>
                            <InputBox label={''} type='text' placeholder='이메일 주소를 입력해주세요.' error={''} value={email} setValue={setEmail} onKeyDown={onEmailKeyDownHandler} />
                        </div>
                    </div>
                </div>
                <div className='search-password-bottom-box'>
                    <div className='search-password-send-email-button' onClick={sendMessageButtonClickHandler}>복구 링크 보내기</div>
                    <div className='sign-in-navigator-button' onClick={onSignUpLinkClickHandler}>로그인으로 돌아가기</div>
                </div>
            </div>
        )
    }
    //          component : search password 이메일 인증 card         //
    const SearchPasswordEmailAutenticationCard = () => {
        //        render : 이메일 인증 페이지 랜더링        //
        return (
            <div className='search-password-email-authentication-card'>
                <div className='search-password-email-authentication-top'>
                    <div className='auth-top-box'>
                        <div className='godlife-logo-icon-box'>
                            <div className='godlife-logo-icon'></div>
                        </div>
                        <div className='auth-page-text-box'>{'받은 메일함을 확인하여 로그인 하세요.'}</div>
                    </div>
                    <div className='send-icon-box'>
                        <div className='send-icon'></div>
                    </div>
                    <div className='search-password-email-authentication-middle-box'>
                        <div className='send-message-notice'>{'설정을 완료하고 로그인을 하려면 \n다음주소로 보낸 이메일의 확인 링크를 클릭하세요'}</div>
                        <div className='send-message-receiver-address'>{'email@email.com'}</div>
                    </div>
                </div>
                <div className='search-password-email-authentication-bottom-box'>
                    <div className='search-password-resend-email-text-button'>{'확인 이메일 다시 받기'}</div>
                </div>
            </div>
        )
    }
    const ResetPasswordCard = () => {
        //        render : 비밀번호 재설정 페이지 랜더링        //
        return (
            <div className='reset-password-card'>
                <div className='auth-top-box'>
                    <div className='logo-icon-box'></div>
                    <div className='auth-page-text-box'></div>
                </div>
                <div></div>
                //todo  -케이스 5개로 나눠야함 (일반,성공,실패1, 실패2, 실패3)//
                <div className='reset-password-middle-box'>
                    <div className='password-input-error-message-box'></div>
                    <div className='password-input-box'></div>
                    <div className='password-security-gage-box'></div>
                    <div className='error-message-text-box'></div>
                </div>
                <div className='reset-password-bottom-box'>
                    <div className='navigator-button-box'></div>
                </div>
            </div>
        )
    }
    const SingUpEmailCard = () => {
        //        render : 새로운 계정 생성 페이지 랜더링        //
        return (
            <div className='sign-up-email-card'>
                <div className='auth-top-box'>
                    <div className='logo-icon-box'></div>
                    <div className='auth-page-text'></div>
                </div>
                //todo  -케이스 2개로 나눠야함//
                <div className='sign-up-email-middle-box'></div>
                <div className='sign-up-email-bottom-box'>
                    <div className='text-button-box'></div>
                    <div className='oauth-box'>
                        <div className='google-sign-in'>
                            <div className='logo-image'></div>
                            <div className='logo-name'></div>
                        </div>
                        <div className='kakao-sign-in'>
                            <div className='logo-image'></div>
                            <div className='logo-name'></div>
                        </div>
                        <div className='naver-sign-in'>
                            <div className='logo-image'></div>
                            <div className='logo-name'></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    const SingUpEmailAutenticationCard = () => {
        //        render : 새로운 계정 생성_이메일 확인 페이지 랜더링        //
        return (
            <div className='sign-up-email-Autentification-card'>
                <div className='auth-top-box'>
                    <div className='logo-icon-box'></div>
                    <div className='auth-page-text'></div>
                </div>
                <div className='sign-up-email-Autentification-card-middle-box'></div>
                //todo 연속 인풋박스하는법 물어봐야함
                <div className='sign-up-email-Autentification-card-middle-input-box'></div>
                <div className='sign-up-email-Autentification-card-bottom-box'>
                    <div className='button-box'></div>
                    <div className='text-button-box'></div>
                </div>
            </div>
        )
    }
    const SingUpInformationCard = () => {
        //        render : 새로운 계정 생성_정보 입력 페이지 랜더링        //
        return (
            <div className='sing-up-information-card'>
                <div className='auth-top-box'>
                    <div className='logo-icon-box'></div>
                    <div className='auth-page-text'></div>
                </div>
                <div className='sing-up-information-card-middle-box'>
                    <div className='sing-up-email-inputbox'>
                        <div className='sing-up-email-inputbox-title'></div>
                        <input/>
                    </div>
                    <div className='sing-up-nickname-inputbox'>
                        <div className='sing-up-nickname-inputbox-title'></div>
                        <input/>
                        <div className='sing-up-nickname-error-message'></div>
                    </div>
                    <div className='sing-up-password-inputbox'>
                        <div className='sing-up-password-inputbox-title'></div>
                        <input/>
                        <div className='password-security-gage-box'></div>
                        <div className='password-error-message'></div>
                    </div>
                    //todo 케이스 나눠야함 - 입력,미입력 상태
                    <div className='sing-up-category-inputbox-not-select'>
                        <div className='category-combo-box-button'></div>
                        <div className='category-error-message'></div>
                    </div>
                    <div className='sing-up-category-inputbox-select'>
                        <div className='category-combo-box-button'></div>
                        <div className='category-error-message'></div>
                    </div>
                </div>
                <div className='sing-up-information-card-bottom-box'>
                    <div className='button-box'></div>
                </div>
            </div>
        )
    }
    //        render : 계정인증 메인 랜더링        //
    return (
        <div id='auth-wrapper'>
            <div className='auth-container'>
                {view === 'sign-in-card' && <SignInCard/>}
                {view === 'search-password-card' && <SearchPasswordCard/>}
                {view === 'sing-up-email-card' && <SingUpEmailCard/>}
                {view === 'search-password-email-autentication-card' && <SearchPasswordEmailAutenticationCard/>}
            </div>
        </div>
    );
    

}