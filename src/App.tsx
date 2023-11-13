import React, { useRef, useState }  from 'react';
import { Outlet, Route, Router, Routes, useLocation } from 'react-router-dom';
import './App.css';
import './views/Authentication/soo/style.css';
import MyPage from 'views/MyPage';
import './views/MyPage/style.css';
import StudyCreate from 'views/StudyCreate';
import './components/Dropdown1Category/style.css';
import HostNoticeItem from 'components/HostNoticeItem';
import HostNoticeItemNoticeManageModal from 'views/HostNoticeManageModal';
import NoticeModal from 'views/NoticeModal';
import HostToDoListManageModal from 'views/HostToDoListManageModal';
import ToDoList from 'views/ToDoListModal';
import StudyDate from 'views/StudyDateModal';
import StudyModifyModal from 'views/StudyModifyModal';
import Authentication from './views/Authentication';
import { SEND_EMAIL_PATH } from './constant';
import ResetPasswordModal from './views/MypageResetPasswordModal';
import ManinpagePublicStudyRoomJoinModal from './views/MainpagePublicStudyRoomJoinModal';
import ManinpagePriavateStudyRoomJoinModal from './views/MainpagePrivateStudyRoomjoinModal';
import Header from './layouts/Header';
import Main from './views/Main';
import Footer from './layouts/Footer';
import studyListMock from 'mocks/study-list.mock';
import StudyListItem from 'types/study-list';

interface Props {
  studyListItem: StudyListItem;
}


function App() {
  
  //        state: 현재 페이지 url 상태       //
  const { pathname } = useLocation();

  //        description: 검색 버튼 Ref        //
  const searchDivRef = useRef<HTMLDivElement | null>(null);

  const onSearchMoveClickHandler = () => {
    if (!searchDivRef.current) return;
    searchDivRef.current.scrollIntoView({ behavior: 'smooth' });
  }


  const studyItem = studyListMock.find((item: any) => item.studyNumber === 1);

  if (!studyItem) {
    return null;
  }
  
  return (
    <div>
      {/* <MyPage /> */}
      {/* <StudyCreate /> */}
      {/* <HostNoticeItemNoticeManageModal /> */}
      {/* <NoticeModal /> */}
      {/* <HostToDoListManageModal /> */}
      {/* <ToDoList /> */}
      {/* <StudyDate /> */}
      {/* <StudyModifyModal studyListItem={studyItem} /> */}
      {/* <ManinpagePriavateStudyRoomJoinModal/> */}
      <Header onSearchMoveClickHandler={onSearchMoveClickHandler} />
      <Main ref={searchDivRef} />
      <Footer />
    </div>
  );
}

export default App;
