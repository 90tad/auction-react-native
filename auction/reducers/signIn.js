import * as types from '../actions/actionType';
import {AsyncStorage} from 'react-native';

const INIT_STATE = {
  signInResponse: {},
  error: '',
  requesting: false,
};

async function storeSignInResponse(signInResponse) {
  try {
    await AsyncStorage.setItem('SIGN_IN_RESPONSE', signInResponse);
  } catch (error) {
    console.log(error);
  }
}

async function getSignInData() {
  try {
    const value = await AsyncStorage.getItem('SIGN_IN_RESPONSE');
    if (value != null) {
      console.log(value);
    }
  } catch (e) {
    console.log(e);
  }
}

function signInReducer(state = INIT_STATE, action) {
  switch (action.types) {
    case types.SIGN_IN: {
      return {
        ...state,
        requesting: true,
      };
    }
    case types.SIGN_IN_SUCCESS: {
      storeSignInResponse(action.signInResponse);
      getSignInData();
      return {
        ...state,
        signInResponse: action.signInResponse,
        requesting: false,
      };
    }
    case types.SIGN_IN_ERROR: {
      return {
        ...state,
        error: action.error,
      };
    }
    default:
      return state;
  }
}

export default signInReducer;
