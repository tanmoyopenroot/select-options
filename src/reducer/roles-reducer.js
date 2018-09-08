import { FETCHED_ROLES_DATA } from '../actions/action-types';
import { initRolesState } from './initial-state';

const rolesReducer = (state = initRolesState, action) => {
  const { type } = action;

  switch(type) {
    case FETCHED_ROLES_DATA:
      const { rolesID, rolesHash } = action;
      return {
        rolesID,
        rolesHash,
      }
    default: 
      return state;
  }
}

export default rolesReducer;
