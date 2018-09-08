import { combineReducers } from 'redux';

import usersReducer from './users-reducer';
import rolesReducer from './roles-reducer';
import projectsReducer from './projects-reducer';
import selectReducer from './select-reducer';

 /**
 * Combining the reducers
 */
export default combineReducers({
  users: usersReducer,
  roles: rolesReducer,
  projects: projectsReducer,
  selected: selectReducer,
})
