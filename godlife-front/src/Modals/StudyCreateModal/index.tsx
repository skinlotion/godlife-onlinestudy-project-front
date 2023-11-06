import { ChangeEvent, useState } from 'react';
import './style.css';
import DropDownFirstCategory from 'components/Dropdown1Category';
import ModalSideMenu from './../../components/ModalSideMenu/index';



export default function Search(){
  
  // state : 스터티 참여 가능 인원수  //
  const [studyCount, setStudyCount] = useState<number>(0); 

  const [selectedItem, setSelectedItem] = useState('');

  // event handler : 참여 인원 추가  처리 //
  const onPlusCountHandler = () =>{
    let count = studyCount;
    count++;
    setStudyCount(count);
}
  // event handler : 참여 인원 감소 버튼 처리 //
  const onMinusCountHandler = () =>{
    
  }
  
  //          event handler: 스터디 커버 이미지 클릭 이벤트 처리          //
  const onStudyCoverImageClickHandler = () => {
    if (!fileInputRef.current) return;
    fileInputRef.current.click();
  }
  
  // render : 스터디 재설정 페이지   렌더링 //
  return (
    <div id='reset-wrapper'>
      <div className='reset-card'>
        <ModalSideMenu/>
        <div className="reset-button-box">
          <button type="button" className="btn btn-primary" disabled data-bs-toggle="button">X</button>        
        </div>
        <div className='reset-control-box'>
          <div className='study-title-container'>
            <div className='study-title'>*스터디 제목</div>
            <input type="text" className='study-title-write' />            
          </div>
          <div className='study-title-write-error-box'>
            <div className='study-title-write-error-message'>최소 2글자 이상 입력해주세요</div>
          </div>
          <div className='study-period-container'>
            <div className='study-period-title'>*스터디 기간</div>
            <div className="study-period-end-date-title">종료일</div>
            <div className="study-period-end-date">
              <div className="study-period-end-date-data">{'2023.00.00'}</div>
            </div>
            <div className="study-period-end-date-icon"></div>
          </div>
          <div className='study-count-setting'>
            <div className="study-count-title">*스터디 인원 설정</div>
            <div className="study-count-add-icon" onClick={onPlusCountHandler}></div>
            <div className="study-count-contents">{studyCount}</div>
            <div className="study-count-minus-icon"></div>
            {
              <div className="study-count-error-message">{'방참여 인원보다 내려갈 수 없습니다. '}</div>
            }            
          </div>
          <div className='study-category-container'>
            <div className="study-category-title">*스터디 카테고리</div>
            <DropDownFirstCategory/>
          </div>
          <div className='study-open-container'>
            <div className='study-open-title'>*스터디 공개방, 비공개방</div>
            <button className='study-open'>공개</button>
            <div className='study-close-box'>
              <button className='study-close'>비공개</button>  
              <div className='study-close-password'>
                <input className='study-close-password-write' type="text" />
                <div className='password-icon'></div>
              </div>
            </div>
            
          </div>
          <div className='study-cover-image-box'>
            <div className='study-cover-image-title'>스터디 커버 이미지</div>
            <div className='study-cover-image-contents'>
              <img src="" alt="" />
              <button className='change-controll'>변경</button>
            </div>
          </div>  
        </div>
        <div className='reset-button-box reset-button'>

        </div>
      </div>
    </div>
  )
}