import React from 'react'
import { Scrollbar } from 'react-scrollbars-custom';
import StudyDefaultImage from '../../assets/study-default-icon.png'
import './style.css';

//      component: 인증 페이지      //
export default function Main() {

  //    component: 메인 상단 컴포넌트   //
  const MainTop = () => {
    
    //    render: 메인 상단 컴포넌트 렌더링   //
    return (
      <div id='main-top-wrapper'>
        <div className='main-top-container'>

          <div className='main-top-up-box'>
            <div className='main-top-up-box-studyroom-text'>{'내가 참여한 스터디방 정보'}</div>
            <div className='main-top-up-box-studyroom-tap'></div>
          </div>

          <div className='main-top-down-box'>
            <div className='main-top-down-calendar-box'>
              <div className='main-top-down-calendar-box-text'>{'내 캘린더'}</div>
              <div className='main-top-down-calendar'></div>
            </div>
            <div className='main-top-down-todolist-box'>
              <div className='main-top-down-todolist-box-text'>{'MY To Do List'}</div>

              <div className='main-top-down-todolist'>
                <div className='main-top-down-todolist-bar'>
                  <div className='main-top-down-todolist-date'>{'2023년 12월 08일 목요일'}</div>
                  <div className='main-top-down-todolist-add-button'>
                    <div className='main-top-down-todolist-icon-box'>
                      <div className='main-top-down-todolist-add-icon'></div>
                    </div>
                    <div className='main-top-down-todolist-add-button-text'>{'To Do 추가하기'}</div>
                  </div>
                  <div className='main-top-down-todolist-delete-button'>
                    <div className='main-top-down-todolist-icon-box'>
                      <div className='main-top-down-todolist-delete-icon'></div>
                    </div>
                    <div className='main-top-down-todolist-delete-button-text'>{'To Do 삭제하기'}</div>
                  </div>
                </div>

                <div className='main-top-down-todolist-input'>{'TO DO LIST 입력중입니다....'}</div>

                <div className='main-top-down-todolist-detail-box'>
                  <div className='main-top-down-todolist-detail'>
                    <div className='main-top-down-todolist-check-icon-box'>
                      <div className='main-top-down-todolist-check-icon'></div>
                    </div>
                    <div className='main-top-down-todolist-detail-text-ok'>{'스터디 자료 파일 다운받고 미리 숙지하기1'}</div>
                  </div>
                  <div className='main-top-down-todolist-detail'>
                    <div className='main-top-down-todolist-check-icon-box'>
                      <div className='main-top-down-todolist-non-check-icon'></div>
                    </div>
                    <div className='main-top-down-todolist-detail-text'>{'스터디 자료 파일 다운받고 미리 숙지하기2'}</div>
                  </div>
                  <div className='main-top-down-todolist-detail'>
                    <div className='main-top-down-todolist-check-icon-box'>
                      <div className='main-top-down-todolist-non-check-icon'></div>
                    </div>
                    <div className='main-top-down-todolist-detail-text'>{'스터디 자료 파일 다운받고 미리 숙지하기3'}</div>
                  </div>
                  <div className='main-top-down-todolist-detail'>
                    <div className='main-top-down-todolist-check-icon-box'>
                      <div className='main-top-down-todolist-non-check-icon'></div>
                    </div>
                    <div className='main-top-down-todolist-detail-text'>{'스터디 자료 파일 다운받고 미리 숙지하기4'}</div>
                  </div>
                  <div className='main-top-down-todolist-detail'>
                    <div className='main-top-down-todolist-check-icon-box'>
                      <div className='main-top-down-todolist-non-check-icon'></div>
                    </div>
                    <div className='main-top-down-todolist-detail-text'>{'스터디 자료 파일 다운받고 미리 숙지하기5'}</div>
                  </div>
                  <div className='main-top-down-todolist-detail'>
                    <div className='main-top-down-todolist-check-icon-box'>
                      <div className='main-top-down-todolist-non-check-icon'></div>
                    </div>
                    <div className='main-top-down-todolist-detail-text'>{'스터디 자료 파일 다운받고 미리 숙지하기6'}</div>
                  </div>
                  <div className='main-top-down-todolist-detail'>
                    <div className='main-top-down-todolist-check-icon-box'>
                      <div className='main-top-down-todolist-non-check-icon'></div>
                    </div>
                    <div className='main-top-down-todolist-detail-text'>{'스터디 자료 파일 다운받고 미리 숙지하기7'}</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }

  //    component: 메인 중단 컴포넌트   //
  const MainMiddle = () => {
    
    return (
      <div id='main-middle-wrapper'>
        <div className='main-middle-box'>
          <div className='main-middle-box-recommend-studyroom-text'>{'추천 스터디'}</div>
          <div className='main-middle-box-recommend-studyroom'>
            {/* 반복되는 스터디방 */}
            <div className='main-middle-box-recommend-studyroom-data' style={{backgroundImage: `url(${StudyDefaultImage})` }}>
              <div className='main-middle-box-studyroom-deadline-time'>{'스터디 마감 시간 : 2023년 09월 15일'}</div>
              <div className='main-middle-box-studyroom-participation-number'>{'스터디 참여자 수 00 / 00명'}</div>
              <div className='main-middle-box-studyroom-title'>{'스터디 이름'}</div>
            </div>
            <div className='main-middle-box-recommend-studyroom-data' style={{backgroundImage: `url(${StudyDefaultImage})` }}>
              <div className='main-middle-box-studyroom-deadline-time'>{'스터디 마감 시간 : 2023년 09월 15일'}</div>
              <div className='main-middle-box-studyroom-participation-number'>{'스터디 참여자 수 00 / 00명'}</div>
              <div className='main-middle-box-studyroom-title'>{'스터디 이름'}</div>
            </div>
            <div className='main-middle-box-recommend-studyroom-data' style={{backgroundImage: `url(${StudyDefaultImage})` }}>
              <div className='main-middle-box-studyroom-deadline-time'>{'스터디 마감 시간 : 2023년 09월 15일'}</div>
              <div className='main-middle-box-studyroom-participation-number'>{'스터디 참여자 수 00 / 00명'}</div>
              <div className='main-middle-box-studyroom-title'>{'스터디 이름'}</div>
            </div>
            <div className='main-middle-box-recommend-studyroom-data' style={{backgroundImage: `url(${StudyDefaultImage})` }}>
              <div className='main-middle-box-studyroom-deadline-time'>{'스터디 마감 시간 : 2023년 09월 15일'}</div>
              <div className='main-middle-box-studyroom-participation-number'>{'스터디 참여자 수 00 / 00명'}</div>
              <div className='main-middle-box-studyroom-title'>{'스터디 이름'}</div>
            </div>
            
          </div>
        </div>
      </div>
    )
  }

  //    component: 메인 하단 컴포넌트   //
  const MainBottom = () => {
    return (
      <div id='main-bottom-wrapper'>
        <div className='main-bottom-box'>
          <div className='main-bottom-box-studyroom-search-text'>{'스터디 검색'}</div>
          <div className='main-bottom-box-studyroom-search'>
            <div className='main-bottom-box-studyroom-search-box'>

              <div className='main-bottom-box-studyroom-total'></div>
              <div className='main-bottom-box-studyroom-search-input'></div>

            </div>
            <div className='main-bottom-box-studyroom-category-box'></div>
            <div className='main-bottom-box-studyroom'></div>
          </div>
        </div>
      </div>
    )
  }

  //    render: 메인 페이지 렌더링    //
  return (
    <>
      <MainTop />
      <MainMiddle />
      <MainBottom />
    </>
  )
}
