import { ACTION_PREFIX } from '../strings';

// API
// REDUCER MOUNT POINT
const reducerMountPoint = 'demo';
// ACTIONS
export const SET_DEMO = `${ACTION_PREFIX}SET_DEMO`;
// SCHEMA
// REDUCERS
export default (state = false, action) => {
  switch (action.type) {
    case SET_DEMO:
      return action.value;
    default:
      return state;
  }
};
// ACCESSORS AKA SELECTORS
export const getDemo = (state) => state[reducerMountPoint];
// ACTION CREATOR VALIDATORS
const validDemo = value =>
  !(value === undefined || typeof value !== 'boolean');
// ACTION CREATORS
export const setDemo = (value) => {
  if (!validDemo(value)) throw new Error();
  return ({
    type: SET_DEMO,
    value,
  });
};
