import React from 'react';
import { SelectComponent } from '../select-component';
import { shallow } from 'enzyme';

const setup = () => {
  const users = {
    usersID: [1, 2, 3],
    usersHash: {
      1: { id: 1, name: 'John Doe'}, 
      2: { id: 2, name: 'Alice' },
      3: { id: 3, name: 'Bob' }
    },
  }

  const mocksaveSelectData = jest.fn((type, setID, id) => {});

  return {
    users,
    mocksaveSelectData,
  }
} 

describe('Testing <SelectComponent />', () => {
  const { users, mocksaveSelectData } = setup();
  const { usersID, usersHash } = users;

  const wrapper = shallow(
    <SelectComponent
      IDList={usersID}
      data={usersHash}
      type='user'
      setID={1}
      saveSelectData={mocksaveSelectData}
    />,
  )

  test('Testing SelectComponent\'s props', () => {
    expect(wrapper.length).toEqual(1);
    expect(wrapper.children().length).toBe(1);
    expect(Object.keys(wrapper.instance().props).length).toEqual(5);
    expect(wrapper.instance().props.IDList).toEqual(usersID);
    expect(wrapper.instance().props.data).toEqual(usersHash);
    expect(wrapper.instance().props.type).toEqual('user');
    expect(wrapper.instance().props.setID).toEqual(1);
    expect(wrapper).toMatchSnapshot();
  })

  test('Testing SelectComponent\'s state', () => {  
    expect(wrapper.state().showList).toEqual(false);
    expect(wrapper.state().selectedId).toEqual(0);
  });

  test('Testing SelectComponent\'s functions', () => {  
    wrapper.instance().handleSelect(1)
    expect(mocksaveSelectData.mock.calls.length).toBe(1);
    expect(mocksaveSelectData.mock.calls[0][0]).toBe('user');
    expect(mocksaveSelectData.mock.calls[0][1]).toBe(1);
    expect(mocksaveSelectData.mock.calls[0][2]).toBe(1);
  });
})
