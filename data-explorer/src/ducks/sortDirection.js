import { ACTION_PREFIX } from '../strings';

export const ASCENDING = 'ASCENDING';
export const DESCENDING = 'DESCENDING';
// API
// REDUCER MOUNT POINT
const reducerMountPoint = 'sortDirection';
// ACTIONS
export const SET_SORT_DIRECTION = `${ACTION_PREFIX}SET_SORT_DIRECTION`;
// SCHEMA
// REDUCERS
export default (state = ASCENDING, action) => {
  switch (action.type) {
    case SET_SORT_DIRECTION:
      return action.value;
    default:
      return state;
  }
};
// ACCESSORS AKA SELECTORS
export const getSortDirection = (state) => state[reducerMountPoint];
// ACTION CREATOR VALIDATORS
const validSortDirection = value =>
  !(value === undefined || typeof value !== 'string');
// ACTION CREATORS
export const setSortDirection = (value) => {
  if (!validSortDirection(value)) throw new Error();
  return ({
    type: SET_SORT_DIRECTION,
    value,
  });
};
