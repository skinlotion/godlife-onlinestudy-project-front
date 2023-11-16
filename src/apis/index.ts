import axios from 'axios';
import { GetUserToDoListResponseDto } from './dto/response/user';
import ResponseDto from './dto/response';

//        description: Domain URL       //
const DOMAIN = 'http://localhost:4000';

//        description: API Domain 주소       //
const API_DOMAIN = `${DOMAIN}/api`;
// // description: Authorizaition Header //
const authorization = (token: string) => { 
  return { headers: { Authorization: `Bearer ${token}` } };
};

// description: get user to do list API end point //
const GET_USER_TO_DO_LIST_URL = (userlistdatetime: string) => `${API_DOMAIN}/main/user-todolist/${userlistdatetime}`;

// description: get user todolist request //
export const getUserToDoListRequest = async (userlistdatetime: string, token: string) => {
  const result = await axios.get(GET_USER_TO_DO_LIST_URL(userlistdatetime), authorization(token))
      .then(response => {
          const responseBody: GetUserToDoListResponseDto = response.data;
          return responseBody;
      })
      .catch(error => {
          const responseBody: ResponseDto = error.response.data;
          return responseBody;
      });
  return result;
};