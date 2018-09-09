import React from 'react';
import { FromContainer } from '../form-container';
import { shallow } from 'enzyme';

import { fetchData } from '../../../actions/fetch-actions';

const setup = () => {
  const output = {
    set_1: {
      user: {
        id: 2,
        name: 'Alice',
      },
      role: {
        id: 3,
        name: 'Viewer',
      },
      project: {
        id: 1,
        name: 'Trip to space',
      }
    },
    set_2: {
      user: {
        id: 1,
        name: 'John Doe',
      },
      role: {
        id: 2,
        name: 'Editor',
      },
      project: {
        id: 2,
        name: 'Assembly Ikea furniture',
      }
    },
    set_3: {
      user: {
        id: 3,
        name: 'Bob',
      },
      role: {
        id: 1,
        name: 'Admin',
      },
      project: {
        id: 3,
        name: 'Datumize Zentral',
      }
    }
  }

  const selected = {
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

  const fetchError = {
    error: false,
    message: '',
  }

  return {
    users,
    roles,
    projects,
    output,
    selected,
    fetchError,
  }
} 

describe('Testing <FormContainer />', () => {
  const {
    users,
    roles,
    projects,
    selected,
    output,
    fetchError,
  } = setup();
    
  const wrapper = shallow(
    <FromContainer
      users={users}
      roles={roles}
      projects={projects}
      selected={selected}
      fetchData={fetchData}
      fetchError={fetchError}
    />,
  )

  test('Testing FormContainer\'s props', () => {
    expect(wrapper.length).toEqual(1);
    expect(wrapper.children().length).toBe(4);
    expect(Object.keys(wrapper.instance().props).length).toEqual(6);
    expect(wrapper.instance().props.users).toEqual(users);
    expect(wrapper.instance().props.roles).toEqual(roles);
    expect(wrapper.instance().props.projects).toEqual(projects);
    expect(wrapper.instance().props.fetchError).toEqual(fetchError);
    expect(wrapper).toMatchSnapshot();
  })

  test('Testing FormContainer\'s functions', () => {
    wrapper.instance().handleSubmit()
    expect(wrapper.state().errMsg).toEqual('');
    expect(wrapper.state().showErr).toEqual(false);
    expect(wrapper.state().submitOutput).toEqual(JSON.stringify(output));
    expect(wrapper.state().showOutput).toEqual(true);
  });

  test('Testing FormContainer\'s FetchError', () => {
    const setPropValue = {
      fetchError: {
        error: true,
        message: 'Error while fetching users data.'
      }
    }
    wrapper.setProps(setPropValue);
    expect(wrapper.children().length).toBe(1);
  })
})
