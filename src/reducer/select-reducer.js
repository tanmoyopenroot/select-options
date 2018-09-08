/**
 * Reducer for select
 * @module reducers/select-reducers
 */

import {
  SET_SELECTED_USER,
  SET_SELECTED_ROLE,
  SET_SELECTED_PROJECT
} from '../actions/action-types';
import { initSelectedState } from './initial-state';

/**
 * Reducer function
 *
 * @param {Object} [state=initProjectState]
 * @param {Object} action
 * @returns
 */
const selectReducer = (state = initSelectedState, action) => {
  const { type, setID, id } = action;
  const { users, roles, projects } = state;

  switch(type) {
    case SET_SELECTED_USER:
      return {
        users: Object.assign({}, users, {
          [`set_${setID}`]: id,
        }),
        roles,
        projects,
      }
    case SET_SELECTED_ROLE:
      return {
        users,
        roles: Object.assign({}, roles, {
          [`set_${setID}`]: id,
        }),
        projects,
      }
    case SET_SELECTED_PROJECT:
      return {
        users,
        roles,
        projects: Object.assign({}, projects, {
          [`set_${setID}`]: id,
        })
      }
    default: 
      return state;
  }
}

export default selectReducer;
