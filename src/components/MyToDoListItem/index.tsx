import React, { useState } from "react";
import './style.css';
import { MyToDoItem } from "../../types";
import { useNavigate } from "react-router-dom";
import { myToDoListMock } from "../../mocks";

//              interface: 나의 투두 리스트 아이템 컴포넌트 Props               //
interface Props {
    myToDoItem: MyToDoItem;
    index: number;
    listNumber: number;
}

//              component: 나의 투두 리스트 아이템 컴포넌트             //
export default function MyToDoListItem({ myToDoItem, index, listNumber }: Props) {

    //              state: Properties               //
    const { userListNumber, userListContent, userListCheck } = myToDoItem;

    //              state: 체크박스 선택 상태               //
    const [isChecked, setIsChecked] = useState<boolean>(userListCheck);

    //              render: 나의 투두리스트 아이템 컴포넌트 렌더링             //
    return (
        <div className={listNumber === index ? 'main-top-down-todolist-detail-rast' : 'main-top-down-todolist-detail'} key={userListNumber}>
            <div className='main-top-down-todolist-check-icon-box' onClick={() => setIsChecked(!isChecked)}>
                <div className={isChecked ? 'todolist-check-icon' : 'todolist-non-check-icon'}></div>
            </div>
            <div className={isChecked ? 'main-top-down-todolist-detail-text-ok' : 'main-top-down-todolist-detail-text'}>
                <div className='main-top-down-todolist-detail-textvalue'>{userListContent}</div>
            </div>
        </div>
    );
}