import React, { ChangeEvent, Dispatch, KeyboardEvent, SetStateAction, forwardRef } from 'react';
import './style.css';

//          interface: MyToDoListInputBox 컴포넌트 Props          //
interface Props {
    type: 'text';
    placeholder: string;
    value: string;
    setValue:Dispatch<SetStateAction<string>>
}

//          component: InputBox 컴포넌트            //
const MyToDoListInputBox = forwardRef<HTMLInputElement, Props>((props: Props, ref) => {

    //          state: Properties           //
    const { type, placeholder, value } = props;
    const { setValue } = props;

    //          event handler: input 값 변경 이벤트 처리            //
    const onInputValueChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setValue(value);
    }

    //          render: InputBox 렌더링         //
    return (
        <div className='inputbox'>
            <div className='inputbox-container'>
                <input ref={ref} className='input' type={type} placeholder={placeholder} value={value} onChange={onInputValueChangeHandler} />
            </div>
        </div>
    );
});

export default MyToDoListInputBox;
