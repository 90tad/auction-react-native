import {combineReducers} from 'redux';
import signInReducer from './signIn';

const mReducer = combineReducers({
  signInReducer,
});

export default mReducer;
