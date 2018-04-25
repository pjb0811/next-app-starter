import { handleActions } from 'redux-actions';
import { INCREMENT, DECREMENT } from '../actions/counter';

const initialState = 1;

export default handleActions(
  {
    [INCREMENT]: (state, action) => state + 1,
    [DECREMENT]: (state, action) => state - 1
  },
  initialState
);
