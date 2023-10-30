import React from "react";

//          component: 마이페이지           //
export default function MyPage() {

  //        component: 마이페이지 상단 컴포넌트        //
  const MyPageTop = () => {

    //             render: 마이페이지 상단 렌더링              //
    return (
      <div id="my-page-top">
        <div className="background-default-color">
          <div className="user-info">
            <div className="user-info-box">
              <div className="user-info-title">{"회원정보"}</div>
              <div className="info-detail-box">
                <div className="info-detail-box-top">
                  <div className="user-profile-box">
                    <div className="user-profile-image"></div>
                    <div className="user-profile-image-change-box">
                      <div className="user-profile-image-change-box-text">{"변경"}</div>
                    </div>
                  </div>
                  <div className="user-basic-info-box">
                    <div className="user-nickname-box">
                      <div className="user-nickname-text">{"힘가둑"}</div>
                      <div className="user-nickname-icon"></div>
                    </div>
                    <div className="user-email">{"skin_lotion@naver.com"}</div>
                    <div className="password-modify-box">{"비밀번호 수정하기"}</div>
                  </div>
                </div>
                <div className="user-category-box">
                  <div className="user-category-title">{"관심 카테고리"}</div>
                  <div className="user-category-list-box">
                    <div className="user-category-1">
                      <div className="user-category-1-title">{"1관심 카테고리"}</div>
                      <div className="user-category-1-box">
                        <div className="user-category-1-box-title">{"취업"}</div>
                        <div className="user-category-icon-box">
                          <div className="user-category-icon"></div>
                        </div>
                      </div>
                    </div>
                    <div className="user-category-2">
                        <div className="user-category-2-title">{"2관심 카테고리"}</div>
                        <div className="user-category-2-box">
                            <div className="user-category-2-box-title">{"선택해주세요"}</div>
                            <div className="user-category-icon-box">
                                <div className="user-category-icon"></div>
                            </div>
                        </div>
                        </div>
                    <div className="user-category-3">
                      <div className="user-category-3-title">{"3관심 카테고리"}</div>
                      <div className="user-category-3-box">
                        <div className="user-category-3-box-title">{"선택해주세요"}</div>
                            <div className="user-category-icon-box">
                                <div className="user-category-icon"></div>
                            </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="user-grade-box">
              <div className="user-grade-icon-box">
                <div className="user-grade-icon"></div>
                <div className="user-grade-icon-text">{'새싹'}</div>
              </div>
              <div className="user-grade-standard">
                <div className="user-grade-leaf-box">
                  <div className="user-leaf-icon"></div>
                  <div className="user-leaf-text">{'댓글 10, 게시물 10'}</div>
                </div>
                <div className="user-grade-weeds-box">
                  <div className="user-weeds-icon"></div>
                  <div className="user-weeds-text">{'댓글 50, 게시물 50'}</div>
                </div>
                <div className="user-grade-tree-box">
                  <div className="user-tree-icon"></div>
                  <div className="user-tree-text">{'댓글 100, 게시물 100'}</div>
                </div>
              </div>
              <div className="user-check-grade-standard">
                <div className="user-grade-standard-box">
                    <div className="user-grade-standard-box-text">{"등급기준 보러가기"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  //      component: 마이페이지 하단 컴포넌트          //
  const MyPageBottom = () => {

    //          render: 마이페이지 하단 렌더링              //
    return (
      <div id="my-page-bottom">
        <div className="user-activity-histroy">
          <div className="user-activity-histroy-title">{'활동 기록'}</div>
          <div className="user-activity-box">
            <div className="user-join-study-box">
              <div className="user-join-study-title">{"참여중인 스터디"}</div>
              <div className="join-study-box">
                <div className="join-study-box-titles">
                  <div className="join-study-title">{"방 제목"}</div>
                  <div className="join-study-category">{"방 카테고리"}</div>
                  <div className="join-study-authority">{"내 권한"}</div>
                  <div className="join-study-progress">{"스터디 진행률"}</div>
                  <div className="join-study-total-day">{"총 스터디 일수"}</div>
                  <div className="join-study-join-day">{"참석일수"}</div>
                  <div className="join-study-absent-day">{"결석일수"}</div>
                  <div className="join-study-late-day">{"지각일수"}</div>
                </div>
                <div className="join-study-list-box">
                  <div className="study-title-box">
                    <div className="study-title-text"></div>
                  </div>
                  <div className="study-category-box">
                    <div className="study-category-text"></div>
                  </div>
                  <div className="study-authority-box">
                    <div className="study-authority-text"></div>
                  </div>
                  <div className="study-progress-box">
                    <div className="study-progress-text"></div>
                  </div>
                  <div className="study-total-day-box">
                    <div className="study-total-day-text"></div>
                  </div>
                  <div className="study-join-day-box">
                    <div className="study-join-day-text"></div>
                  </div>
                  <div className="study-absent-day-box">
                    <div className="study-absent-day-text"></div>
                  </div>
                  <div className="study-late-day-box">
                    <div className="study-late-day-text"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="user-joined-study-box">
              <div className="user-joined-study-title">{"참가한 스터디 기록"}</div>
              <div className="joined-study-box">
                <div className="joinedstudy-box-titles">
                  <div className="joined-study-title">{"방 제목"}</div>
                  <div className="joined-study-category">{"방 카테고리"}</div>
                  <div className="joined-study-authority">{"스터디 내 권한"}</div>
                  <div className="joined-study-end-day">{"스터디 종료 날짜"}</div>
                  <div className="join-study-total-day">{"총 스터디 일수"}</div>
                  <div className="join-study-join-day">{"참석일수"}</div>
                  <div className="join-study-absent-day">{"결석일수"}</div>
                  <div className="join-study-late-day">{"지각일수"}</div>
                </div>
                <div className="joined-study-list-box">
                  <div className="joined-study-title-box">
                    <div className="study-title-text"></div>
                  </div>
                  <div className="joined-study-category-box">
                    <div className="study-category-text"></div>
                  </div>
                  <div className="joined-study-authority-box">
                    <div className="study-authority-text"></div>
                  </div>
                  <div className="study-end-day-box">
                    <div className="study-end-day-text"></div>
                  </div>
                  <div className="study-total-day-box">
                    <div className="study-total-day-text"></div>
                  </div>
                  <div className="study-join-day-box">
                    <div className="study-join-day-text"></div>
                  </div>
                  <div className="study-absent-day-box">
                    <div className="study-absent-day-text"></div>
                  </div>
                  <div className="study-late-day-box">
                    <div className="study-late-day-text"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return(
    <>
        <MyPageTop />
        <MyPageBottom />
    </>
  )
}
