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

function* processSelectedData({ payload }) {
  const { type, setID, id } = payload;
  if (type === 'users') {
    yield put({type: SET_SELECTED_USER, setID, id})
  } else if (type === 'roles') {
    yield put({type: SET_SELECTED_ROLE, setID, id})
  } else if (type === 'projects') {
    yield put({type: SET_SELECTED_PROJECT, setID, id})
  }
}

export function* watchForSelectedData() {
  yield takeEvery(SELECTED_DATA, processSelectedData)
}
