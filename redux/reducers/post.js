import { handleActions } from 'redux-actions';
import { Map } from 'immutable';
import { REQUEST_POST, SUCCESS_POST, FAILURE_POST } from '../actions/post';

const initialState = {
  pending: false,
  error: false,
  data: {
    title: '',
    body: ''
  }
};

export default handleActions(
  {
    [REQUEST_POST]: (state, action) => {
      return {
        ...state,
        pending: true,
        error: false
      };
    },

    [SUCCESS_POST]: (state, action) => {
      const { data } = action.payload;
      return {
        pending: false,
        error: false,
        data: {
          ...data
        }
      };
    },
    [FAILURE_POST]: (state, action) => {
      return {
        ...state,
        pending: false,
        error: true
      };
    }
  },
  initialState
);
