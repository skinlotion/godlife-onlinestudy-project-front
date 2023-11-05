import React, { useState, useEffect } from 'react'
import StudyDefaultImage from '../../assets/study-default-icon.png'
import { Scrollbars } from 'react-custom-scrollbars-2';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './style.css';
import { useNavigate, useParams } from 'react-router-dom';
import useUserStore from '../../stores/user.store';
import { AUTH_PATH } from '../../constant';
import studyRoomInfoListMock from '../../mocks/my-study-room-info-list.mock';
import usePagination from '../../hooks/pagination.hook';
import { MyStudyRoomInfoItem } from '../../types';
import MyStudyRoomInfoListItem from '../../components/MyStudyRoomInfoItem';

//        component: 메인 페이지        //
export default function Main() {

  //        state: 조회하는 유저 이메일 path variable 상태        //
  const { searchEmail } = useParams();
  //        state: 로그인 유저 정보 상태        //
  const { user, setUser } = useUserStore();

  //        component: 메인 상단 컴포넌트       //
  const MainTop = () => {
    
    //        function: 네비게이트 함수       //
    const navigator = useNavigate();

    //        state: 페이지네이션 관련 상태       //
    const { setStudyRoomInfoList } = usePagination<MyStudyRoomInfoItem>();

    //        state: 참여한 스터디 개수 상태        //
    const [count, setCount] = useState<number>(0);
    //        state: 유저의 등급 상태       //
    const [grade, setGrade] = useState<'일반' | '방장'>('일반');

    //      state: 탭 리스트 높이 상태        //
    const [tabListHeight, setTabListHeight] = useState(0);

    //        effect: 조회하는 유저의 이메일이 변경될 때마다 실행할 함수        //
    useEffect(() => {
      setStudyRoomInfoList(studyRoomInfoListMock);
      setCount(studyRoomInfoListMock.length);
    }, [searchEmail]);

    //        effect: 탭 리스트 요소가 존재할 때 실행할 함수        //
    useEffect(() => {
      const tabListElement = document.querySelector('.react-tabs__tab-list');
      if (tabListElement) {
        const height = tabListElement.clientHeight;
        setTabListHeight(height);
      }
    }, []);

    //        description: 참여 스터디 방이 없을 때 탭 패널 높이 정의       //
    const selectedTabPanelStyle = {
      height: `calc(100% - ${tabListHeight}px)`,
    };

    //        render: 메인 상단 컴포넌트 렌더링       //
    return (
      <div id='main-top-wrapper'>
        <div className='main-top-container'>

          <div className='main-top-up-box'>
            <div className='main-top-up-box-studyroom-text'>{'내가 참여한 스터디방 정보'}</div>
            <div className='main-top-up-box-studyroom-tap'>

              {count === 0 ? (
                <Tabs>
                  <TabList>
                    <Tab>{'새로운 스터디 참여하기'}</Tab>
                  </TabList>
                  <TabPanel className="tabpanel-nothing-box" style={selectedTabPanelStyle}>
                    <div className='my-study-room-nothing-box'>
                      <div className='my-study-room-nothing-message'>{'참여한 스터디 방이 없습니다!'}</div>
                      <div className='my-study-room-nothing-button-box'>
                        <div className='my-study-room-nothing-button-box-text'>{'스터디 검색하기'}</div>
                      </div>
                    </div>
                  </TabPanel>
                </Tabs>
              ) : (
                <Tabs>
                  <TabList>
                    {studyRoomInfoListMock.map((tab) => (
                      <Tab key={tab.studyNumber}>{tab.studyName}</Tab>
                    ))}
                  </TabList>
          
                  {studyRoomInfoListMock.map((tab) => (
                    <TabPanel key={tab.studyNumber} className="tabpanel-result-box" style={selectedTabPanelStyle}>
                      <div className='my-study-room-info-right-box'>
                        <div className='my-study-room-info-box'>

                          <div className='participation-study-name-box'>
                            <div className='participation-study-name'>{'참여 스터디 이름'}</div>
                            <div className='participation-study-name-text'>{tab.studyName}</div>
                          </div>

                          <div className='study-category-box'>
                            <div className='study-category'>{'스터디 카테고리'}</div>
                            <div className='study-category-text'>{tab.studyCategory1}</div>
                          </div>

                          <div className='participation-personnel-box'>
                            <div className='participation-personnel'>{'참여인원'}</div>
                            <div className='participation-personnel-text'>{tab.studyPersonnel}</div>
                          </div>

                          <div className='my-grade-box'>
                            <div className='my-grade'>{'내 등급'}</div>
                            <div className='my-grade-text'>{tab.myGrade}</div>
                          </div>

                          <div className='study-next-start-datetime-box'>
                            <div className='study-next-start-datetime'>{'다음 스터디 모임 날짜'}</div>
                            <div className='study-next-start-datetime-text'>{tab.studyNextStartDatetime}</div>
                          </div>

                          {grade === '일반' ? (
                            <div className='study-leave-button'>{'방 퇴장하기'}</div>
                          ) : (
                            <div></div>
                          )}

                        </div>
                      </div>
                    </TabPanel>
                  ))}
                </Tabs>
              )}
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
