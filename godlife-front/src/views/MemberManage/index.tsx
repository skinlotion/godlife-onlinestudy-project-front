import React from 'react';
import './style.css';
import { userGradeListMock } from 'mocks';
import MemberManageList from 'components/MemberManageItem';
import { Scrollbars } from 'react-custom-scrollbars-2';

//           component: 멤버 관리 리스트 컴포넌트           //
export default function MemberManage() {
    
    //           render: 멤버 관리 리스트 컴포넌트 렌더링           //
    return (
        <div id='member-manage-wrapper'>
            <div className='member-manage-card'>
                <div className='member-button-box'>
                    <button type='button' className='btn btn-primary' disabled data-bs-toggle='button'>X</button>
                </div>
                <div className='member-manage-main-box'>
                <Scrollbars renderTrackVertical={(props) => <div {...props} className='member-manage-track-vertical' />} 
                renderThumbVertical={(props) => <div {...props} className='member-manage-thumb-vertical' />}>
                    {userGradeListMock.map((userGradeListItem) => (
                    <MemberManageList userGradeList={userGradeListItem} />
                    ))}
                </Scrollbars>
                </div>
            </div>
        </div>
    );
}
