export default interface MyStudyRoomInfoItem {
    studyNumber: number;
    studyName: string;
    studyCategory1: string;
    studyPersonnel: string;
    myGrade: string;
    studyNextStartDatetime: string | null;

    studyStartDate: string;
    studyEndDate: string;
    studyProgressRate: number;
    studyPeriod: number;

    studyTotalDays: number;
    studyAttendDays: number;
    studyAbsentDays: number;
    studyLateDays: number;

    studyRoomToDoList: any[][];
}