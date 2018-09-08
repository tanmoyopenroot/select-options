import { FETCHED_USERS_DATA } from '../actions/action-types';
import { initUsersState } from './initial-state';

const usersReducer = (state = initUsersState, action) => {
  const { type } = action;

  switch(type) {
    case FETCHED_USERS_DATA:
      const { usersID, usersHash } = action;
      return {
        usersID,
        usersHash,
      }
    default: 
      return state;
  }
}

export default usersReducer;
