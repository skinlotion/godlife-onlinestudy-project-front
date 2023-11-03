import React, { useState, KeyboardEvent, useRef, useEffect } from 'react'
import InputBox from '../../components/InputBox';
import './style.css';
import DropDownFirstCategory from '../../components/Dropdown1Category';
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
        | 'search-password-email-autentication-card' | 'sing-up-email-autentication-card' | 'sing-up-information-card'
        | 'reset-password-card'
        >('reset-password-card');
    //          state: 입력한 이메일 상태          //
    const [email, setEmail] = useState<string>('');

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
        const [signInLevel, setSignInLevel] = useState<number>(1);
        //          state: 비밀번호 입력 요소 참조 상태          //
        const passwordRef = useRef<HTMLInputElement | null>(null);
        
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
                    <div className='error-message-container'>
                        <div className='error-logo-image'></div>
                        <div className='error-message-box'>
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
                        {/*sign-up-email-card에서 1-4-0 계정생성에서 이메일 있을 경우 sing-in으로 와짐*/}
                        {signInLevel===3 && 
                        <>
                            <div></div>
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
                    <div className='Oauth-authentification-icon-box'>
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
            </div>
        )
    }
    //          component : 비밀번호 재설정_이메일 입력화면         //
    const SearchPasswordCard = () => {
        
        //          event handler: '복구 링크 보내기' 버튼 클릭 이벤트 처리          //
        const sendMessageButtonClickHandler = () => {
            setView('search-password-email-autentication-card');
        }

        //          event handler: '로그인 돌아기기' 버튼 클릭 이벤트 처리          //
        const onSignInLinkClickHandler = () => {
            setView('sign-in-card');
        }
    
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
                    <div className='sign-in-navigator-button' onClick={onSignInLinkClickHandler}>로그인으로 돌아가기</div>
                </div>
            </div>
        )
    }
    //          component : 비밀번호 재설정_이메일 인증 card         //
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
    //          component : 비밀번호 재설정_비밀번호 입력 화면         //
    const ResetPasswordCard = () => {
        //        render : 비밀번호 재설정 페이지 랜더링        //
        return (
            <div className='reset-password-card'>
                <div className='reset-password-top-box'>
                    <div className='auth-top-box'>
                        <div className='godlife-logo-icon-box'>
                            <div className='godlife-logo-icon'></div>
                        </div>
                        <div className='auth-page-text-box'>{'새 비밀번호 입력.'}</div>
                    </div>
                    {/*}
                    <div className='error-message-container'>
                        <div className='error-logo-image'></div>
                        <div className='error-message-box'>
                            <div className='error-message-text'>{'잘못된 이메일 주소 또는 비밀번호 입니다.\n로그인 하는데 도움이 필요하세요?'}</div>
                            <div className='error-message-text'>{'이전에 사용한 비밀번호 입니다.\n다른 비밀번호를 선택하세요'}</div>
                            <div className='error-message-text'>{'너무많이 사용되는 비밀번호 입니다.\n추측하기 어려운 비밀번호를 선택하세요'}</div>
                        </div>
                    </div>
                    */}
                    <div className='reset-password-middle-box'>
                        <div className='password-input-box'>
                            <input/>
                        </div>
                        <div className='password-security-gage-box'>
                            <div className='security-gage-default'>
                                <div className='gage1'></div>
                                <div className='gage2'></div>
                                <div className='gage3'></div>
                                <div className='gage4'></div>
                                <div className='gage5'></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='reset-password-main-page-navigator-bottom-box'>계속</div>
            </div>
        )
    }
    //          component : sing up_이메일 입력 화면         //
    const SingUpEmailCard = () => {

        //          state : 회원가입 단계 화면          //
        const [singupLevel, setSignUpInLevel] = useState<number>(1);

        //          event handler: '로그인 돌아기기' 버튼 클릭 이벤트 처리          //
        const onSignInLinkClickHandler = () => {
            setView('sign-in-card');
        }
        //          event handler: '이메일 인증 코드입력 화면' 버튼 클릭 이벤트 처리          //
        const onSingUpEmailAutenticationCardClickHandler = () => {
            setView('sing-up-email-autentication-card');
        }

        //        render : 새로운 계정 생성 페이지 랜더링        //
        return (
            <div className='sign-up-email-card'>
                <div className='sign-up-email-top-box'>
                    <div className='auth-top-box'>
                        <div className='godlife-logo-icon-box'>
                            <div className='godlife-logo-icon'></div>
                        </div>
                        <div className='auth-page-text-box'>계속하려면 새로운 계정을 만드세요</div>
                    </div>
                    <div className='sign-up-email-middle-box'>
                        <div className='email-input-box'>
                            <input/>
                        </div>
                        <div className='sign-up-button-box' onClick={onSingUpEmailAutenticationCardClickHandler}>{'가입'}</div>
                        <div className='agree-personal-text-box'>
                            <div className='agree-personal-text'>{'가입하면 Godlife Cloud이용약관에 동의하고 \n개인정보 보호정책을 인정한 것 으로 간주됩니다.'}</div>
                        </div>
                    </div>
                </div>
                <div className='sign-up-email-bottom-box'>
                    <div className='Oauth-box'>
                        <div className='Oauth-box-title'>또는 다음 계정을 사용하여 계정생성</div>
                        <div className='Oauth-authentification-icon-box'>
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
                    <div className='sign-in-navigator-button'onClick={onSignInLinkClickHandler}>{'이미 계정이 있습니까?'}</div>
                </div>
            </div>
        )
    }
    //          component : sing up_이메일 인증 화면         //
    const SingUpEmailAutenticationCard = () => {

        //          event handler: '새로운 계정 만들기' 버튼 클릭 이벤트 처리          //
        const onInformationNavigatorButtonClickHandler = () => {
            setView('sing-up-information-card');
        }
        //          event handler: '새로운 계정 만들기' 버튼 클릭 이벤트 처리          //
        const onSignUpLinkClickHandler = () => {
            setView('sing-up-email-card');
        }
        //        render : 새로운 계정 생성_이메일 확인 페이지 랜더링        //
        return (
            <div className='sign-up-email-autentification-card'>
                <div className='sign-up-email-autentification-card-top-box'>
                    <div className='auth-top-box'>
                        <div className='godlife-logo-icon-box'>
                            <div className='godlife-logo-icon'></div>
                        </div>
                        <div className='auth-page-text-box'>{'이메일로 인증 코드를 전송하였습니다'}</div>
                    </div>
                    <div className='sign-up-email-autentification-main'>
                        <div className='sign-up-email-autentification-confirm'>
                            <div className='sign-up-email-autentification-confirm-text'>{'새로운 계정을 생성하려면 다음 주소로 보낸 이메일의 코드를 \n확인하세요'}</div>
                            <div className='sign-up-email-autentification-send-address'>{'email@email.com'}</div>
                        </div>
                        <div className='sign-up-email-autentification-card-middle-input-box'>
                            <input/>
                            <input/>
                            <input/>
                            <input/>
                            <input/>
                            <input/>
                        </div>                
                    </div>
                </div>
                <div className='sign-up-email-autentification-card-bottom-box'>
                    <div className='sing-up-information-card-navigator-button'onClick={onInformationNavigatorButtonClickHandler}>{'확인'}</div>
                    <div className='sing-up-email-card-navigator-text-button-box' onClick={onSignUpLinkClickHandler}>{'이메일에 코드가 도착하지 않았나요?'}</div>
                </div>
            </div>
        )
    }
    //          component : sing up _계정 생성 정보 입력 화면         //
    const SingUpInformationCard = () => {
        //          event handler: '새로운 계정 만들기' 버튼 클릭 이벤트 처리          //
        const onSingUpCompleteButtonClickHandler =() => {
            alert('로그인 완료입니다. 메인페이지로 넘어갑니다.');
        }
        //        render : 새로운 계정 생성_정보 입력 페이지 랜더링        //
        return (
            <div className='sing-up-information-card'>
                <div className='sing-up-information-card-top-box'>
                    <div className='auth-top-box'>
                        <div className='godlife-logo-icon-box'>
                            <div className='godlife-logo-icon'></div>
                        </div>
                        <div className='auth-page-text-box'>{'email@email.com'}</div>
                    </div>
                    <div className='sing-up-information-card-middle-box'>
                        <div className='error-message-container'>
                            <div className='error-logo-image'></div>
                            <div className='error-message-box'>
                                <div className='error-message-text'>{'너무 많이 사용되는 비밀번호 입니다.\n추측하기 어려운 비밀번호를 선택하세요'}</div>
                            </div>
                        </div>
                        <div className='sing-up-email-inputbox'>
                            <div className='sing-up-email-inputbox-title'>{'이메일 주소'}</div>
                            <input/>
                        </div>
                        <div className='sing-up-nickname-inputbox'>
                            <div className='sing-up-nickname-inputbox-title'>{'닉네임'}</div>
                            <input/>
                        </div>
                        <div className='sing-up-password-inputbox'>
                            <div className='sing-up-password-inputbox-title'>{'비밀번호'}</div>
                            {/*비밀번호 입력 인풋박스 컴포넌트 만들어야함=> error message 도 출력되게 */}
                            <input/>
                            <div className='password-security-gage-box'>
                                <div className='security-gage-default'>
                                    <div className='gage1'></div>
                                    <div className='gage2'></div>
                                    <div className='gage3'></div>
                                    <div className='gage4'></div>
                                    <div className='gage5'></div>
                                </div>
                                {/*비밀번호 유효성 검사 화면*/}
                                {/*<div className='security-gage-low'></div>
                                <div className='security-gage-middle'></div>
                                <div className='security-gage-success'></div>*/}
                            </div>
                        </div>
                        <div className='sing-up-category-inputbox-not-select'>
                            <div className='sing-up-category-inputbox-top'>
                                <div className='sing-up-category-inputbox-title'>{'카테고리 선택'}</div>
                                {<DropDownFirstCategory/>}
                            </div>
                            <div className='category-error-message'></div>
                        </div>
                    </div>
                </div>
                <div className='sing-up-information-card-bottom-box' onClick={onSingUpCompleteButtonClickHandler}>{'계속'}</div>
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
                {view === 'sing-up-email-autentication-card' && <SingUpEmailAutenticationCard/>}
                {view === 'sing-up-information-card' && <SingUpInformationCard/>}
                {view === 'reset-password-card' && <ResetPasswordCard/>}
            </div>
        </div>
    );
    

}