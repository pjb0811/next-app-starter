import { handleActions } from 'redux-actions';
import { Map } from 'immutable';
import { REQUEST_POST, SUCCESS_POST, FAILURE_POST } from '../actions/post';

const initialState = Map({
  pending: false,
  error: false,
  data: Map({
    title: '',
    body: ''
  })
});

export default handleActions(
  {
    [REQUEST_POST]: (state, action) => {
      return state.set('pending', true).set('error', false);
    },

    [SUCCESS_POST]: (state, action) => {
      const { title, body } = action.payload.data;
      return state.set('pending', false).set('error', false)
        .setIn(['data', 'title'], title).setIn(['data', 'body'], body);
    },
    [FAILURE_POST]: (state, action) => {
      return state.set('pending', false).set('error', true);
    }
  },
  initialState
);
