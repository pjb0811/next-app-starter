import { createAction } from 'redux-actions';

export const REQUEST_POST = 'REQUEST_POST';
export const SUCCESS_POST = 'SUCCESS_POST';
export const FAILURE_POST = 'FAILURE_POST';

export const requestPost = createAction(REQUEST_POST);
export const successPost = createAction(SUCCESS_POST);
export const failurePost = createAction(FAILURE_POST);
