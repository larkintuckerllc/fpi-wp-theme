import { createAction, handleAction } from 'redux-actions';
import { ACTION_PREFIX } from '../strings';

const reducerMountPoint = 'isOpen';
// ACTION CREATORS
export const toggleIsOpen = createAction(`${ACTION_PREFIX}SET_IS_OPEN`);
// REDUCERS
export default handleAction(toggleIsOpen, (state, action) => {
  const newState = { ...state };
  if (state[action.payload] === undefined) {
    newState[action.payload] = true;
  } else {
    delete newState[action.payload];
  }
  return newState;
}, {});
// SELECTORS
export const getIsOpen = (state, id) => state[reducerMountPoint][id] !== undefined;
