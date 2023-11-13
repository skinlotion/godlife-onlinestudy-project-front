import { MyStudyRoomInfoItem } from "../types";

const studyRoomInfoListMock: MyStudyRoomInfoItem[] = [
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
  },    
  {
    studyNumber: 2,
    studyName: 'AZ-900 정보처리기사 및 AZ-9',
    studyCategory1: '취업',
    studyPersonnel: '14 / 18',
    myGrade: '방장',
    studyNextStartDatetime: '2023. 11 .13',

    studyStartDate: '2023년 05월 01일',
    studyEndDate: '2023년 08월 13일',
    studyProgressRate: 7,
    studyPeriod: 40,

    studyTotalDays: 20,
    studyAttendDays: 1,
    studyAbsentDays: 5,
    studyLateDays: 5,
  
    studyRoomToDoList: [[1, '스터디 방의 투두리스트입니다.11', true],[2, '스터디 방22',false]]
  },   
  {
    studyNumber: 3,
    studyName: 'AZ-900 정보처리기사 및 3333',
    studyCategory1: '취업123',
    studyPersonnel: '4 / 5',
    myGrade: '일반',
    studyNextStartDatetime: '2023. 11 .13',

    studyStartDate: '2023년 12월 11일',
    studyEndDate: '2023년 12월 31일',
    studyProgressRate: 26,
    studyPeriod: 30,

    studyTotalDays: 15,
    studyAttendDays: 9,
    studyAbsentDays: 3,
    studyLateDays: 4,
  
    studyRoomToDoList: [[1, '스터디 방의 투두리스트입니다.1132321231232131232131231231231231231231231231231231231231312323123', false],[2, '스터디 1132321231232131232131231231231231231231231231231231231231312323123',false]]
  }
];

export default studyRoomInfoListMock;