import React, { ChangeEvent, useRef, useState } from 'react';
import './style.css';

//          component: 스터디 생성 페이지          //
export default function StudyCreate() {
    // const countRef = useRef<HTMLSpanElement | null>(null);
    
    //          state: 스터디 제목 상태          //
    const [title, setTitle] = useState<string>('');
    //          state: 스터디 제목 카운트 상태          //
    const [titleCount, setTitleCount] = useState<number>(0);

    //          event handler: 스터디 제목 글자수 20제한 이벤트 핸들러          //
    const onTitleChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        if (value.length > 20) return;
        setTitle(value);
        setTitleCount(value.length);
    };

    //            render: 스터디 생성 페이지 렌더링           //
    return (
        <div id='study-create'>
            <div className='study-create-background'>
                <div className='study-create-title'>{'스터디만들기'}</div>
                <div className='study-create-box'>
                    <div className='study-create-main-box'>
                        <div className='study-create-index-box'>
                            <div className='study-title-box'>
                                <div className='study-title-text'>{'*스터디 제목'}</div>
                                <div className='input-container'>
                                    <input type='text' className='input' placeholder='제목을 입력하세요.' value={title} onChange={onTitleChangeHandler} />
                                    <span id='char-count'>{`${titleCount}  /  20`}</span>
                                </div>
                            </div>

                            <div className='study-period'>
                                <div className='study-period-text'>{'*스터디 기간'}</div>
                                <div className='study-period-set-box'>
                                    <div className='study-period-set-text'>{'스터디 기간을 입력하세요'}</div>
                                    <div className='icon-box'>
                                        <div className='calendar-icon'></div>
                                    </div>
                                </div>
                            </div>

                            <div className='study-people-set'>
                                <div className='study-people-set-text'>{'*스터디 인원 설정'}</div>
                                <div className='study-people-set-box'>
                                    <div className='study-people-set-box-text'>{'스터디 참여 인원을 입력하세요.'}</div>
                                    <div className='icon-box'>
                                        <div className='down-arrow-icon'></div>
                                    </div>
                                </div>
                            </div>

                            <div className='study-category'>
                                <div className='study-category-text'>{'*스터디 카테고리'}</div>
                                <div className='study-category-set-box'>
                                    <div className='study-category-set-box-text'>{'스터디 카테고리를 입력하세요.'}</div>
                                    <div className='icon-box'>
                                        <div className='down-arrow-icon'></div>
                                    </div>
                                </div>
                            </div>

                            <div className='study-materials'>
                                <div className='study-materials-text'>{'*스터디 교육자료'}</div>
                                <div className='study-materials-set-box'>
                                    <div className='study-materials-set-box-text'>{'스터디 교육자료를 업로드 해주세요.'}</div>
                                    <div className='icon-box'>
                                        <div className='file-upload-icon'></div>
                                    </div>
                                </div>
                            </div>

                            <div className='study-disclosure'>
                                <div className='study-disclosure-text'>{'*스터디 공개여부'}</div>
                                <div className='study-disclosure-box'>
                                    <div className='study-disclosure-public-box'>
                                        <div className='study-disclosure-public-box-text'>{'공개방'}</div>
                                    </div>
                                    <div className='study-disclosure-private-box'>
                                        <div className='study-disclosure-private-box-text'>{'비공개방'}</div>
                                    </div>
                                </div>
                            </div>

                            <div className='study-cover-image'>
                                <div className='study-cover-image-text'>{'스터디 커버 이미지'}</div>
                                <div className='study-cover-image-box'>
                                    <div className='study-cover-image-icon-box'>
                                        <div className='study-cover-image-icon'></div>
                                    </div>
                                    <div className='study-cover-image-upload-icon'></div>
                                </div>
                            </div>
                        </div>
                        <div className='study-create-button'>
                            <div className='study-create-button-box'>
                                <div className='study-create-button-title'>{'스터디 만들기'}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
