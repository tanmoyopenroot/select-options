/**
 * Reducer for users
 * @module reducers/users-reducers
 */

import { FETCHED_USERS_DATA } from '../actions/action-types';
import { initUsersState } from './initial-state';

/**
 * Reducer function
 *
 * @param {Object} [state=initProjectState]
 * @param {Object} action
 * @returns
 */
const usersReducer = (state = initUsersState, action) => {
  const { type, payload } = action;

  switch(type) {
    case FETCHED_USERS_DATA:
      const { usersID, usersHash } = payload;
      return {
        usersID,
        usersHash,
      }
    default: 
      return state;
  }
}

export default usersReducer;
