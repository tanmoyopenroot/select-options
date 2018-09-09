import { getUsers } from '../../selectors/users-selector';
import { getRoles } from '../../selectors/roles-selector';
import { getProjects } from '../../selectors/projects-selector';
import { checkError } from '../../selectors/error-selector';
import { getSelectedData } from '../../selectors/selected-selector'

const setup = () => {
  const state = {
    users: {
      usersID: [1, 2, 3],
      usersHash: {
        1: { id: 1, name: 'John Doe'}, 
        2: { id: 2, name: 'Alice' },
        3: { id: 3, name: 'Bob' }
      },
    },
    roles: {
      rolesID: [1, 2, 3],
      rolesHash: {
        1: { id: 1, name: 'Admin'}, 
        2: { id: 2, name: 'Editor' },
        3: { id: 3, name: 'Viewer' }
      },
    },
    projects: {
      projectsID: [1, 2, 3],
      projectsHash: {
        1: { id: 1, name: 'Trip to space'},
        2: { id: 2, name: 'Assembly Ikea furniture' },
        3: { id: 3, name: 'Datumize Zentral' }
      },
    },
    error: {
      usersFetchError: 'Error while fetching roles data.',
      rolesFetchError: null,
      projectsFetchError: null,
    },
    selected: {
      projects: {
        set_1: 1,
        set_2: 2,
        set_3: 3,
      },
      roles: {
        set_1: 3,
        set_2: 2,
        set_3: 1,
      },
      users: {
        set_1: 2,
        set_2: 1,
        set_3: 3,
      },
    }
  }

  return {
    state,
  }
}

describe('Testing State Selectors', () => {
  test('Testing users selector', () => {
    const { state } = setup();

    const expectedUsers = {
      usersID: [1, 2, 3],
      usersHash: {
        1: { id: 1, name: 'John Doe'}, 
        2: { id: 2, name: 'Alice' },
        3: { id: 3, name: 'Bob' }
      },
    }

    expect(getUsers(state)).toEqual(expectedUsers);
  })

  test('Testing roles selector', () => {
    const { state } = setup();

    const expectedRoles = {
      rolesID: [1, 2, 3],
      rolesHash: {
        1: { id: 1, name: 'Admin'}, 
        2: { id: 2, name: 'Editor' },
        3: { id: 3, name: 'Viewer' }
      },
    }

    expect(getRoles(state)).toEqual(expectedRoles);
  })

  test('Testing projects selector', () => {
    const { state } = setup();

    const expectedProjects = {
      projectsID: [1, 2, 3],
      projectsHash: {
        1: { id: 1, name: 'Trip to space'},
        2: { id: 2, name: 'Assembly Ikea furniture' },
        3: { id: 3, name: 'Datumize Zentral' }
      },
    }

    expect(getProjects(state)).toEqual(expectedProjects);
  })

  test('Testing fetch error selector', () => {
    const { state } = setup();

    const expectedError = {
      error: true,
      message: 'Error while fetching roles data.',
    }

    expect(checkError(state)).toEqual(expectedError);
  })

  test('Testing selected selector', () => {
    const { state } = setup();

    const expectedSelected = {
      projects: {
        set_1: 1,
        set_2: 2,
        set_3: 3,
      },
      roles: {
        set_1: 3,
        set_2: 2,
        set_3: 1,
      },
      users: {
        set_1: 2,
        set_2: 1,
        set_3: 3,
      },
    }

    expect(getSelectedData(state)).toEqual(expectedSelected);
  })
})
