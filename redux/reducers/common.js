import { handleActions } from 'redux-actions';
import { Map, fromJS } from 'immutable';
import {
  REQUEST_COMMON,
  SUCCESS_COMMON,
  FAILURE_COMMON
} from '../actions/common';

const initialState = Map({
  pending: false,
  error: false,
  data: Map({})
});

export default handleActions(
  {
    [REQUEST_COMMON]: (state, action) => {
      return state.set('pending', true).set('error', false);
    },

    [SUCCESS_COMMON]: (state, action) => {
      const { data } = action.payload;
      return state
        .set('pending', false)
        .set('error', false)
        .set('data', fromJS(data.data));
    },
    [FAILURE_COMMON]: (state, action) => {
      return state.set('pending', false).set('error', true);
    }
  },
  initialState
);
