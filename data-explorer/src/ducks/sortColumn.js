import { ACTION_PREFIX } from '../strings';

export const FISHERY = 'FISHERY';
export const SPECIES = 'SPECIES';
export const COUNTRY = 'COUNTRY';
export const ECOLOGICAL = 'ECOLOGICAL';
export const ECONOMIC = 'ECONOMIC';
export const COMMUNITY = 'COMMUNITY';
// API
// REDUCER MOUNT POINT
const reducerMountPoint = 'sortColumn';
// ACTIONS
export const SET_SORT_COLUMN = `${ACTION_PREFIX}SET_SORT_COLUMN`;
// SCHEMA
// REDUCERS
export default (state = FISHERY, action) => {
  switch (action.type) {
    case SET_SORT_COLUMN:
      return action.value;
    default:
      return state;
  }
};
// ACCESSORS AKA SELECTORS
export const getSortColumn = (state) => state[reducerMountPoint];
// ACTION CREATOR VALIDATORS
const validSortColumn = value =>
  !(value === undefined || typeof value !== 'string');
// ACTION CREATORS
export const setSortColumn = (value) => {
  if (!validSortColumn(value)) throw new Error();
  return ({
    type: SET_SORT_COLUMN,
    value,
  });
};
