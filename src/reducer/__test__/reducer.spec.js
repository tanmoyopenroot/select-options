import {
  initUsersState,
  initRolesState,
  initProjectState,
  initSelectedState,
  initErrorState,
} from '../initial-state';
import {
  FETCHED_USERS_DATA,
  FETCHED_ROLES_DATA,
  FETCHED_PROJECT_DATA,
  SET_SELECTED_USER,
  SET_SELECTED_ROLE,
  SET_SELECTED_PROJECT,
  FETCHING_ERROR_USERS_DATA,
  FETCHING_ERROR_ROLES_DATA,
  FETCHING_ERROR_PROJECTS_DATA,
} from '../../actions/action-types';
import usersReducer from '../users-reducer';
import rolesReducer from '../roles-reducer';
import projectsReducer from '../projects-reducer';
import selectReducer from '../select-reducer';
import errorReducer from '../error-reducer'

const setup = () => {
  const users = {
    usersID: [1, 2, 3],
    usersHash: {
      1: { id: 1, name: 'John Doe'}, 
      2: { id: 2, name: 'Alice' },
      3: { id: 3, name: 'Bob' }
    },
  }
  
  const roles = {
    rolesID: [1, 2, 3],
    rolesHash: {
      1: { id: 1, name: 'Admin'}, 
      2: { id: 2, name: 'Editor' },
      3: { id: 3, name: 'Viewer' }
    },
  }
  
  const projects = {
    projectsID: [1, 2, 3],
    projectsHash: {
      1: { id: 1, name: 'Trip to space'},
      2: { id: 2, name: 'Assembly Ikea furniture' },
      3: { id: 3, name: 'Datumize Zentral' }
    },
  }

  return {
    users,
    roles,
    projects,
  }
}

describe('Testing Redux Reducers', () => {
  test('Testing intial states', () => {
    expect(usersReducer(undefined, {})).toEqual(initUsersState)
    expect(rolesReducer(undefined, {})).toEqual(initRolesState)
    expect(projectsReducer(undefined, {})).toEqual(initProjectState)
    expect(selectReducer(undefined, {})).toEqual(initSelectedState)
    expect(errorReducer(undefined, {})).toEqual(initErrorState)
  })

  test('Testing users reducer', () => {
    const { users } = setup();
    const { usersID, usersHash } = users;

    const action = {
      type: FETCHED_USERS_DATA,
      payload: {
        usersID,
        usersHash,
      }
    }
    expect(usersReducer(undefined, action)).toEqual(users);
  })

  test('Testing roles reducer', () => {
    const { roles } = setup();
    const { rolesID, rolesHash } = roles;

    const action = {
      type: FETCHED_ROLES_DATA,
      payload: {
        rolesID,
        rolesHash,
      }
    }
    expect(rolesReducer(undefined, action)).toEqual(roles);
  })


  test('Testing project reducer', () => {
    const { projects } = setup();
    const { projectsID, projectsHash } = projects;

    const action = {
      type: FETCHED_PROJECT_DATA,
      payload: {
        projectsID,
        projectsHash,
      }
    }
    expect(projectsReducer(undefined, action)).toEqual(projects);
  })

  test('Testing select reducer', () => {
    const { initSelectedState } = setup();

    const expectedUserSelected = {
      projects: {},
      roles: {},
      users: {
        set_1: 2,
      },
    }

    let action = {
      type: SET_SELECTED_USER,
      setID: 1,
      id: 2,
    }

    expect(selectReducer(initSelectedState, action)).toEqual(expectedUserSelected);
    

    const expectedRoleSelected = {
      projects: {},
      roles: {
        set_1: 3,
      },
      users: {},
    }

    action = {
      type: SET_SELECTED_ROLE,
      setID: 1,
      id: 3,
    }

    expect(selectReducer(initSelectedState, action)).toEqual(expectedRoleSelected);
    
  
    const expectedProjectSelected = {
      projects: {
        set_1: 1,
      },
      roles: {},
      users: {},
    }

    action = {
      type: SET_SELECTED_PROJECT,
      setID: 1,
      id: 1,
    }

    expect(selectReducer(initSelectedState, action)).toEqual(expectedProjectSelected);
  })

  test('Testing error reducer', () => {
    let expectedError = {
      usersFetchError: 'Error while fetching users data.',
      rolesFetchError: null,
      projectsFetchError: null,
    }

    let action = {
      type: FETCHING_ERROR_USERS_DATA,
      message: 'Error while fetching users data.'
    }

    expect(errorReducer(initErrorState, action)).toEqual(expectedError);

    expectedError = {
      usersFetchError: null,
      rolesFetchError: 'Error while fetching roles data.',
      projectsFetchError: null,
    }

    action = {
      type: FETCHING_ERROR_ROLES_DATA,
      message: 'Error while fetching roles data.'
    }

    expect(errorReducer(initErrorState, action)).toEqual(expectedError);

    expectedError = {
      usersFetchError: null,
      rolesFetchError: null,
      projectsFetchError: 'Error while fetching projects data.',
    }

    action = {
      type: FETCHING_ERROR_PROJECTS_DATA,
      message: 'Error while fetching projects data.'
    }

    expect(errorReducer(initErrorState, action)).toEqual(expectedError);
  })
})