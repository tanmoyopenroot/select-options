import { combineReducers } from 'redux';

import usersReducer from './users-reducer';
import rolesReducer from './roles-reducer';
import projectsReducer from './projects-reducer';
import selectReducer from './select-reducer';
import errorReducer from './error-reducer';

 /**
 * Combining the reducers
 */
export default combineReducers({
  users: usersReducer,
  roles: rolesReducer,
  projects: projectsReducer,
  error: errorReducer,
  selected: selectReducer,
})
