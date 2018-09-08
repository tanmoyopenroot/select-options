/**
 * Saga for User data
 * @module sagas/users-saga
 */

import {
  take,
  fork,
  put
} from 'redux-saga/effects';

import {
  FETCH_DATA,
  FETCHED_USERS_DATA,
} from '../actions/action-types';
import { getUsers } from '../api';

/**
 * Generator function for fetching the data
 */
function* fetchUserData() {
  const users = getUsers();
  let usersID = [];
  let usersHash = {};

  for (let user of users) {
    const { id } = user;
    usersID.push(id);
    usersHash[id] = user;
  }

  const payload = {
    usersID,
    usersHash
  }

  yield put({type: FETCHED_USERS_DATA, payload})
}

/**
 * Generator function for takes FETCH_DATA action type
 */
export function* watchForUserFetchData() {
  yield take(FETCH_DATA)
  yield fork(fetchUserData)
}
