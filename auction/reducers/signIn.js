import * as types from '../actions/actionType';

const INIT_STATE = {
  signInResponse: {},
  error: '',
  requesting: false,
};

function signInReducer(state = INIT_STATE, action) {
  switch (action.types) {
    case types.SIGN_IN: {
      return {
        ...state,
        requesting: true,
      };
    }
    case types.SIGN_IN_SUCCESS: {
      getSignInResponse();
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
        requesting: false,
      };
    }
    default:
      return state;
  }
}

export default signInReducer;
