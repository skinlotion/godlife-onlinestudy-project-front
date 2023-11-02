import React, { useState } from 'react'
import StudyDefaultImage from '../../assets/study-default-icon.png'
import { Scrollbars } from 'react-custom-scrollbars-2';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import './style.css';
import { useNavigate, useParams } from 'react-router-dom';
import useUserStore from '../../stores/user.store';

//        component: 메인 페이지        //
export default function Main() {

  //        state: 조회하는 유저 이메일 path variable 상태        //
  const { searchEmail } = useParams();
  //        state: 로그인 유저 정보 상태        //
  const { user, setUser } = useUserStore();
  //        state: 본인 여부 상태       //
  const [isMyPage, setMyPage] = useState<boolean>(false);

  //        function: 네비게이트 함수       //
  const navigator = useNavigate();

  //        state: 참여한 스터디 개수 상태        //
  const [count, setCount] = useState<number>(0);
  
  //        component: 메인 상단 컴포넌트       //
  const MainTop = () => {
    
    const TabExample: React.FC = () => {
      return (
        <div>
          <Tabs>
            <TabList>
              <Tab>Tab 1</Tab>
              <Tab>Tab 2</Tab>
              <Tab>Tab 3</Tab>
            </TabList>
    
            <TabPanel>
              {/* <p>Content for Tab 1</p> */}
            </TabPanel>
            <TabPanel>
              <p>Content for Tab 2</p>
            </TabPanel>
            <TabPanel>
              <p>Content for Tab 3</p>
            </TabPanel>
          </Tabs>
        </div>
      );
    };
    
    //        render: 메인 상단 컴포넌트 렌더링       //
    return (
      <div id='main-top-wrapper'>
        <div className='main-top-container'>

          <div className='main-top-up-box'>
            <div className='main-top-up-box-studyroom-text'>{'내가 참여한 스터디방 정보'}</div>
            
            <div className='main-top-up-box-studyroom-tap'>
              <TabExample />
            </div>
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
                      <div className='todolist-add-icon'></div>
                    </div>
                    <div className='main-top-down-todolist-add-button-text'>{'To Do 추가하기'}</div>
                  </div>
                  <div className='main-top-down-todolist-delete-button'>
                    <div className='main-top-down-todolist-icon-box'>
                      <div className='todolist-delete-icon'></div>
                    </div>
                    <div className='main-top-down-todolist-delete-button-text'>{'To Do 삭제하기'}</div>
                  </div>
                </div>

                <div className='main-top-down-todolist-input'>{'TO DO LIST 입력중입니다....'}</div>

                <div className='main-top-down-todolist-detail-box'>
                    <Scrollbars
                      renderTrackVertical={props => <div {...props} className="track-vertical"/>}
                      renderThumbVertical={props => <div {...props} className="thumb-vertical"/>}>
                        
                        <div className='main-top-down-todolist-blank'></div>

                        <div className='main-top-down-todolist-detail'>
                          <div className='main-top-down-todolist-check-icon-box'>
                            <div className='todolist-non-check-icon'></div>
                          </div>
                          <div className='main-top-down-todolist-detail-text'>{'스터디 자료 파일 다운받고 미리 숙지하기2'}</div>
                        </div>

                        <div className='main-top-down-todolist-detail'>
                          <div className='main-top-down-todolist-check-icon-box'>
                            <div className='todolist-check-icon'></div>
                          </div>
                          <div className='main-top-down-todolist-detail-text-ok'>{'스터디 자료 파일 다운받고 미리 숙지하기1'}</div>
                        </div>

                        <div className='main-top-down-todolist-detail'>
                          <div className='main-top-down-todolist-check-icon-box'>
                            <div className='todolist-check-icon'></div>
                          </div>
                          <div className='main-top-down-todolist-detail-text-ok'>{'스터디 자료 파일 다운받고 미리 숙지하기3'}</div>
                        </div>

                        <div className='main-top-down-todolist-detail'>
                          <div className='main-top-down-todolist-check-icon-box'>
                            <div className='todolist-non-check-icon'></div>
                          </div>
                          <div className='main-top-down-todolist-detail-text'>{'스터디 자료 파일 다운받고 미리 숙지하기2'}</div>
                        </div>

                        <div className='main-top-down-todolist-detail'>
                          <div className='main-top-down-todolist-check-icon-box'>
                            <div className='todolist-check-icon'></div>
                          </div>
                          <div className='main-top-down-todolist-detail-text-ok'>{'스터디 자료 파일 다운받고 미리 숙지하기1'}</div>
                        </div>

                        <div className='main-top-down-todolist-detail'>
                          <div className='main-top-down-todolist-check-icon-box'>
                            <div className='todolist-check-icon'></div>
                          </div>
                          <div className='main-top-down-todolist-detail-text-ok'>{'스터디 자료 파일 다운받고 미리 숙지하기3'}</div>
                        </div>
                        <div className='main-top-down-todolist-detail'>
                          <div className='main-top-down-todolist-check-icon-box'>
                            <div className='todolist-non-check-icon'></div>
                          </div>
                          <div className='main-top-down-todolist-detail-text'>{'스터디 자료 파일 다운받고 미리 숙지하기2'}</div>
                        </div>

                        <div className='main-top-down-todolist-detail'>
                          <div className='main-top-down-todolist-check-icon-box'>
                            <div className='todolist-check-icon'></div>
                          </div>
                          <div className='main-top-down-todolist-detail-text-ok'>{'스터디 자료 파일 다운받고 미리 숙지하기1'}</div>
                        </div>

                        <div className='main-top-down-todolist-detail-rast'>
                          <div className='main-top-down-todolist-check-icon-box'>
                            <div className='todolist-check-icon'></div>
                          </div>
                          <div className='main-top-down-todolist-detail-text-ok'>{'스터디 자료 파일 다운받고 미리 숙지하기3'}</div>
                        </div> 

                        <div className='main-top-down-todolist-blank'></div>

                    </Scrollbars>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  //        component: 메인 중단 컴포넌트       //
  const MainMiddle = () => {
    
    //        render: 메인 중단 컴포넌트 렌더링       //
    return (
      <div id='main-middle-wrapper'>
        <div className='main-middle-box'>
          <div className='main-middle-box-recommend-studyroom-text'>{'추천 스터디'}</div>
          <div className='main-middle-box-recommend-studyroom'>
            {/* 반복되는 스터디방 */}
            <div className='main-middle-box-studyroom-data' style={{backgroundImage: `url(${StudyDefaultImage})` }}>
              <div className='main-middle-box-studyroom-deadline-time'>{'스터디 마감 시간 : 2023년 09월 15일'}</div>
              <div className='main-middle-box-studyroom-participation-number'>{'스터디 참여자 수 00 / 00명'}</div>
              <div className='main-middle-box-studyroom-title'>{'스터디 이름'}</div>
            </div>
            <div className='main-middle-box-studyroom-data' style={{backgroundImage: `url(${StudyDefaultImage})` }}>
              <div className='main-middle-box-studyroom-deadline-time'>{'스터디 마감 시간 : 2023년 09월 15일'}</div>
              <div className='main-middle-box-studyroom-participation-number'>{'스터디 참여자 수 00 / 00명'}</div>
              <div className='main-middle-box-studyroom-title'>{'스터디 이름'}</div>
            </div>
            <div className='main-middle-box-studyroom-data' style={{backgroundImage: `url(${StudyDefaultImage})` }}>
              <div className='main-middle-box-studyroom-deadline-time'>{'스터디 마감 시간 : 2023년 09월 15일'}</div>
              <div className='main-middle-box-studyroom-participation-number'>{'스터디 참여자 수 00 / 00명'}</div>
              <div className='main-middle-box-studyroom-title'>{'스터디 이름'}</div>
            </div>
            <div className='main-middle-box-studyroom-data' style={{backgroundImage: `url(${StudyDefaultImage})` }}>
              <div className='main-middle-box-studyroom-deadline-time'>{'스터디 마감 시간 : 2023년 09월 15일'}</div>
              <div className='main-middle-box-studyroom-participation-number'>{'스터디 참여자 수 00 / 00명'}</div>
              <div className='main-middle-box-studyroom-title'>{'스터디 이름'}</div>
            </div>
            
          </div>
        </div>
      </div>
    )
  }

  //        component: 메인 하단 컴포넌트       //
  const MainBottom = () => {

    //        render: 메인 하단 컴포넌트 렌더링       //
    return (
      <div id='main-bottom-wrapper'>
        <div className='main-bottom-box'>
          <div className='main-bottom-box-studyroom-search-text'>{'스터디 검색'}</div>
          <div className='main-bottom-box-studyroom-search'>

            <div className='main-bottom-box-studyroom-search-box'>
              <div className='main-bottom-box-studyroom-total'>{'총 120개 스터디'}</div>
              <div className='main-bottom-box-studyroom-search-input-box'>
                <div className='main-bottom-box-studyroom-search-input'>{'검색어를 입력해 주세요'}</div>
                <div className='icon-button'>
                  <div className='search-icon'></div>
                </div>
              </div>
            </div>

            <div className='main-bottom-box-studyroom-category-box'>
              <div className='main-bottom-box-studyroom-category-activation-button'>{'전체'}</div>
              <div className='main-bottom-box-studyroom-category-deactivation-button'>{'자격증'}</div>
              <div className='main-bottom-box-studyroom-category-deactivation-button'>{'학교'}</div>
              <div className='main-bottom-box-studyroom-category-deactivation-button'>{'취업'}</div>
              <div className='main-bottom-box-studyroom-category-deactivation-button'>{'회화'}</div>
              <div className='main-bottom-box-studyroom-category-deactivation-button'>{'기타'}</div>
            </div>

            <div className='main-bottom-box-studyroom'>
              <div className='main-bottom-box-studyroom-line'>
                <div className='main-middle-box-studyroom-data' style={{backgroundImage: `url(${StudyDefaultImage})` }}>
                  <div className='main-middle-box-studyroom-deadline-time'>{'스터디 마감 시간 : 2023년 09월 15일'}</div>
                  <div className='main-middle-box-studyroom-participation-number'>{'스터디 참여자 수 00 / 00명'}</div>
                  <div className='main-middle-box-studyroom-title'>{'스터디 이름'}</div>
                </div>

                <div className='main-middle-box-studyroom-data' style={{backgroundImage: `url(${StudyDefaultImage})` }}>
                  <div className='main-middle-box-studyroom-deadline-time'>{'스터디 마감 시간 : 2023년 09월 15일'}</div>
                  <div className='main-middle-box-studyroom-participation-number'>{'스터디 참여자 수 00 / 00명'}</div>
                  <div className='main-middle-box-studyroom-title'>{'스터디 이름'}</div>
                </div>

                <div className='main-middle-box-studyroom-data' style={{backgroundImage: `url(${StudyDefaultImage})` }}>
                  <div className='main-middle-box-studyroom-deadline-time'>{'스터디 마감 시간 : 2023년 09월 15일'}</div>
                  <div className='main-middle-box-studyroom-participation-number'>{'스터디 참여자 수 00 / 00명'}</div>
                  <div className='main-middle-box-studyroom-title'>{'스터디 이름'}</div>
                </div>

                <div className='main-middle-box-studyroom-data' style={{backgroundImage: `url(${StudyDefaultImage})` }}>
                  <div className='main-middle-box-studyroom-deadline-time'>{'스터디 마감 시간 : 2023년 09월 15일'}</div>
                  <div className='main-middle-box-studyroom-participation-number'>{'스터디 참여자 수 00 / 00명'}</div>
                  <div className='main-middle-box-studyroom-title'>{'스터디 이름'}</div>
                </div>

                <div className='main-middle-box-studyroom-data' style={{backgroundImage: `url(${StudyDefaultImage})` }}>
                  <div className='main-middle-box-studyroom-deadline-time'>{'스터디 마감 시간 : 2023년 09월 15일'}</div>
                  <div className='main-middle-box-studyroom-participation-number'>{'스터디 참여자 수 00 / 00명'}</div>
                  <div className='main-middle-box-studyroom-title'>{'스터디 이름'}</div>
                </div>
              </div>

              <div className='main-bottom-box-studyroom-line'>
                <div className='main-middle-box-studyroom-data' style={{backgroundImage: `url(${StudyDefaultImage})` }}>
                  <div className='main-middle-box-studyroom-deadline-time'>{'스터디 마감 시간 : 2023년 09월 15일'}</div>
                  <div className='main-middle-box-studyroom-participation-number'>{'스터디 참여자 수 00 / 00명'}</div>
                  <div className='main-middle-box-studyroom-title'>{'스터디 이름'}</div>
                </div>

                <div className='main-middle-box-studyroom-data' style={{backgroundImage: `url(${StudyDefaultImage})` }}>
                  <div className='main-middle-box-studyroom-deadline-time'>{'스터디 마감 시간 : 2023년 09월 15일'}</div>
                  <div className='main-middle-box-studyroom-participation-number'>{'스터디 참여자 수 00 / 00명'}</div>
                  <div className='main-middle-box-studyroom-title'>{'스터디 이름'}</div>
                </div>

                <div className='main-middle-box-studyroom-data' style={{backgroundImage: `url(${StudyDefaultImage})` }}>
                  <div className='main-middle-box-studyroom-deadline-time'>{'스터디 마감 시간 : 2023년 09월 15일'}</div>
                  <div className='main-middle-box-studyroom-participation-number'>{'스터디 참여자 수 00 / 00명'}</div>
                  <div className='main-middle-box-studyroom-title'>{'스터디 이름'}</div>
                </div>

                <div className='main-middle-box-studyroom-data' style={{backgroundImage: `url(${StudyDefaultImage})` }}>
                  <div className='main-middle-box-studyroom-deadline-time'>{'스터디 마감 시간 : 2023년 09월 15일'}</div>
                  <div className='main-middle-box-studyroom-participation-number'>{'스터디 참여자 수 00 / 00명'}</div>
                  <div className='main-middle-box-studyroom-title'>{'스터디 이름'}</div>
                </div>

                <div className='main-middle-box-studyroom-data' style={{backgroundImage: `url(${StudyDefaultImage})` }}>
                  <div className='main-middle-box-studyroom-deadline-time'>{'스터디 마감 시간 : 2023년 09월 15일'}</div>
                  <div className='main-middle-box-studyroom-participation-number'>{'스터디 참여자 수 00 / 00명'}</div>
                  <div className='main-middle-box-studyroom-title'>{'스터디 이름'}</div>
                </div>
              </div>

              <div className='main-bottom-box-studyroom-line'>
                <div className='main-middle-box-studyroom-data' style={{backgroundImage: `url(${StudyDefaultImage})` }}>
                  <div className='main-middle-box-studyroom-deadline-time'>{'스터디 마감 시간 : 2023년 09월 15일'}</div>
                  <div className='main-middle-box-studyroom-participation-number'>{'스터디 참여자 수 00 / 00명'}</div>
                  <div className='main-middle-box-studyroom-title'>{'스터디 이름'}</div>
                </div>

                <div className='main-middle-box-studyroom-data' style={{backgroundImage: `url(${StudyDefaultImage})` }}>
                  <div className='main-middle-box-studyroom-deadline-time'>{'스터디 마감 시간 : 2023년 09월 15일'}</div>
                  <div className='main-middle-box-studyroom-participation-number'>{'스터디 참여자 수 00 / 00명'}</div>
                  <div className='main-middle-box-studyroom-title'>{'스터디 이름'}</div>
                </div>

                <div className='main-middle-box-studyroom-data' style={{backgroundImage: `url(${StudyDefaultImage})` }}>
                  <div className='main-middle-box-studyroom-deadline-time'>{'스터디 마감 시간 : 2023년 09월 15일'}</div>
                  <div className='main-middle-box-studyroom-participation-number'>{'스터디 참여자 수 00 / 00명'}</div>
                  <div className='main-middle-box-studyroom-title'>{'스터디 이름'}</div>
                </div>

                <div className='main-middle-box-studyroom-data' style={{backgroundImage: `url(${StudyDefaultImage})` }}>
                  <div className='main-middle-box-studyroom-deadline-time'>{'스터디 마감 시간 : 2023년 09월 15일'}</div>
                  <div className='main-middle-box-studyroom-participation-number'>{'스터디 참여자 수 00 / 00명'}</div>
                  <div className='main-middle-box-studyroom-title'>{'스터디 이름'}</div>
                </div>

                <div className='main-middle-box-studyroom-data' style={{backgroundImage: `url(${StudyDefaultImage})` }}>
                  <div className='main-middle-box-studyroom-deadline-time'>{'스터디 마감 시간 : 2023년 09월 15일'}</div>
                  <div className='main-middle-box-studyroom-participation-number'>{'스터디 참여자 수 00 / 00명'}</div>
                  <div className='main-middle-box-studyroom-title'>{'스터디 이름'}</div>
                </div>
              </div>
            </div>

            <div className='main-bottom-box-studyroom-additional-view-button'>{'더보기'}</div>

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
