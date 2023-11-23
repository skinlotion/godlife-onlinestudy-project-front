import axios from "axios";
import {
  DeleteUserToDoListResponseDto,
  GetUserToDoListResponseDto,
  PatchUserToDoListResponseDto,
} from "./dto/response/user";
import ResponseDto from "./dto/response";
import {
  PatchUserToDoListRequestDto,
  PostUserToDoListRequestDto,
} from "./dto/request";
import PostUserToDoListResponseDto from "./dto/response/user/post-user-todolist.response.dto";
import { SignInEmailCheckRequestDto, SignInRequestDto, SignUpRequestDto } from "./request/auth";
import { SignInEmailCheckResponseDto, SignInResponseDto, SignUpResponseDto } from "./response/auth";
import GetSignInUserResponseDto from "./response/user/get-sign-in-user.response.dto";
import GetUserResponseDto from "./response/user/get-user.response.dto";

//        description: Domain URL       //
const DOMAIN = "http://localhost:4000";

//        description: API Domain 주소       //
const API_DOMAIN = `${DOMAIN}/api`;

//        description: Authorizaition Header        //
const authorization = (token: string) => {
  return { headers: { Authorization: `Bearer ${token}` } };
};

// description: sign in email check API end point //
const SIGN_IN_EMAIL_CHECK_URL = () => `${API_DOMAIN}/auth/sign-in-email-check`
// description: sigin in API end point //
const SIGN_IN_URL = () => `${API_DOMAIN}/sign-in`;
// description: sign up API end point //
const SIGN_UP_URL = () => `${API_DOMAIN}/sign-up`;


//        description: get user to do list API end point       //
const GET_USER_TO_DO_LIST_URL = (userlistdatetime: string) =>
  `${API_DOMAIN}/main/user-todolist/${userlistdatetime}`;

//        description: patch user to do list API end point        //
const PATCH_USER_TO_DO_LIST_URL = (
  userlistdatetime: string,
  userlistnumber: string | number
) => `${API_DOMAIN}/main/user-todolist/${userlistdatetime}/${userlistnumber}`;

//        description: post user to do list API end point       //
const POST_USER_TO_DO_LIST_URL = () => `${API_DOMAIN}/main/user-todolist/post`;

//        description: delete user to do list API end point       //
const DELETE_USER_TO_DO_LIST_URL = (userlistnumber: number[]) =>
  `${API_DOMAIN}/main/user-todolist/${userlistnumber}`;


// description: sign in email chesck request //
export const signInEmailCheckRequest = async (requestBody: SignInEmailCheckRequestDto) => {
  const result = await axios.post(SIGN_IN_EMAIL_CHECK_URL(), requestBody)
      .then(response => {
          const responseBody: SignInEmailCheckResponseDto = response.data;
          return responseBody;
      })
      .catch(error => {
          const responseBody: ResponseDto = error.response.data;
          return responseBody;
      });
  return result;
};

// description: sign in request //
export const signInRequest = async (requestBody: SignInRequestDto) => {
  const result = await axios.post(SIGN_IN_URL(), requestBody)
      .then(response => {
          const responseBody: SignInResponseDto = response.data;
          return responseBody;
      })
      .catch(error => {
          const responseBody: ResponseDto = error.response.data;
          return responseBody;
      });
  return result;
};

// description: sign up request //
export const signUpRequest  = async (requestBody: SignUpRequestDto) => {
  const result = await axios.post(SIGN_UP_URL(), requestBody)
      .then(response => {
          const responseBody: SignUpResponseDto = response.data;
          const { code } = responseBody;
          return code;
      })
      .catch(error => {
          const responseBody: ResponseDto = error.response.data;
          const { code } = responseBody;
          return code;
      });
  return result;
};

//        description: get user todolist request       //
export const getUserToDoListRequest = async (
  userlistdatetime: string,
  token: string
) => {
  const result = await axios
    .get(GET_USER_TO_DO_LIST_URL(userlistdatetime), authorization(token))
    .then((response) => {
      const responseBody: GetUserToDoListResponseDto = response.data;
      return responseBody;
    })
    .catch((error) => {
      const responseBody: ResponseDto = error.response.data;
      return responseBody;
    });
  return result;
};

//        description: patch user todolist request        //
export const patchUserToDoListRequest = async (
  requestBody: PatchUserToDoListRequestDto,
  userlistdatetime: string,
  userlistnumber: string | number,
  token: string
) => {
  const result = await axios
    .patch(
      PATCH_USER_TO_DO_LIST_URL(userlistdatetime, userlistnumber),
      requestBody,
      authorization(token)
    )
    .then((response) => {
      const responseBody: PatchUserToDoListResponseDto = response.data;
      const { code } = responseBody;
      return code;
    })
    .catch((error) => {
      const responseBody: ResponseDto = error.response.data;
      const { code } = responseBody;
      return code;
    });
  return result;
};

//        description: post user todolist request       //
export const postUserToDoListRequest = async (
  requestBody: PostUserToDoListRequestDto,
  token: string
) => {
  const result = await axios
    .post(POST_USER_TO_DO_LIST_URL(), requestBody, authorization(token))
    .then((response) => {
      const responseBody: PostUserToDoListResponseDto = response.data;
      const { code } = responseBody;
      return code;
    })
    .catch((error) => {
      const responseBody: ResponseDto = error.response.data;
      const { code } = responseBody;
      return code;
    });
  return result;
};

//        description: delete user todolist requset       //
export const deleteUserToDoListRequest = async (
  userListNumber: number[],
  token: string
) => {
  const result = await axios
    .delete(DELETE_USER_TO_DO_LIST_URL(userListNumber), authorization(token))
    .then((response) => {
      const responseBody: DeleteUserToDoListResponseDto = response.data;
      const { code } = responseBody;
      return code;
    })
    .catch((error) => {
      const responseBody: ResponseDto = error.response.data;
      const { code } = responseBody;
      return code;
    });
  return result;
};


// description: get sign in user API end point //
const GET_SIGN_IN_USER_URL = () => `${API_DOMAIN}/user`;
// description: get user API end point //
const GET_USER_URL = (email: string) => `${API_DOMAIN}/user/${email}`;

// description: get sign in user request //
export const getSignInUserRequest = async (token: string) => {
    const result = await axios.get(GET_SIGN_IN_USER_URL(), authorization(token))
        .then(response => {
            const responseBody: GetSignInUserResponseDto = response.data;
            return responseBody;
        })
        .catch(error => {
            const responseBody: ResponseDto = error.response.data;
            return responseBody;
        });
    return result;
};

// description: get user request //
export const getUserRequest = async (email: string) => {
    const result = await axios.get(GET_USER_URL(email))
        .then(response => {
            const responseBody: GetUserResponseDto = response.data;
            return responseBody;
        })
        .catch(error => {
            const responseBody: ResponseDto = error.response.data;
            return responseBody;
        });

    return result;
};
