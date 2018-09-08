/**
 * Reducer for projects
 * @module reducers/project-reducers
 */

import { FETCHED_PROJECT_DATA } from '../actions/action-types';
import { initProjectState } from './initial-state';

/**
 * Reducer function
 *
 * @param {Object} [state=initProjectState]
 * @param {Object} action
 * @returns
 */
const projectsReducer = (state = initProjectState, action) => {
  const { type, payload } = action;

  switch(type) {
    case FETCHED_PROJECT_DATA:
      const { projectsID, projectsHash } = payload;
      return {
        projectsID,
        projectsHash,
      }
    default: 
      return state;
  }
}

export default projectsReducer;
