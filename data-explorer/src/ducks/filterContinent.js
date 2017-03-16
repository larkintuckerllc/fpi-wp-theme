import { ACTION_PREFIX } from '../strings';

// API
// REDUCER MOUNT POINT
const reducerMountPoint = 'filterContinent';
// ACTIONS
export const SET_FILTER_CONTINENT = `${ACTION_PREFIX}SET_FILTER_CONTINENT`;
// SCHEMA
// REDUCERS
export default (state = null, action) => {
  switch (action.type) {
    case SET_FILTER_CONTINENT:
      return action.value;
    default:
      return state;
  }
};
// ACCESSORS AKA SELECTORS
export const getFilterContinent = (state) => state[reducerMountPoint];
// ACTION CREATOR VALIDATORS
const validFilterContinent = value =>
  !(value === undefined || typeof value !== 'string');
// ACTION CREATORS
export const setFilterContinent = (value) => {
  if (!validFilterContinent(value)) throw new Error();
  return ({
    type: SET_FILTER_CONTINENT,
    value,
  });
};
