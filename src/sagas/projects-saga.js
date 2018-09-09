/**
 * Saga for project data
 * @module sagas/project-saga
 */

import {
  take,
  fork,
  put,
  call,
} from 'redux-saga/effects';

import {
  FETCH_DATA,
  FETCHED_PROJECT_DATA,
  FETCHING_ERROR_PROJECTS_DATA,
} from '../actions/action-types';
import { getProjects } from '../api';

/**
 *Generator function for fetching the data
 */
function* fetchProjectsData() {
  try {
    const projects = yield call(getProjects);
    let projectsID = [];
    let projectsHash = {};

    for (let project of projects) {
      const { id } = project;
      projectsID.push(id);
      projectsHash[id] = project;
    }

    const payload = {
      projectsID,
      projectsHash,
    }

    yield put({
      type: FETCHED_PROJECT_DATA,
      payload
    })
  } catch (errMsg) {
    yield put({
      type: FETCHING_ERROR_PROJECTS_DATA,
      message: errMsg || 'Error while fetching projects data.'
    })
  }
}

/**
 * Generator function for takes FETCH_DATA action type
 */
export function* watchForProjectsFetchData() {
  yield take(FETCH_DATA)
  yield fork(fetchProjectsData)
}
