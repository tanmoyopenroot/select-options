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

export function* watchForUserFetchData() {
  yield take(FETCH_DATA)
  yield fork(fetchUserData)
}
