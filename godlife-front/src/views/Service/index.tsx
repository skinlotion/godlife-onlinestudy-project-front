import { ChangeEvent, useEffect, useRef, useState ,MouseEvent} from 'react';
import './style.css';
import { useNavigate, useParams } from 'react-router-dom';

export default function Service(){
    //          state:  이미지 input ref 상태           //
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    
    
    //          state: 자료 이미지 상태                 //
    const [materialImageUrls, setMaterialImageUrls] = useState<string[] >([]);
    

    //          component: notice 카드 컴포넌트          //
    const NoticeCard = () =>{
  
        const contentsTextAreaRef = useRef<HTMLTextAreaElement | null>(null);
        const [contents, setContents] = useState<string>('');
    
        //          event handler: 내용 변경 이벤트 처리          //
        const onContentsChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
          const contents = event.target.value;
          setContents(contents);
          if (!contentsTextAreaRef.current) return;
          console.log(contentsTextAreaRef.current.scrollHeight);
          contentsTextAreaRef.current.focus();
          contentsTextAreaRef.current.style.height = 'auto';
          contentsTextAreaRef.current.style.height = `${contentsTextAreaRef.current.scrollHeight}px`;
        }
    
        //    render : 알림 화면 렌더링    //
        return(
          <div className="side-bar">
            <div className="alert-box">
              <div className="alert-title-1" >알림</div>
              {/* <div className="alert-title-2">알림</div> */}
              <div className="alert-message-1">채팅</div>
              {/* <div className="alert-message-2">채팅</div> */}
            </div>  
            <div className="notice-box">
              <div className="notice-contents-box">
                <div className="notice-icon"></div>
                <div className="notice-title">공지사항</div>
              </div>
              <div className="notice-message">
                
              </div>
            </div>
            <div className="list-box">
              <div className="list-contents-box">
                <div className="list-icon"></div>
                <div className="list-title">Study TO DO List</div>
              </div>
              <div className="list-message">
    
              </div>  
            </div>
            <div className="comment-box">
              <div className="comment-contents-box">
                <div className="comment-icon"></div>
                {/* host authorization   */}
                <div className="comment-title">{'1번 자료 코멘트'}</div>
                <div className="delete-icon"></div>
                {/* guest */}            
              </div>
              <div className="comment-list">  
                <div className="comment-record-box">
    
                </div>
                <div className="notice-scrollbar-box">
    
                </div>
              </div>
              <div className='comment-write-box'> 
                <textarea ref={contentsTextAreaRef} className='comment-index'   spellCheck={false} value={contents} onChange={onContentsChangeHandler}></textarea>
              </div> 
            </div>
    
        </div>
        );
    }

  //          component: chat 카드 컴포넌트          //
  const ChatCard = () =>{

    const contentsTextAreaRef = useRef<HTMLTextAreaElement | null>(null);
    const [contents, setContents] = useState<string>('');


    //          event handler: 내용 변경 이벤트 처리          //
    const onContentsChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
      const contents = event.target.value;
      setContents(contents);
      if (!contentsTextAreaRef.current) return;
      console.log(contentsTextAreaRef.current.scrollHeight);
      contentsTextAreaRef.current.focus();
      contentsTextAreaRef.current.style.height = 'auto';
      contentsTextAreaRef.current.style.height = `${contentsTextAreaRef.current.scrollHeight}px`;
    }
    

    //        render :  chat 화면 랜더링      //
    return(
      <div className="side-bar">
        <div className="alert-box">
          {/* <div className="alert-title-1">알림</div> */}
          <div className="alert-title-2" >알림</div>
          {/* <div className="alert-message-1">채팅</div> */}
          <div className="alert-message-2 onClick={onMenuClickHandler}">채팅</div>
        </div>  
        <div className="chat-box">
          <div className="comment-chat-box">

          </div>
          <div className='comment-contents-log-box'>
            <textarea ref={contentsTextAreaRef} className='comment-contents-index'  spellCheck={false} value={contents} onChange={onContentsChangeHandler} />
          </div>
        </div>                
      </div>
    );
  }    

  //        render :    서비스 화면 렌더링    //
  return (
    <div id='service-wrapper'>
      <div className="service-header">
        <div className="logo-box">
          <div className="logo-icon-box"></div>
          <div className="logo-title">갓생살기</div>
        </div>
        <div className="header-center">
          <div className="header-room-title-box">
            <div className="header-room-title">{'방이름'}</div>
          </div>
          <div className="header-room-date-box">
            <div className='progress-time'>{`진행 시간: ${'00:00:00'}`}</div>
          </div>
        </div>
        <div className="header-end">
          <div className="header-setting">
            <div className="header-settings-icon"></div>
            <div className="header-setting-contents">설정</div>
          </div>
          <div className="header-exit">
            <div className="header-exit-icon"></div>
            {/* <button className={"header-exit-contents"} >나가기</button> */}
            <div className="header-exit-contents">나가기</div>
          </div>
        </div>
      </div>
      <div className="service-container">
        {menu === 'notice' && <NoticeCard/>}
        {menu === 'chat' && <ChatCard/>}
        <div className="service-contents">
          <div className="study-info">
            <div className="study-info-material-box">
              <div className="study-info-material"></div>
            </div>
            <div className="study-info-memeber-info-box">
              <div className="tudy-info-memeber-info"></div>
            </div>
          </div>
          <div className="study-list-contents-box">
            <div className="study-list-contents">
              <div className="left-arrow-box">
                <div className="left-arrow"></div>
              </div>
              <div className="study-list-box">
                <div className="study-list">
                  <div className="study-list-material-default-box">
                    <div className="image-close"></div>
                  </div>
                  <div className="study-list-material-box">
                  
                  </div>
                  <div className="study-list-material-box"></div>
                  <div className="study-list-material-box"></div>
                  <div className="study-list-material-box"></div>
                  <div className="study-list-material-box"></div>
                </div>
                {/* <button className='study-list-icon-box'>
                  <div className="study-list-icon"></div>
                </button> */}
                <div className="study-list-icon-box" onClick={onMaterialImageUploadClickHandler} onChange={onImageChangeHandler}>
                  <div className="study-list-icon"></div>
                </div>
              </div>
              <div className="right-arrow-box">
                <div className="right-arrow"></div>
              </div>
            </div>
            <div className="icon-box-list">
              <div className="check-icon-box">
                <div className="check-icon"></div>
                <div className="check-icon-title">{'출석 체크 시작'}</div>
              </div>
              <div className="hand-icon-box">
                <div className="hand-icon"></div>
                <div className="hand-icon-title">{'손흔들기'}</div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>

    );
}