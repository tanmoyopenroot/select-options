import { FETCHED_ROLES_DATA } from '../actions/action-types';
import { initRolesState } from './initial-state';

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
