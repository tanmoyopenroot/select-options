import {
  FETCH_DATA,
  SELECTED_DATA
} from '../action-types';

import { fetchData } from '../fetch-actions';
import { saveSelectData } from '../select-actions';

describe('Testing Redux Actions', () => {
  test('Testing FETCH_ACTIONS', () => {
    const expectedAction = {
      type: FETCH_DATA,
    }

    expect(fetchData()).toEqual(expectedAction);
  }) 

  test('Testing SELECT_ACTIONS', () => {
    const type = 'user';
    const setID = 1;
    const id = 1;
    const expectedSelectAction = {
      type: SELECTED_DATA,
      payload: {
        type,
        setID,
        id
      }
    }

    expect(saveSelectData(type, setID, id)).toEqual(expectedSelectAction);
  }) 
})