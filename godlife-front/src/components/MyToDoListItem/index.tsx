import React, { useState } from "react";
import './style.css';
import { MyToDoItem } from "../../types";
import { useNavigate } from "react-router-dom";
import { myToDoListMock } from "../../mocks";

//              interface: 나의 투두 리스트 아이템 컴포넌트 Props               //
interface Props {
    myToDoItem: MyToDoItem;
    index: number;
}

//              component: 나의 투두 리스트 아이템 컴포넌트             //
export default function MyToDoListItem({ myToDoItem, index }: Props) {

    //              state: Properties               //
    const { userListNumber, userListContent, userListCheck } = myToDoItem;

    // //              function: 네비게이트 함수               //
    // const navigator = useNavigate();

    // //        event handler: 추천 스터디 클릭 이벤트 처리 함수       //
    // const onRecommendationStudyClickHandler = () => {
    //     navigator(STUDYROOM_DETAIL_PATH(studyNumber));
    // }
    //        event handler: 나의 투두리스트 체크 클릭 이벤트 처리       //


        // //        event handler: 스터디 To Do List Check 클릭 이벤트 처리       //
        // const handleToggle = (studyNumber: number, todoId: number) => {
        //     const updatedStudyRoomInfoList = studyRoomInfoList.map((study) => {
        //       if (study.studyNumber === studyNumber) {
        //         const updatedToDoList = study.studyRoomToDoList.map((todo) => {
        //           if (todo[0] === todoId) {
        //             return [todo[0], todo[1], !todo[2]];
        //           }
        //           return todo;
        //         });
        //         return { ...study, studyRoomToDoList: updatedToDoList };
        //       }
        //       return study;
        //     });
        //     setStudyRoomInfoList(updatedStudyRoomInfoList);
        //   };

    //              render: 추천 스터디 Top5 리스트 아이템 컴포넌트 렌더링             //
    return (
        <div className={MyToDoListItem.length - 1 === index ? 'main-top-down-todolist-detail-rast' : 'main-top-down-todolist-detail'} key={userListNumber}>
            <div className='main-top-down-todolist-check-icon-box' onClick={() => handleToggle(userListNumber)}>
                <div className={userListCheck ? 'todolist-check-icon' : 'todolist-non-check-icon'}></div>
            </div>
            <div className={userListCheck ? 'main-top-down-todolist-detail-text-ok' : 'main-top-down-todolist-detail-text'}>
                <div className='main-top-down-todolist-detail-textvalue'>{userListContent}</div>
            </div>
        </div>
    );
}