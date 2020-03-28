import * as types from './actionType';
import {
  storeSignInResponse,
  getSignInResponse,
} from '../asynstorage/AsynStorageManage';
import {ajax} from 'rxjs/ajax';
import {Observable, of, zip} from 'rxjs';
import {map, catchError, flatMap} from 'rxjs/operators';

const obs$ = ajax({
  url: `http://103.74.116.95:8084/account/public/Account/mobile/login`,
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
  },
  body: {
    username: 'admin',
    password: '12345678',
  },
}).pipe(
  map(userResponse => {
    console.log('users: ', userResponse.response);
  }),
  catchError(error => {
    console.log('error: ', error);
    return of(error);
  }),
);

function ajaxTest(signInRequest) {
  const ajaxConfig = {
    url: `${URL}${SIGN_IN_URL}`,
    method: 'POST',
    headers: HEADER,
    body: JSON.stringify(signInRequest),
  };
  ajax
    .post(`${URL}${SIGN_IN_URL}`, JSON.stringify(signInRequest), HEADER)
    .pipe(map(res => console.log(res)));
  ajax(ajaxConfig).subscribe({
    onNext: value => {
      console.log('rx:' + JSON.stringify(value));
    },
    onError: error => {
      console.log(`rxErr: ${error}`);
    },
    onComplete: () => {
      console.log(`rx complete`);
    },
  });
}

const URL = 'http://103.74.116.95:8084/account/';
const SIGN_IN_URL = 'public/Account/mobile/login';
const GET_DISPLAY_NAME_URL = 'auth/user/Account/displayName';
const GET_AUTHORITIES_URL = 'auth/user/Authority/getAuthorities';
const GET_AVATAR_ID_URL = 'account/auth/user/Avatar/getDefault';

const HEADER = {
  Accept: 'application/json',
  'Content-type': 'application/json',
};
let AUTHORITY_HEADER = {};

export function signIn(signInRequest) {
  const url = `${URL}${SIGN_IN_URL}`;
  const requestConfig = {
    method: 'POST',
    headers: HEADER,
    body: JSON.stringify(signInRequest),
  };
  return async dispatch => {
    dispatch(submitSignIn());
    try {
      const response = await fetch(url, requestConfig);
      const responseJson = await response.json();
      storeSignInResponse(responseJson);
      AUTHORITY_HEADER = {
        Accept: 'application/json',
        Authorization: `Bearer ${responseJson.token}`,
      };
      getCurrentUserAvatarUrl();
      getDisplayname();
      getAuthorities();
      dispatch(signInSuccess(responseJson));
    } catch {
      e => console.log(e);
      signInError('error');
    }

    // .then(response => response.json())
    // .then(async responseJson => {
    //   AUTHORITY_HEADER = {
    //     Accept: 'application/json',
    //     Authorization: `Bearer ${responseJson.token}`,
    //   };
    //   dispatch(signInSuccess(responseJson));
    //   await getDisplayname();
    //   getAuthorities();
    //   getAvatarIdUrl();
    //   console.log(responseJson);
    //   storeSignInResponse(responseJson);
    //   getSignInResponse();
    //   ajaxTest(signInRequest);
    // })
    // .catch(error => {
    //   dispatch(signInError(error));
    //   console.log(error);
    // });
  };
}

async function getDisplayname() {
  const url = `${URL}${GET_DISPLAY_NAME_URL}`;
  const requestConfig = {
    method: 'GET',
    headers: AUTHORITY_HEADER,
  };
  fetch(url, requestConfig)
    .then(response => response.json())
    .then(responseJSon =>
      console.log(`getdisplay: ${JSON.stringify(responseJSon)}`),
    );
}

async function getAuthorities() {
  const url = `${URL}${GET_AUTHORITIES_URL}`;
  const requestConfig = {
    method: 'GET',
    headers: AUTHORITY_HEADER,
  };
  fetch(url, requestConfig)
    .then(response => response.json())
    .then(responseJSon =>
      console.log(`getAuthority: ${JSON.stringify(responseJSon)}`),
    );
}

async function getCurrentUserAvatarUrl() {
  const url = `http://103.74.116.95:8084/account/auth/user/Avartar/getDefault`;
  const requestConfig = {
    method: 'GET',
    headers: AUTHORITY_HEADER,
  };
  const response = await fetch(url, requestConfig);
  const responseJson = await response.json();
  const idUpload = responseJson.idUpload;
  const imgUrl = `http://103.74.116.95:8090/auctions-upload-file/api/public/upload/Picture/image?id=${idUpload}`;
  console.log(JSON.stringify(imgUrl));
}

export function submitSignIn() {
  return {
    type: types.SIGN_IN,
  };
}

export function signInSuccess(response) {
  return {
    type: types.SIGN_IN_SUCCESS,
    response: response,
  };
}

export function signInError(error) {
  return {
    type: types.SIGN_IN_ERROR,
    error: error,
  };
}
