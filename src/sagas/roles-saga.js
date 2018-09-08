import {
  take,
  fork,
  put
} from 'redux-saga/effects';

import {
  FETCH_DATA,
  FETCHED_ROLES_DATA,
} from '../actions/action-types';
import { getRoles } from '../api';

function* fetchRolesData() {
  const roles = getRoles();
  let rolesID = [];
  let rolesHash = {};

  for (let role of roles) {
    const { id } = role;
    rolesID.push(id);
    rolesHash[id] = role;
  }

  yield put({type: FETCHED_ROLES_DATA, rolesID, rolesHash})
}

export function* watchForRolesFetchData() {
  yield take(FETCH_DATA)
  yield fork(fetchRolesData)
}
