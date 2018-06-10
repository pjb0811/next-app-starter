// import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutable';
import counter from './counter';
import post from './post';

export default combineReducers({
  counter,
  post
});
