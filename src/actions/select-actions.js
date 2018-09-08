import { SELECTED_DATA } from './action-types';

export const saveSelectData = (type, set, id) => ({
  type: SELECTED_DATA,
  payload: {
    type,
    setID: set,
    id,
  }
})
