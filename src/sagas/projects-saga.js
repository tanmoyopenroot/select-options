import {
  take,
  fork,
  put
} from 'redux-saga/effects';

import {
  FETCH_DATA,
  FETCHED_PROJECT_DATA,
} from '../actions/action-types';
import { getProjects } from '../api';

function* fetchProjectsData() {
  const projects = getProjects();
  let projectsID = [];
  let projectsHash = {};

  for (let project of projects) {
    const { id } = project;
    projectsID.push(id);
    projectsHash[id] = project;
  }

  yield put({type: FETCHED_PROJECT_DATA, projectsID, projectsHash})
}

export function* watchForProjectsFetchData() {
  yield take(FETCH_DATA)
  yield fork(fetchProjectsData)
}
