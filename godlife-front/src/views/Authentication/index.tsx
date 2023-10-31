import React, { useState } from 'react'

export default function Authentication() {

    const [signInLevel, setSignInLevel] = useState<number>(1);
    const [resetPasswordLevel, setResetPasswordLevel] = useState<number>(1);
    const [singupLevel, setSignUpInLevel] = useState<number>(1);
    const [singUpInformationLevel, setSingUpInformationLevel] = useState<number> (1)

    const SignInCard = () => {
        //        render : 로그인 페이지 랜더링        //
        return (
            <div className='sign-in-card'>
                <div className='auth-top-box'>
                    <div className='logo-icon-box'></div>
                    <div className='auth-page-text'></div>
                </div>
                //todo  -케이스 3개로 나눠야함//
                <div className='sign-in-middle-box'>
                    <div className='auth-error-message'></div>
                    <div className='email-input-box'></div>
                    <div className='password-input-box'></div>
                    <div className='sign-in-button'></div>
                    <div className='authentication-page-chage-button'>
                        <div className='search-password-navigator-button'></div>
                        <div className='navigator-button'></div>
                    </div>
                </div>
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
        )
    }

    const SearchPasswordCard = () => {
        //        render : 비밀번호 찾기 페이지 랜더링        //
        return (
            <div className='search-password-card'>
                <div className='auth-top-box'>
                    <div className='logo-icon-box'></div>
                    <div className='auth-page-text'></div>
                </div>
                <div className='search-password-middle-box'>
                    <div className='search-password-middle-message'></div>
                    <div className='search-password-middle-inputbox'></div>
                </div>
                <div className='search-password-bottom-box'>
                    <div className='search-password-send-email-button'></div>
                    <div className='navigator-text-button'></div>
                </div>
            </div>
        )
    }

    const SearchPasswordEmailAutenticationCard = () => {
        //        render : 이메일 인증 페이지 랜더링        //
        return (
            <div className='search-password-email-authentication-card'>
                <div className='auth-top-box'>
                    <div className='logo-icon-box'></div>
                    <div className='auth-page-text'></div>
                </div>
                <div className='search-password-email-authentication-middle-box'>
                    <div className='send-icon-box'></div>
                    <div className='send-message-notice'></div>
                    <div className='send-message-receiver-address'></div>
                </div>
                <div className='search-password-email-authentication-bottom-box'>
                    <div className='search-password-resend-email-text-button'></div>
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

    const AutenticationMainCard = () => {
        //        render : 계정인증 메인 랜더링        //
        return (
            <div className='auth-card'>

            </div>
        )
    }


}