import { combineReducers } from 'redux-immutable';
import counter from './counter';
import post from './post';
import common from './common';

export default combineReducers({
  counter,
  post,
  common
});
