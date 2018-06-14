import { createAction } from 'redux-actions';

export const REQUEST_COMMON = 'REQUEST_COMMON';
export const SUCCESS_COMMON = 'SUCCESS_COMMON';
export const FAILURE_COMMON = 'FAILURE_COMMON';

export const requestCommon = createAction(REQUEST_COMMON);
export const successCommon = createAction(SUCCESS_COMMON);
export const failureCommon = createAction(FAILURE_COMMON);
