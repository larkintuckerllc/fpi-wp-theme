import { createAction, handleAction } from 'redux-actions';
import { ACTION_PREFIX } from '../strings';

const reducerMountPoint = 'demo';
// ACTION CREATORS
export const setDemo = createAction(`${ACTION_PREFIX}SET_DEMO`);
// REDUCERS
export default handleAction(setDemo, (state, action) => (
  action.payload
), false);
// SELECTORS
export const getDemo = (state) => state[reducerMountPoint];
