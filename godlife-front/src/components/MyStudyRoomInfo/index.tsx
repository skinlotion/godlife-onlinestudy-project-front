import React, { ChangeEvent, Dispatch, KeyboardEvent, SetStateAction, forwardRef } from 'react';
import './style.css';

//          interface: InputBox 컴포넌트 Props          //
interface Props {
    label: string;
    type: 'text' | 'password';
    // error: boolean;
    placeholder: string;
    value: string;
    setValue:Dispatch<SetStateAction<string>>
    icon?: string;
    // errorMessage?: string;
    onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
    onButtonClick?: () => void;
}

//          component: InputBox 컴포넌트            //
const InputBox = forwardRef<HTMLInputElement, Props>((props: Props, ref) => {

    //          state: Properties           //
    const { label, type, placeholder, value, icon } = props;
    const { setValue, onKeyDown, onButtonClick } = props;

    //          event handler: input 값 변경 이벤트 처리            //
    const onInputValueChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setValue(value);
    }

    //          event handler: input 값 변경 이벤트 처리            //
    const onKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (!onKeyDown) return;
        onKeyDown(event);
    }

    //          render: InputBox 렌더링         //
    return (
        <div className='inputbox'>
            <div className='inputbox-container'>
                <input ref={ref} className='input' type={type} placeholder={placeholder} value={value} onChange={onInputValueChangeHandler} onKeyDown={onKeyDownHandler} />
                {label === '로그인' && (
                    <div className='icon-image'>
                        <div className={icon}></div>
                    </div>
                )}
                {label === '비밀번호' && onButtonClick !== undefined && (
                    <div className='icon-button' onClick={onButtonClick}>
                        {icon !== undefined && <div className={icon}></div>}
                    </div>
                )}
                
            </div>
        </div>
    );
});

export default InputBox;
