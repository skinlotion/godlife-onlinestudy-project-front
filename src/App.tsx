import React from 'react';
import { Outlet, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import './views/Authentication/soo/style.css';
import { LOGIN_FIND_PATH } from './constant';
import MyPage from 'views/MyPage';
import './views/MyPage/style.css';
import StudyCreate from 'views/StudyCreate';
import './components/Dropdown1Category/style.css';
import HostNoticeItem from 'components/HostNoticeItem';
import { StudyNoticeMock, studyListMock } from 'mocks';
import { StudyListItem, StudyNoticeListItem } from 'types';
import HostNoticeItemNoticeManageModal from 'views/HostNoticeManageModal';
import NoticeModal from 'views/NoticeModal';
import HostToDoListManageModal from 'views/HostToDoListManageModal';
import ToDoList from 'views/ToDoListModal';
import StudyDate from 'views/StudyDateModal';
import StudyModifyModal from 'views/StudyModifyModal';
import Authentication from './views/Authentication';
import { AUTH_PATH } from './views/constant';
import { SEND_EMAIL_PATH } from './constant';
import ResetPasswordModal from './views/MypageResetPasswordModal';
import ManinpagePublicStudyRoomJoinModal from './views/MainpagePublicStudyRoomJoinModal';
import ManinpagePriavateStudyRoomJoinModal from './views/MainpagePrivateStudyRoomjoinModal';

interface Props {
  studyListItem: StudyListItem;
}


function App() {
  
  const studyItem = studyListMock.find((item) => item.studyNumber === 1);

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
       <StudyModifyModal studyListItem={studyItem} />
       {/* <ManinpagePriavateStudyRoomJoinModal/> */}
    </div>
  );
}

export default App;
