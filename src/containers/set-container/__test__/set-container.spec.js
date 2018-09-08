import React from 'react';
import { SetContainer } from '../set-container';
import { shallow } from 'enzyme';

import { saveSelectData } from '../../../actions/select-actions';

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
    projects
  }
} 

describe('Testing <SetContainer />', () => {
  const { users, roles, projects } = setup();
    
  const wrapper = shallow(
    <SetContainer
      key={1}
      setID={1}
      saveSelectData={saveSelectData}
      users={users}
      roles={roles}
      projects={projects}
    />,
  )

  test('Testing SetContainer\'s props', () => { 
    expect(wrapper.length).toEqual(1);
    expect(wrapper.children().length).toBe(2);
    expect(Object.keys(wrapper.instance().props).length).toEqual(5);
    expect(wrapper.instance().props.users).toEqual(users);
    expect(wrapper.instance().props.roles).toEqual(roles);
    expect(wrapper.instance().props.projects).toEqual(projects);
    expect(wrapper).toMatchSnapshot();
  });
})
