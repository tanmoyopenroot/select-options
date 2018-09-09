/**
 * Reducer for errors
 * @module reducers/error-reducers
 */

import {
  FETCHING_ERROR_USERS_DATA,
  FETCHING_ERROR_ROLES_DATA,
  FETCHING_ERROR_PROJECTS_DATA,
} from '../actions/action-types';
import { initErrorState } from './initial-state';

/**
 * Reducer function
 *
 * @param {Object} [state=initProjectState]
 * @param {Object} action
 * @returns
 */
const errorReducer = (state = initErrorState, action) => {
  const { type, message } = action;

  switch(type) {
      case FETCHING_ERROR_USERS_DATA:
      return Object.assign({}, state, {
        usersFetchError: message
      });
    case FETCHING_ERROR_ROLES_DATA:
      return Object.assign({}, state, {
        rolesFetchError: message
      });
    case FETCHING_ERROR_PROJECTS_DATA:
      return Object.assign({}, state, {
        projectsFetchError: message
      });
    default: 
      return state;
  }
}

export default errorReducer;
