import React from 'react'
import './style.css';

//                      component : 메일 링크 전송 알림 페이지                //
export default function Authentication() {
    //                      render : 메일 링크 전송 알림 랜더링                    //
    return(
        <div id='auth-wrapper'>
            <div className='auth-container'>
                <div className='auth-card'>
                    <div className='auth-card-top-container'>
                        <div className='logo-icon-box'>
                            <div className='logo-icon'></div>
                        </div>
                        <div className='auth-card-top-text'>{'받은 메일함을 확인하여 로그인 하세요'}</div>
                    </div>
                    <div className='auth-card-middle-container'>
                        <div className='auth-card-middle-icon-box'>
                            <div className='email-logo-icon'></div>
                        </div>
                        <div className='auth-card-middle-text'>{'설정을 완료하고 로그인하려면 다음 주소로 보낸 이메일의 \n확인 링크를 클릭하세요.'}</div>
                        <div className='auth-card-middle-send-email'>{'skin_lotion@naver.com'}</div>
                    </div>
                    <div className='auth-card-bottom-container'>
                        <div className='auth-card-bottom-return-link-text'>{'확인 이메일 다시 받기'}</div>
                    </div>
                </div>
            </div>

        </div>
    )
}