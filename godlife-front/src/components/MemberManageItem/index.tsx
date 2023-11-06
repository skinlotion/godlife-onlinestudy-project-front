import React, { useEffect, useState } from 'react';
import './style.css';
import { UserGradeList } from 'types';

//           interface: 멤버 관리 리스트 아이템 컴포넌트 Props           //
interface Props {
    userGradeList: UserGradeList;
}

//           component: 멤버 관리 리스트 아이템 컴포넌트           //
export default function MemberManageList({ userGradeList }: Props) {

    //           state: 프로필 이미지 상태           //
    const [profileImage, setProfileImage] = useState<string | null>('');
    //           state: Properties           //
    const {userNickname, userProfileImageUrl, userGrade} = userGradeList;

    const masterIcon = userGrade === '방장' ? (
        <div className='master-icon'></div>
    ) : null;

    useEffect(() => {
        if (userProfileImageUrl) {
            setProfileImage(userProfileImageUrl);
        }
    }, [userProfileImageUrl]);

    //           render: 멤버 관리 리스트 아이템 렌더링           //
    return (
        <div className='member-manage-user-list-box'>
            <div className='member-manage-user-info-box'>
                <div className='member-manage-user-profile-icon-box'>
                    <div className='member-manage-user-profile-icon'></div>
                    {profileImage === '' ? 
                    <div className='member-manage-user-profile-default-image'></div> 
                    : <div className='member-manage-user-profile-image' style={{ backgroundImage: `url(${profileImage})` }}></div>}
                </div>
                <div className='member-manage-user-nickname-box'>
                    {masterIcon}
                    <div className='member-manage-user-nickname-text'>{userNickname}</div>
                </div>
            </div>
            <div className='member-manage-user-authority-exit-box'>
                <div className='member-manage-user-authority-box'>
                    <div className='member-manage-user-authority-text'>{userGrade}</div>
                </div>
                <div className='member-manage-user-exit-box'>
                    <div className='member-manage-user-exit-text'>{'강제 퇴장'}</div>
                </div>
            </div>
        </div>
    );
}
