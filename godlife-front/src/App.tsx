import { Outlet, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import React from 'react';
import './App.css';
import Authentication from './views/Authentication';
import { AUTH_PATH } from './views/constant';
import { SEND_EMAIL_PATH } from './constant';
import ResetPasswordModal from './views/MypageResetPasswordModal';
import ManinpagePublicStudyRoomJoinModal from './views/MainpagePublicStudyRoomJoinModal';
import ManinpagePriavateStudyRoomJoinModal from './views/MainpagePrivateStudyRoomjoinModal';

function App() {
  return (
    // <Authentication />
    // <ResetPasswordModal/>
    // <ManinpagePublicStudyRoomJoinModal/>
    <ManinpagePriavateStudyRoomJoinModal/>
  );
}

export default App;
