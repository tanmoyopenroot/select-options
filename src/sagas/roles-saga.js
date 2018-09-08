/**
 * Saga for role data
 * @module sagas/roles-saga
 */

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

/**
 * Generator function for fetching the data
 */
function* fetchRolesData() {
  const roles = getRoles();
  let rolesID = [];
  let rolesHash = {};

  for (let role of roles) {
    const { id } = role;
    rolesID.push(id);
    rolesHash[id] = role;
  }

  const payload = {
    rolesID,
    rolesHash,
  }

  yield put({type: FETCHED_ROLES_DATA, payload})
}

/**
 * Generator function for takes FETCH_DATA action type
 */
export function* watchForRolesFetchData() {
  yield take(FETCH_DATA)
  yield fork(fetchRolesData)
}
