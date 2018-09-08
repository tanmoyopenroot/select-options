import {
  all,
  call
} from 'redux-saga/effects';

import { watchForUserFetchData } from './users-saga';
import { watchForRolesFetchData } from './roles-saga';
import { watchForProjectsFetchData } from './projects-saga';
import { watchForSelectedData } from './select-saga';

export default function* rootSaga() {
  yield all([
    call(watchForUserFetchData),
    call(watchForRolesFetchData),
    call(watchForProjectsFetchData),
    call(watchForSelectedData),
  ]);
}
