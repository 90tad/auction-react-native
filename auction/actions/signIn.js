import * as types from './actionType';

const URL = 'http://103.74.116.95:8084/account/public/Account/mobile/login';
const HEADER = {
  Accept: 'application/json',
  'Content-type': 'application/json',
};

export function signIn(signInRequest) {
  return dispatch => {
    dispatch(submitSignIn());
    fetch(URL, {
      method: 'POST',
      headers: HEADER,
      body: JSON.stringify(signInRequest),
    })
      .then(response => response.json())
      .then(responseJson => dispatch(signInSuccess(responseJson)))
      .catch(error => dispatch(signInError(error)));
  };
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
