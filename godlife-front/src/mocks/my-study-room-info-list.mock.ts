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
        studyProgressRate: 15,
        studyPeriod: 30,
    
        studyTotalDays: 30,
        studyAttendDays: 2,
        studyAbsentDays: 4,
        studyLateDays: 6,
     
        studyRoomToDoList: [[1, '스터디 방의 투두리스트입니다.11', true],[2, '스터디 방22',false]]
    },    
    {
        studyNumber: 2,
        studyName: 'AZ-900 정보처리기사 및 AZ-9',
        studyCategory1: '취업',
        studyPersonnel: '14 / 18',
        myGrade: '일반',
        studyNextStartDatetime: '2023. 11 .13',

        studyStartDate: '2023년 10월 01일',
        studyEndDate: '2023년 11월 11일',
        studyProgressRate: 15,
        studyPeriod: 30,
    
        studyTotalDays: 30,
        studyAttendDays: 2,
        studyAbsentDays: 4,
        studyLateDays: 6,
     
        studyRoomToDoList: [[1, '스터디 방의 투두리스트입니다.11', true],[2, '스터디 방22',false]]
    },   
    {
        studyNumber: 3,
        studyName: 'AZ-900 정보처리기사 및 3333',
        studyCategory1: '취업123',
        studyPersonnel: '4 / 5',
        myGrade: '일반',
        studyNextStartDatetime: '2023. 11 .13',

        studyStartDate: '2023년 10월 01일',
        studyEndDate: '2023년 11월 11일',
        studyProgressRate: 15,
        studyPeriod: 30,
    
        studyTotalDays: 30,
        studyAttendDays: 2,
        studyAbsentDays: 4,
        studyLateDays: 6,
     
        studyRoomToDoList: [[1, '스터디 방의 투두리스트입니다.11', true],[2, '스터디 방22',false]]
    }
];

export default studyRoomInfoListMock;