import React from "react";
import './style.css';
import { StudyRoomItem } from "../../types";
import DefaultStudyCoverImage from "../../assets/study-default-icon.png";

//              interface: 추천 스터디 Top5 리스트 아이템 컴포넌트 Props               //
interface Props {
    studyRoomItem: StudyRoomItem;
}

//              component: 추천 스터디 Top5 리스트 아이템 컴포넌트             //
export default function RecommendationStudyListItem({ studyRoomItem }: Props) {

    //              state: Properties               //
    const { studyNumber, studyName, studyEndDate, studyPersonnel, studyCoverImageUrl } = studyRoomItem;

    //              render: 추천 스터디 Top5 리스트 아이템 컴포넌트 렌더링             //
    return (
        <div className='main-middle-box-studyroom-data' style={{backgroundImage: `url(${studyCoverImageUrl ? studyCoverImageUrl : DefaultStudyCoverImage})` }}>
            <div className='main-middle-box-studyroom-deadline-time'>{`스터디 마감 시간 : ${studyEndDate}`}</div>
            <div className='main-middle-box-studyroom-participation-number'>{`스터디 참여자 수 : ${studyPersonnel}명`}</div>
            <div className='main-middle-box-studyroom-title'>{studyName}</div>
        </div>
    );
}