import React, { ChangeEvent, Dispatch, KeyboardEvent, MutableRefObject, SetStateAction, forwardRef, useRef } from 'react';
import './style.css';
  
  //          interface: SearchInput 상자 컴포넌트 Props          //
  interface Props {
    type: 'text';
    placeholder: string;
    value: string;
    icon?: string; //아이콘은 필수가 아니기 때문에 선택자 '?'로 지정
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
    onButtonClick?: () => void; //버튼이 없을 수도 있기 때문에 "
  }
  
  //          component: SearchInput 상자 컴포넌트          //
  const SearchInputBox = forwardRef<HTMLInputElement, Props>((props: Props, ref) => {
    //          state: Properties         //
    const { type, placeholder, value, icon } = props;
    const { onChange, onKeyDown, onButtonClick } = props;
  
    //          render: SearchInput 상자 렌더링         //
    return (
      <div className='search-inputbox'>
        <div className='search-inputbox-container'>
          <input ref={ref} className='search-input' type={type} placeholder={placeholder} value={value} onChange={onChange} onKeyDown={onKeyDown} />
            <div className='icon-button' onClick={onButtonClick}>
              <div className={icon}></div>
            </div>
        </div>
      </div>
    );
  });
  
  export default SearchInputBox;