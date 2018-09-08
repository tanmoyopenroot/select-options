import { FETCHED_PROJECT_DATA } from '../actions/action-types';
import { initProjectState } from './initial-state';

const projectsReducer = (state = initProjectState, action) => {
  const { type } = action;

  switch(type) {
    case FETCHED_PROJECT_DATA:
      const { projectsID, projectsHash } = action;
      return {
        projectsID,
        projectsHash,
      }
    default: 
      return state;
  }
}

export default projectsReducer;
