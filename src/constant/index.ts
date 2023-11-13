export const MAIN_PATH = '/';
export const AUTH_PATH = '/auth';
export const STUDYROOM_DETAIL_PATH = (studyNumber: number | string) => `/studyroom/detail/${studyNumber}`;
export const SEND_EMAIL_PATH = (sendEmailAddress: string) => `/search/${sendEmailAddress}`;