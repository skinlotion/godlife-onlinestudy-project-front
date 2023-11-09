import './style.css';


export default function ManinpageStudyRoomJoinModal() {


    //        render : 계정인증 메인 랜더링        //
    return(
        <div id='studyroom-join-modal-wrapper'>
            <div className='studyroom-join-modal-card'>
                <div className='studyroom-join-modal-card-close-button-box'>
                    <div className='studyroom-join-modal-card-close-button'></div>
                </div>
                <div className='studyroom-join-modal-header'>
                    <div className='studyroom-image-box'>
                        <div className='studyroom-default-image'></div>
                    </div>
                    <div className='studyroom-join-modal-header-content'>
                        <div className='studyroom-title'>{'스터디 방 이름1'}</div>
                        <div className='studyroom-disclosure'>{'공개'}</div>
                        <div className='studyroom-category'>{'스터디 카테고리'}</div>
                        <div className='studyroom-master-info-box'>
                            <div className='studyroom-master-profile-image-box'>
                                <div className='studyroom-master-grade-image'></div>
                            </div>
                            <div className='studyroom-master-nickname'>{'방장닉네임'}</div>
                        </div>
                    </div>
                </div>
                <div className='studyroom-join-modal-main'>
                    <div className='studyroom-info-container'>
                        <div className='studyroom-info-box'>
                            <div className='studyroom-info-state-box'>
                                <div className='studyroom-participation-personnel-box'>
                                    <div className='studyroom-participation-personnel-title-box'>
                                        <div className='studyroom-participation-personnel-title'>{'참여인원'}</div>
                                    </div>
                                    <div className='studyroom-participation-personnel-text-box'>
                                        <div className='studyroom-participation-personnel-text'>{'참여인원 : 00명 /  00명'}</div>
                                    </div>
                                </div>
                                <div className='studyroom-next-class-date'>
                                    <div className='studyroom-next-class-date-title-box'>
                                        <div className='studyroom-next-class-date-title'>{'다음 스터디 모임 날짜'}</div>
                                    </div>
                                    <div className='studyroom-next-class-date-text-box'>
                                        <div className='studyroom-participation-personnel-text'>{'2023년 12월 10일 목요일'}</div>
                                    </div>
                                </div>
                            </div>
                            <div className='studyroom-progress-rate-box'>
                                <div className='studyroom-progress-rate-title'>{'스터디 진행률'}</div>
                                <div className='studyroom-progress-rate-progressbar-box'>
                                    <div className='studyroom-progress-rate-progressbar'></div>
                                    <div className='studyroom-progress-rate-date'>
                                        <div className='studyroom-start-date-box'>
                                            <div className='studyroom-start-date'>{'시작일 : 2023.00.00'}</div>
                                        </div>
                                        <div className='studyroom-end-date-box'>
                                            <div className='studyroom-end-date'>{'종료일 : 2023.00.00'}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='studyroom-info-notice-container'>
                        <div className='studyroom-info-notice-title-box'>
                            <div className='studyroom-info-notice-title-icon-box'>
                                <div className='studyroom-info-notice-title-icon'></div>
                            </div>
                            <div className='studyroom-info-notice-title'>{'공지사항'}</div>
                        </div>
                        <div className='studyroom-info-notice-content'>
                            <div className='studyroom-info-notice-box'>
                                <div className='studyroom-info-notice-icon'></div>
                                <div className='studyroom-info-notice-text'></div>
                            </div>
                        </div>
                    </div>
                    <div className='studyroom-info-todo-list-container'>
                        <div className='studyroom-info-todo-list-title-box'>
                            <div className='studyroom-info-todo-list-icon-box'>
                                <div className='studyroom-info-todo-list-title-icon'></div>
                            </div>
                            <div className='studyroom-info-todo-list-title'>{'Study To Do List'}</div>
                        </div>
                        <div className='studyroom-info-todo-list-content'>
                            <div className='studyroom-info-todo-list-box'>
                                <div className='studyroom-info-todo-list-icon'></div>
                                <div className='studyroom-info-todo-list-text'></div>
                            </div>
                        </div>
                    </div>
                    <div className='studyroom-info-button-box'>
                        <div className='studyroom-join-button'></div>
                    </div>
                </div>
            </div>
        </div>
    );
}