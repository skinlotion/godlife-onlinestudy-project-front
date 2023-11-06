import './style.css';
import  dayjs from 'dayjs';

import React, { useState } from 'react';

export default function StudyDate(){

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };
  
  // component : 시간 선택 콤보 박스 //
  const HourComboBox = () => {

    return(
        <div className='study-box-wrapper'>
            <div className="study-hour-select">
                {isClicked && (
                    <div>
                        <select className='select-size'>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                )}
            </div>

            { !isClicked &&
            <div className='study-hour-icon-box' onClick={handleClick}>
                <div className="study-hour-icon" ></div>
            </div>
            }
        </div>
    )
  }
  // component :   스터디 경고 메시지 컴포넌트  //
  const StudyAlertCard = () => {

    // state : 스터디 일정 에러 여부 //

    return(
        <div className='study-date-contents-box'>
            <div className='study-date-contents-icon'></div>
        {   
            <div className="study-date-contents-message">{'캘린더에서 다음 스터디 일정을 선택해주세요!'}</div>
            // <div className='study-date-contents-error-message'>{'캘린더에서 다음 스터디 일정을 선택해주세요!'}</div>
        }   
        </div>
    )
  }

  // component : 캘린더 설정 컴포넌트 //
  const CalendarCard = () => {

    // state :              //

    return(
        <div className='study-date-set-box'>
            <div className="study-date-schedule">{`스터디 일정 : 00 00 00`}</div>
            <div className="study-date-hour-box">
                <div className="study-date-hour-title">{'스터디 시간: '}</div>
                <HourComboBox/>
                <div className='division'>{':'}</div>
                <HourComboBox/>
                <div className="between">{'~'}</div>
                <HourComboBox/>
                <div className='division'>{':'}</div>
                <HourComboBox/>
            </div>
        </div>
    )
  }


  // render : 다음 스터디 일저 렌더링 //
  return (
    <div id='notice-wrapper'>
       <div className="notice-card">
           <div className='menu-sidebar'>
            {
                <div className="menu-room">방 설정</div>
                // <div className='menu-room-default'></div>
            }
            {
                // <div className="menu-member">멤버 관리</div>
                <div className="menu-member-default">멤버 관리</div>   
            }
            {
                // <div className="menu-study">{'다음 스터디 설정'}</div>
                <div className='menu-study-default'>{'다음 스터디 설정'}</div>
            }
            {
                // <div className="menu-material">자료관리</div>
                <div className="menu-material-default">자료관리</div>
            }
            </div>
            <div className="notice-button-box">
                <button type="button" className="btn btn-primary" disabled data-bs-toggle="button">X</button>        
            </div>
            <div className='room-box'>
                <div className='room-name'>스터디 방 이름</div>
                <div className='room-schedule'>스터디 일정</div>
                <div className='room-date-set-box'>
                    <div className="room-date-control"></div>
                    <div className="room-date-contents">
                        <div className='next-study-date'>다음스터디 날짜</div>
                        <div className='study-date-box'>
                            {
                                // <StudyAlertCard/> 
                                <CalendarCard/>
                            }

                        </div>
                        {
                            <div className='study-hour-error'>스터디 시간을 입력해야 합니다.</div>}
                    </div>
                </div>
                <div className='insert-box'>입력하기</div>
            </div>    
        </div>
  </div>
  );
}