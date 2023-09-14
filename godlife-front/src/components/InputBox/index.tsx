import React, { Dispatch, KeyboardEvent, SetStateAction, forwardRef } from 'react';
import './style.css';

//          interface: InputBox 컴포넌트 Props          //
interface Props {
    type: 'text' | 'password';
    error: boolean;
    placeholder: string;
    value: string;
    setValue:Dispatch<SetStateAction<string>>
    icon?: string;
    errorMessage?: string;
    onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
    onButtonClick?: () => void;
}

//          component: InputBox 컴포넌트            //
const InputBox = forwardRef<HTMLInputElement, Props>((props: Props, ref) => {

    //          state: Properties           //
    const { type, error, placeholder, value, icon, errorMessage } = props;
    const { setValue, onKeyDown, onButtonClick } = props;

    //          render: InputBox 렌더링         //
    return (
        <div className='inputbox'>
            <div className='inputbox-container'>
                <input ref={ref} className='input' type={type} placeholder={placeholder} value={value}/>
            </div>
        </div>
    );
});

export default InputBox;
