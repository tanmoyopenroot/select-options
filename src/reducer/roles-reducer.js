/**
 * Reducer for roles
 * @module reducers/roles-reducers
 */

import { FETCHED_ROLES_DATA } from '../actions/action-types';
import { initRolesState } from './initial-state';

/**
 * Reducer function
 *
 * @param {Object} [state=initProjectState]
 * @param {Object} action
 * @returns
 */
const rolesReducer = (state = initRolesState, action) => {
  const { type, payload } = action;

  switch(type) {
    case FETCHED_ROLES_DATA:
      const { rolesID, rolesHash } = payload;
      return {
        rolesID,
        rolesHash,
      }
    default: 
      return state;
  }
}

export default rolesReducer;
