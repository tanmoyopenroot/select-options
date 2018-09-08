/**
 * Saga for selected values
 * @module sagas/select-saga
 */


import {
  takeEvery,
  put
} from 'redux-saga/effects';

import {
  SELECTED_DATA,
  SET_SELECTED_USER,
  SET_SELECTED_ROLE,
  SET_SELECTED_PROJECT
} from '../actions/action-types';

/**
 * Generator function for procesing the data
 */
function* processSelectedData({ payload }) {
  const { type, setID, id } = payload;
  if (type === 'users') {
    yield put({
      type: SET_SELECTED_USER, 
      setID, 
      id,
    })
  } else if (type === 'roles') {
    yield put({
      type: SET_SELECTED_ROLE,
      setID,
      id,
    })
  } else if (type === 'projects') {
    yield put({
      type: SET_SELECTED_PROJECT,
      setID,
      id
    })
  }
}

/**
 * Generator function for takes SELECTED_DATA action type
 */
export function* watchForSelectedData() {
  yield takeEvery(SELECTED_DATA, processSelectedData)
}
