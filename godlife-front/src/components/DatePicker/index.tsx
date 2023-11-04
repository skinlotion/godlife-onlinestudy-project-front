import React, { useEffect } from 'react';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from "date-fns/esm/locale";
import './style.css';

const DatePickerComponent = () => {
    const [startDate, setstartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);

    const startDateHandle = (date: Date | null) => {
        setstartDate(date);
    };
    const endDateHandle = (date: Date | null) => {
        setEndDate(date);
    };

    return (
        <div className='datepicker-box'>
            <div className='start-date-box'>
                <DatePicker className='start-date' showPopperArrow={false} locale={ko} 
                selected={startDate} onChange={startDateHandle} closeOnScroll={true} minDate={new Date()} dateFormat='yyyy년 MM월 dd일' dateFormatCalendar='yyyy년 MM월'
                placeholderText='스터디 시작일을 선택해주세요.' />
            </div>
            <div className='end-date-box'>
                <DatePicker className='end-date' showPopperArrow={false} locale={ko} 
                selected={endDate} onChange={endDateHandle} closeOnScroll={true} minDate={startDate} dateFormat='yyyy년 MM월 dd일' dateFormatCalendar='yyyy년 MM월' 
                placeholderText='스터디 종료일을 선택해주세요.' />
            </div>
        </div>
    );
};

export default DatePickerComponent;