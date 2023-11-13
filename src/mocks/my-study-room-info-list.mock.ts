import { MyStudyRoomInfoItem } from "../types";

const studyRoomInfoListMock: MyStudyRoomInfoItem =
    {
        studyNumber: 1,
        studyName: 'AZ-900 정보처리기사 및 AZ-9',
        studyCategory1: '자격증',
        studyPersonnel: '10 / 14',
        myGrade: '일반',
        studyNextStartDatetime: '2023년 11월 13일',

        studyStartDate: '2023년 10월 01일',
        studyEndDate: '2023년 11월 11일',
        studyProgressRate: 10,
        studyPeriod: 30,
    
        studyTotalDays: 30,
        studyAttendDays: 2,
        studyAbsentDays: 4,
        studyLateDays: 6,
     
        studyRoomToDoList: [[1, '스터디 자료 파일 다운받고 미리 숙지하기11111111111111111222121212121212121121212', true],[2, '스터디 자료 파일 다운받고 미리 숙지하기2',false],
                            [3, '스터디 자료 파일 다운받고 미리 숙지하기3',false],[4, '스터디 자료 파일 다운받고 미리 숙지하기4',true],
                            [5, '스터디 자료 파일 다운받고 미리 숙지하기5',true]]
    };

export default studyRoomInfoListMock;