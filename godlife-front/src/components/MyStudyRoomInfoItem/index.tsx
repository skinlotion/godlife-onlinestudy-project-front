import React from "react";
import './style.css';
import { MyStudyRoomInfoItem } from "../../types";
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

//              interface: 내가 참여한 스터디 방 리스트 아이템 컴포넌트 Props               //
interface Props {
    myStudyRoomInfoItem: MyStudyRoomInfoItem;
}

//              component: 내가 참여한 스터디 방 리스트 아이템 컴포넌트             //
export default function MyStudyRoomInfoListItem({ myStudyRoomInfoItem }: Props) {

    //              state: Properties               //
    const { studyNumber, studyName, studyCategory1 } = myStudyRoomInfoItem;
    const { studyPersonnel, myGrade, studyNextStartDatetime } = myStudyRoomInfoItem;

    //              render: 내가 참여한 스터디 방 리스트 아이템 컴포넌트 렌더링             //
    return (
        // <div className="my-study-room-info-right-box">
            
        // </div>
        <></>
      );
}