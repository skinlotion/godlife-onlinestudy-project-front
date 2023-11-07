import './style.css';
import  dayjs from 'dayjs';
import ModalSideMenu from 'components/ModalSideMenu';
import React, { useState,useRef,  useEffect, ChangeEvent  } from 'react';
import Scrollbars from 'react-custom-scrollbars-2';

export default function StudyDate(){

    // state : 스터디 시간 미설정에 대한 오류 여부  상태 //
    const [timeErrer, setTimeError] = useState<boolean>(false);

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };
  
    // component :   스터디 경고 메시지 컴포넌트  //
    const StudyAlertCard = () => {

        // state : 스터디 일정 에러 여부 //
        const [dateError, setDateError] = useState<boolean>(false);

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

    // component : 시작 시간(hour) 선택 콤보 박스 컴포넌트   //
    const StartHourDropDownBox = () =>{

        //          state: 박스 상태          //
        const [isOpen, setIsOpen] = useState(false);
        //          state: 박스 선택 상태          //
        const [selectedItem, setSelectedItem] = useState<string | null>(null);
        //          state: 박스 드롭다운 ref 상태          //
        const dropdownRef = useRef<HTMLDivElement | null>(null);


        //          event handler: 시작시간 박스  열기 클릭 이벤트 처리          //
        const toggleDropdownClickHandler = () => {
            setIsOpen(!isOpen);
        };

        //          function: 박스 항목 선택 호출 함수          //
        const selectItem = (item: string) => {
            setSelectedItem(item);
            setIsOpen(false);
        };


        //          effect: 박스가 아닌 다른 곳을 클릭하면 박스가 사라지게 하기          //
        useEffect(() => {
            function handleClickOutside(event: MouseEvent) {
                if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                    setIsOpen(false);
                }
            }

            document.addEventListener('click', handleClickOutside);
            return () => {
                document.removeEventListener('click', handleClickOutside);
            };
        }, []);

        // description :   스터디 시작  시간(hour) 선택 항목 생성           //
        const items = [];
        for (let i = 0; i <= 11; i++) {
            items.push(`${i}`);
        }

        //          event handler: 스터디 시간 설정 클릭 이벤트 처리          //
        const startHourChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
            if(!event.target.value ){ 
                setTimeError(true);
                return;
            }
            const startHour  = event.target.value;
            setSelectedItem(startHour);
        };
        
        //          render: DropDown 스터디 시작 시간(hour) 설정 렌더링          //
        return (
            <div ref={dropdownRef} className='dropdown-study-people-set-box'>
                <div className='study-hour-select'onChange={startHourChangeHandler} >{selectedItem}</div>
                <div className='down-icon-box'  onClick={toggleDropdownClickHandler}>
                    <div className='down-icon'></div>
                </div>
                {isOpen && (
                    <div className='dropdown-study-people-set-list'>
                        <Scrollbars 
                            renderTrackVertical={(props) => <div {...props} className='track-people-set-vertical' />} 
                            renderThumbVertical={(props) => <div {...props} className='thumb-people-set-vertical' />}>
                            {items.map((item) => (
                                <div className='dropdown-study-people-set-list-index' key={item} onClick={() => selectItem(item)}>
                                    {item}
                                </div>
                            ))}
                        </Scrollbars>
                    </div>
                )}  
            </div>
        );
    }



  // render : 다음 스터디 일저 렌더링 //
  return (
    <div id='notice-wrapper'>
       <div className="notice-card">
           <ModalSideMenu/>
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