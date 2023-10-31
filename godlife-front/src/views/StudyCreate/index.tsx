import React from 'react'

//          component: 스터디 생성 페이지          //
export default function StudyCreate() {
  return (
    <div id='study-create'>
        <div className='study-create-background'>
            <div className='study-create-box'>
                <div className='study-create-title'></div>
                <div className='study-create-main-box'>
                    <div className='study-create-index-box'>

                        <div className='study-title-box'>
                            <div className='study-title-text'></div>
                            <input className='input-box' />
                        </div>

                        <div className='study-period'>
                            <div className='study-period-text'></div>
                            <div className='study-period-set-box'>
                                <div className='study-period-set-text'></div>
                                <div className='icon-box'>
                                    <div className='calendar-icon'></div>
                                </div>
                            </div>
                        </div>

                        <div className='study-people-set'>
                            <div className='study-people-set-text'></div>
                            <div className='study-people-set-box'>
                                <div className='study-people-set-box-text'></div>
                                <div className='icon-box'>
                                    <div className='down-arrow-icon'></div>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className='study-create-button'>
                        <div className='study-create-button-box'>
                            <div className='study-create-button-title'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
