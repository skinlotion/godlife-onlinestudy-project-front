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
import { MyStudyRoomInfoItem, MyToDoItem } from '../../types';
import StudyRoomItem from '../../types/study-room-item.interface';
import { myToDoListMock, recommendationStudyListMock } from '../../mocks';
import RecommendationStudyListItem from '../../components/RecommendationStudyListItem';
import { isNumberObject } from 'util/types';
import ProgressBar from '../../components/ProgressBar';
import MyToDoListItem from '../../components/MyToDoListItem';
import { hover } from '@testing-library/user-event/dist/hover';
import InputBox from '../../components/MyToDoListInputBox';

//        component: 메인 페이지        //
export default function Main() {

  //        state: 조회하는 유저 이메일 path variable 상태        //
  const { searchEmail } = useParams();
  // //        state: 로그인 유저 정보 상태        //
  // const { user, setUser } = useUserStore();

  // //        function: 네비게이트 함수       //
  // const navigator = useNavigate();

  //        component: 메인 상단 컴포넌트       //
  const MainTop = () => {
    //        state: 참여한 스터디 개수 상태        //
    const [ count, setCount ] = useState<number>(0);
    //        state: 탭 인덱스 상태       //
    const [ activeTabIndex, setActiveTabIndex ]=useState<number>(0);
    //        state: 참여한 스터디 방 정보        //
    const [ studyRoomInfoList, setStudyRoomInfoList ] = useState<MyStudyRoomInfoItem[]>([]);
    //        state: 나의 투두리스트 상태       //
    const [ myToDoList, setMyToDoList ] = useState<MyToDoItem[]>([]);
    //          state: 입력한 나의 투두리스트 상태         //
    const [inputMyToDoList, setInputMyToDoList] = useState<string>('');

    //          effect: 컴포넌트 마운트 시 참여한 스터디 방 정보 리스트 불러오기          //
    useEffect(() => {
      // TODO: API 호출로 변경
      setStudyRoomInfoList(studyRoomInfoListMock);
    }, []);

    //        effect: 조회하는 유저의 이메일이 변경될 때마다 실행할 함수        //
    useEffect(() => {
      setStudyRoomInfoList(studyRoomInfoListMock);
      setCount(studyRoomInfoListMock.length);
    }, [searchEmail]);

      //          effect: 나의 투두 리스트 불러오기          //
      useEffect(() => {
        // TODO: API 호출로 변경
        setMyToDoList(myToDoListMock);
      }, []);

    //        event handler: 탭 버튼 클릭 이벤트 처리       //
    const tabClickHandler=(index: React.SetStateAction<number>)=>{
        setActiveTabIndex(index);
    };
    
    //        event handler: 스터디 To Do List Check 클릭 이벤트 처리       //
    const onStudyToDoListCheckClickHandler = (studyNumber: number, todoId: number) => {
      const updatedStudyRoomInfoList = studyRoomInfoList.map((study) => {
        if (study.studyNumber === studyNumber) {
          const updatedToDoList = study.studyRoomToDoList.map((todo) => {
            if (todo[0] === todoId) {
              return [todo[0], todo[1], !todo[2]];
            }
            return todo;
          });
          return { ...study, studyRoomToDoList: updatedToDoList };
        }
        return study;
      });
      setStudyRoomInfoList(updatedStudyRoomInfoList);
    };

    //        event handler: 방 퇴장하기 버튼 클릭 이벤트 처리         //
    const onStudyRoomLeaveButtonClickHandler = () => {
      alert('방 퇴장하기 처리');
    }

    //        event handler: 다음 스터디 모임 날짜 수정 버튼 클릭 이벤트 처리        //
    const onNextStudyMeetingDayUpdateButtonClickHandler = () => {
      alert('다음 스터디 모임 날짜 수정 처리');
    }

    //        event handler: 스터디 자료 보기 버튼 클릭 이벤트 처리        //
    const onStudyMaterialViewButtonClickHandler = () => {
      alert('스터디 자료 보기 처리');
    }

    //        event handler: 스터디 시작 하기 버튼 클릭 이벤트 처리        //
    const onStudyStartButtonClickHandler = () => {
      alert('스터디 시작 하기 처리');
    }

    //        event handler: 나의 투두리스트 추가하기       //
    const onMyToDoListAddClickHandler = () => {
      alert('투두리스트 추가하기 처리');
    }

    //        event handler: 나의 투두리스트 삭제하기       //
    const onMyToDoListDeleteClickHandler = () => {
      alert('투두리스트 삭제하기 처리');
    }

    //        description: 내가 참여한 스터디방 정보 탭 렌더링       //
    const tabContArr = studyRoomInfoList.map((tab, index) => (
      {
        tabTitle: (
          <div className={activeTabIndex===index ? "tab-selected" : "tab"} onClick={()=>tabClickHandler(index)}>{tab.studyName}</div>
        ),
        tabCont: (
          <div className='tap-panel'>
            <div className='my-study-room-info-left-box'>
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
                  {tab.myGrade === '방장' && (
                  <div className='study-next-start-datetime-update-button' onClick={onNextStudyMeetingDayUpdateButtonClickHandler}>{'수정'}</div>
                  )}
                </div>

                {tab.myGrade === '일반' && (
                  <div className='study-leave-button' onClick={onStudyRoomLeaveButtonClickHandler}>{'방 퇴장하기'}</div>
                )}
              </div>
            </div>

            <div className='my-study-room-info-middle'>
              <div className='my-study-room-info-middle-up-box'>
                <div className='study-progress-rate-box'>
                  <div className='study-progress-rate-title'>{'스터디 진행률'}</div>
                  {<ProgressBar percentage={((tab.studyProgressRate / tab.studyPeriod) * 100)}/>}
                  <div className='study-date-box'>
                    <div className='study-start-date-text'>{`시작일 : ${tab.studyStartDate}`}</div>
                    <div className='study-end-date-text'>{`종료일 : ${tab.studyEndDate}`}</div>
                  </div>
                </div>
              </div>

              <div className='my-study-room-info-middle-down-box'>
                <div className='study-attendance-rate-box'>
                  <div className='study-attendance-rate-title'>{'스터디 내 출석률'}</div>
                  <div className='study-attendance-box'>

                    <div className='total-study-days-box'>
                      <div className='total-study-days-title'>{'총 스터디 일수'}</div>
                      <div className='total-study-days-text'>{`${tab.studyTotalDays}회`}</div>
                    </div>

                    <div className='attend-study-days-box'>
                      <div className='attend-study-days-title'>{'참석일수'}</div>
                      <div className='attend-study-days-text'>{`${tab.studyAttendDays}회`}</div>
                    </div>
                      
                    <div className='late-study-days-box'>
                      <div className='late-study-days-title'>{'지각일수'}</div>
                      <div className='late-study-days-text'>{`${tab.studyLateDays}회`}</div>
                    </div>

                    <div className='absent-study-days-box'>
                      <div className='absent-study-days-title'>{'결석일수'}</div>
                      <div className='absent-study-days-text'>{`${tab.studyAbsentDays}회`}</div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            
            <div className='my-study-room-right-box'>
              <div className='study-todolist-box'>
                <div className='study-todolist-inner-box'>
                  <div className='study-todolist-title'>{'Study To Do'}</div>
                  <div className='study-todolist-detail-box'>
                    <Scrollbars
                      renderTrackVertical={props => <div {...props} className="track-vertical"/>}
                      renderThumbVertical={props => <div {...props} className="thumb-vertical"/>}>
                        <div className='study-todolist-blank'></div>
                        {tab.studyRoomToDoList.map((item, todoIndex) => (
                          <div className={tab.studyRoomToDoList.length - 1 === todoIndex ? 'study-todolist-detail-rast' : 'study-todolist-detail'} key={item[0]}>

                            {tab.myGrade === '방장' ? 
                              <div className='study-todolist-check-icon-box' onClick={() => onStudyToDoListCheckClickHandler(tab.studyNumber, item[0])}>
                                <div className={item[2] ? 'todolist-check-icon' : 'todolist-non-check-icon'}></div>
                              </div>
                            : 
                              <div className='study-todolist-check-icon-non-hover-box'>
                                <div className={item[2] ? 'todolist-check-icon' : 'todolist-non-check-icon'}></div>
                              </div>
                            }

                            <div className={item[2] ? 'study-todolist-detail-text-ok' : 'study-todolist-detail-text'}>
                              <div className='study-todolist-detail-textvalue'>{item[1]}</div>
                            </div>
                          </div>
                        ))}
                        <div className='study-todolist-blank'></div>
                    </Scrollbars>
                  </div>
                </div>
              </div>
              <div className='my-study-room-right-button-box'>
                <div className='study-view-data-button' onClick={onStudyMaterialViewButtonClickHandler}>
                  <div className='study-view-data-button-text'>{'스터디 자료 보기'}</div>
                </div>
                <div className='study-start-button' onClick={onStudyStartButtonClickHandler}>
                  <div className='study-start-button-text'>{'스터디 시작 하기'}</div>  
                </div>
              </div>
            </div>
          </div>
        ),
      }
    ));

    //        render: 메인 상단 컴포넌트 렌더링       //
    return (
      <div id='main-top-wrapper'>
        <div className='main-top-container'>
          <div className='main-top-up-box'>
            <div className='main-top-up-box-studyroom-text'>{'내가 참여한 스터디방 정보'}</div>
            {count === 0 ? (
            <div className='main-top-up-box-studyroom-tab'>
              <div className='tab-list'>
                <div className='tab-selected'>{'새로운 스터디 참여하기'}</div>
              </div>
              <div className='tap-panel-nothing-box'>
                <div className='my-study-room-nothing-box'>
                  <div className='my-study-room-nothing-message'>{'참여한 스터디 방이 없습니다!'}</div>
                  <div className='my-study-room-nothing-button-box'>
                    <div className='my-study-room-nothing-button-box-text'>{'스터디 검색하기'}</div>
                  </div>
                </div>
              </div>
            </div>
            ) : (
            <div className='main-top-up-box-studyroom-tab'>
              <div className='tab-list'>
                {tabContArr.map((section)=>{
                    return section.tabTitle
                })}
              </div>
              {tabContArr[activeTabIndex].tabCont}
            </div>
            )}
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
                  <div className='main-top-down-todolist-add-button' onClick={onMyToDoListAddClickHandler}>
                    <div className='main-top-down-todolist-icon-box'>
                      <div className='todolist-add-icon'></div>
                    </div>
                    <div className='main-top-down-todolist-add-button-text' >{'To Do 추가하기'}</div>
                  </div>
                  <div className='main-top-down-todolist-delete-button' onClick={onMyToDoListDeleteClickHandler}>
                    <div className='main-top-down-todolist-icon-box'>
                      <div className='todolist-delete-icon'></div>
                    </div>
                    <div className='main-top-down-todolist-delete-button-text'>{'To Do 삭제하기'}</div>
                  </div>
                </div>

                <InputBox type={'text'} placeholder='TO DO LIST 입력중입니다....' value={inputMyToDoList} setValue={setInputMyToDoList} />

                <div className='main-top-down-todolist-detail-box'>
                    <Scrollbars
                      renderTrackVertical={props => <div {...props} className="track-vertical"/>}
                      renderThumbVertical={props => <div {...props} className="thumb-vertical"/>}>
                      <div className='main-top-down-todolist-blank'></div>
                        {myToDoList.map((MyToDoItem, index) => <MyToDoListItem myToDoItem={MyToDoItem} index={index} listNumber={myToDoList.length - 1} />)}
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

    //          state: 추천 스터디 top5 리스트 상태          //
    const [recommendationStudyList, setRecommendationStudyList] = useState<StudyRoomItem[]>([]);

    //          effect: 컴포넌트 마운트 시 추천 스터디 top5 리스트 불러오기          //
    useEffect(() => {
      // TODO: API 호출로 변경
      setRecommendationStudyList(recommendationStudyListMock);
    }, []);

    //        render: 메인 중단 컴포넌트 렌더링       //
    return (
      <div id='main-middle-wrapper'>
        <div className='main-middle-box'>
          <div className='main-middle-box-recommend-studyroom-text'>{'추천 스터디'}</div>
          <div className='main-middle-box-recommend-studyroom'>
            {recommendationStudyList.map(StudyRoomItem => <RecommendationStudyListItem studyRoomItem={StudyRoomItem} />)}
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
