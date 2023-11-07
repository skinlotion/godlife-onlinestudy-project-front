import React, { useState } from "react";
import './style.css';
import { MyStudyRoomInfoItem } from "../../types";

//              interface: 내가 참여한 스터디 방 리스트 아이템 컴포넌트 Props               //
interface Props {
    myStudyRoomInfoItem: MyStudyRoomInfoItem;
    index: number;
}

//              component: 내가 참여한 스터디 방 리스트 아이템 컴포넌트             //
export default function MyStudyRoomInfoListItem({ myStudyRoomInfoItem, index }: Props) {

    //        state: 탭 인덱스 상태       //
    const [activeTabIndex, setActiveTabIndex]=useState<number>(0);

    //              state: Properties               //
    const { studyNumber, studyName, studyCategory1, studyPersonnel, myGrade, studyNextStartDatetime} = myStudyRoomInfoItem;
    const { studyStartDate, studyEndDate, studyProgressRate, studyPeriod } = myStudyRoomInfoItem;
    const { studyTotalDays, studyAttendDays, studyAbsentDays, studyLateDays } = myStudyRoomInfoItem;
    const { studyRoomToDoList } = myStudyRoomInfoItem;

    //        event handler: 탭 버튼 클릭 이벤트 처리       //
    const tabClickHandler=(index: React.SetStateAction<number>)=>{
        setActiveTabIndex(index);
    };

    //              render: 내가 참여한 스터디 방 리스트 아이템 컴포넌트 렌더링             //
    return (
        // {
            // tabTitle: (
                <div className={activeTabIndex===index ? "tab-selected" : "tab"} onClick={()=>tabClickHandler(index)}>{studyNumber}</div>
            // ),
            // tabCont: (
                // <div className='my-study-room-info-right-box'>
                //     <div className='my-study-room-info-box'>
                //     <div className='participation-study-name-box'>
                //         <div className='participation-study-name'>{'참여 스터디 이름'}</div>
                //         <div className='participation-study-name-text'>{studyName}</div>
                //     </div>

                //     <div className='study-category-box'>
                //         <div className='study-category'>{'스터디 카테고리'}</div>
                //         <div className='study-category-text'>{studyCategory1}</div>
                //     </div>

                //     <div className='participation-personnel-box'>
                //         <div className='participation-personnel'>{'참여인원'}</div>
                //         <div className='participation-personnel-text'>{studyPersonnel}</div>
                //     </div>

                //     <div className='my-grade-box'>
                //         <div className='my-grade'>{'내 등급'}</div>
                //         <div className='my-grade-text'>{myGrade}</div>
                //     </div>

                //     <div className='study-next-start-datetime-box'>
                //         <div className='study-next-start-datetime'>{'다음 스터디 모임 날짜'}</div>
                //         <div className='study-next-start-datetime-text'>{studyNextStartDatetime}</div>
                //         {myGrade === '방장' && (
                //         <div className='study-next-start-datetime-update-button'>{'수정'}</div>
                //         )}
                //     </div>

                //     {myGrade === '일반' && (
                //         <div className='study-leave-button'>{'방 퇴장하기'}</div>
                //     )}
                //     </div>
                // </div>
        //     ),
        // }
    );
}