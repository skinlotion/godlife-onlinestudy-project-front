import  { Dispatch, SetStateAction, useRef, useState ,KeyboardEvent, useEffect, ChangeEvent} from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';
import { loginInfoMock } from 'mocks';
import { MAIN_PATH } from 'constant';
import Inputbox from 'components/Inputbox/Inputbox';



// ! 1-2-3, 3-1-1, 3-1-2 : 비밀번호 재입력 페이지 
// ! 1-2-3-0   초기화면
// ! 1-2-3-1  비밀번호 길이 에 대한 오류  
// ! 3-1-1  등록된 비밀번호 와 입력된 비밀번호 일치
// ! 3-1-2   너무 많이 사용된 비밀번호 표시 


//!  박스내부 margin gap(위 ,아래) : 10 30 15 15 32 ?


export default function Authentication() {

    // state : password //
    const [password, setPassword] = useState<string>('');
    // state : 비밀번호 타입
    const [passwordType, setPasswordType] = useState< 'text' | 'password'>('text');
    //          state: 비밀번호 입력 요소 참조 상태          //
    // const passwordRef = useRef<HTMLInputElement | null>(null);
    // state : passwordicon 상태 //
    const [passwordIcon, setPasswordIcon] = useState<'eye-on-icon' | 'eye-off-icon'>('eye-off-icon');
    const [passwordlengthError, setPasswordlengthError] = useState<boolean>(false);
    
    const navigator = useNavigate();

    // state : password길이     //
    const [passwordstrength, setpasswordstrength] = useState<number>(2);

    //          event handler: 비밀번호 인풋 버튼 클릭 이벤트 처리        //    
    const onPasswordIconClickHandler = () => {
      if (passwordType === 'text') {
        setPasswordType('password');
        setPasswordIcon('eye-off-icon');
      }
      if (passwordType === 'password') {
        setPasswordType('text');
        setPasswordIcon('eye-on-icon');
      }
    }      


    // function : 비밀번호 빈도 검사 함수  'https://www.mycompiler.io/view/8OG0UtxzqOA' 참고   //
    function checkPasswordStrength(password: string): number {
        // 비밀번호 길이 검사
        const lengthCheck = password.length;
        
        // 다양한 문자 유형 검사
        const hasDigit = /[0-9]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const hasUppercase = /[A-Z]/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        
        // 강도 계산
        let strength = 0;
        if (lengthCheck >= 8 ) {
            strength++;
        }
        if (hasDigit && strength === 1) {
            strength++;
        }
        if (hasLowercase  && password !== loginInfoMock.password && strength === 2 ) {
            strength++;
        }
        if (hasUppercase && password !== loginInfoMock.password && strength === 3) {
            strength++;
        }
        if (hasSpecialChar && password !== loginInfoMock.password && strength === 4) {
            strength++;
        }

        return strength;
      }


    // effect : 비밀번호 상태  변경시 비밀번호 길이 와 비밀번호 강도 변경 
    useEffect(() => {
      const passwordstrength = checkPasswordStrength(password);
      if(password.length > 0 && password.length < 8 ){
        setPasswordlengthError(true); // true or !passwordlenghError
      }
      setpasswordstrength(passwordstrength);
    } ,[password]);



    // event handler : 비밀번호 변경시 비밀번호 길이 와 비밀번호 강도 변경   
    const passwodCheckChangeHandler=(event : ChangeEvent<HTMLInputElement>)=>{
      const newPassword = event.target.value ;
      setPassword(newPassword);
      const passwordstrength = checkPasswordStrength(password);
      if(password.length > 0 && password.length < 8 ){
        setPasswordlengthError(true);
      }
      setpasswordstrength(passwordstrength);
    }
    
    // event handler : 비밀번호 입력 key down 이벤트 처리 //
    const onPasswordKeyDownHandler = (event : KeyboardEvent<HTMLInputElement>) =>{
      if(event.key !== 'Enter') return;
    }   
     

    
    
    // event handler :  계속 버튼 클릭 이벤트 처리// 
    const onNextStepButtonHandler = () => {

    
      if(passwordlengthError) return;
      if(passwordstrength < 3 ) return;
      

      navigator(MAIN_PATH);      
    };

    return (
      <div id='auth-wrapper'>
          <div className="auth-card"> 
            <div className="auth-top-box">
              <div className="auth-top-title-box">
                <div className="auth-top-title">{'갓생 살기'}</div>
              </div>
              <div className="auth-password-selection">
                <div className="auth-password-selection-message">{'새 비밀번호 선택'}</div> 
              </div>  
            </div>
            { passwordstrength === 1 &&
                <div className="password-error-message-box">
                  <div className="password-error-message-icon-box">
                    <div className="password-error-icon-container">
                      <div className="login-error-icon"></div>                        
                    </div>
                    <div className="password-error-message-container">
                      <div className="password-error-message">
                        <div className="password-error">너무 많이 사용되는 비밀번호 입니다.<br/>추측하기 어려운 비밀번호를 선택하세요. </div>
                      </div>
                    </div>
                  </div>
                </div> 
             }    
            { passwordstrength === 2 &&
                <div className="password-error-message-box">
                  <div className="password-error-message-icon-box">
                    <div className="password-error-icon-container">
                      <div className="login-error-icon"></div>                        
                    </div>
                    <div className="password-error-message-container">
                      <div className="password-error-message">
                        <div className="password-error">이전에 사용한 비밀번호입니다.<br/> 다른 비밀번호를 선택하세요. </div>
                      </div>
                    </div>
                  </div>
                </div> 
             } 
            {/* <div className="auth-middle">
              <div className="inputbox-conatainer">
                <input className='input' type="text" onKeyDown={onPasswordKeyDownHandler} onClick={onPasswordIconClickHandler} onChange={passwodCheckChangeHandler} placeholder='새 비밀번호를 입력하세요' />
                <div className="icon-box" >
                  <div className="eye-on" onClick={onPasswordIconClickHandler}></div>
                </div>
              </div>              
            </div> */}
            <Inputbox  type={passwordType} placeholder={'새 비밀번호를 입력하세요'} value={password}  setValue={setPassword} icon={passwordIcon} onKeyDown={onPasswordKeyDownHandler} onButtonClick={onPasswordIconClickHandler}/>
            
            { passwordstrength === 0 && 
              <div className="line-box-container">
                <div className="gray-line-box"></div>
                <div className="gray-line-box"></div>
                <div className="gray-line-box"></div>
                <div className="gray-line-box"></div>
                <div className="gray-line-box"></div>
              </div>
            }

            { passwordstrength === 1 && 
              <div className="line-box-container">
                <div className="red-line-box"></div>
                <div className="gray-line-box"></div>
                <div className="gray-line-box"></div>
                <div className="gray-line-box"></div>
                <div className="gray-line-box"></div>
              </div>
            }

            { passwordstrength === 2 && 
              <div className="line-box-container">
                <div className="yellow-line-box"></div>
                <div className="yellow-line-box"></div>
                <div className="gray-line-box"></div>
                <div className="gray-line-box"></div>
                <div className="gray-line-box"></div>
              </div>
            }
            
            { passwordstrength === 3 && 
              <div className="line-box-container">
                <div className="orange-line-box"></div>
                <div className="orange-line-box"></div>
                <div className="orange-line-box"></div>
                <div className="gray-line-box"></div>
                <div className="gray-line-box"></div>
              </div>
            }

            { passwordstrength === 4 && 
              <div className="line-box-container">
                <div className="light-green-line-box"></div>
                <div className="light-green-line-box"></div>
                <div className="light-green-line-box"></div>
                <div className="light-green-line-box"></div>
                <div className="gray-line-box"></div>
              </div>
            }

            { passwordstrength === 5 && 
              <div className="line-box-container">
                <div className="green-line-box"></div>
                <div className="green-line-box"></div>
                <div className="green-line-box"></div>
                <div className="green-line-box"></div>
                <div className="green-line-box"></div>
              </div>
            }



            {passwordstrength === 0 && (
              <div className="password-length-error-message-container">
                <div className="password-length-error-message">{'비밀번호는 최소 8자 이상이어야 합니다.'}</div>
              </div>    
            )}
            {passwordstrength === 1 && (
              <div className="password-length-error-message-container">
                <div className="password-length-error-message">{'약함'}</div>
              </div>    
            )}
            {passwordstrength === 2 && (
              <div className="password-length-error-message-container">
                <div className="password-length-error-message">{'보통'}</div>
              </div>    
            )}
            {passwordstrength === 3 && (
              <div className="password-length-error-message-container">
                <div className="password-length-error-message">{'좋음'}</div>
              </div>    
            )}
            {passwordstrength === 4 && (
              <div className="password-length-error-message-container">
                <div className="password-length-error-message">{'좋음'}</div>
              </div>    
            )}
            {passwordstrength === 5 && (
              <div className="password-length-error-message-container">
                <div className="password-length-error-message">{'매우 강함'}</div>
              </div>    
            )}

              
            <div className="auth-card-bottom"> 
              <div className="next-button-box" onClick={onNextStepButtonHandler}>
                <div className="next-button">{'계속'}</div>
              </div>
            </div>   
          </div>   
      </div>   
     
    )
}