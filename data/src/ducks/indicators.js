import { combineReducers } from 'redux';
import { normalize, Schema, arrayOf } from 'normalizr';
import { createSelector } from 'reselect';
import { ACTION_PREFIX } from '../strings';
// API

// REDUCER MOUNT POINT
const reducerMountPoint = 'indicators';
// ACTIONS
export const FETCH_INDICATORS = `${ACTION_PREFIX}FETCH_INDICATORS`;
// SCHEMA
const indicatorSchema = new Schema('indicators');
const indicatorsSchema = arrayOf(indicatorSchema);
// REDUCERS
const byId = (state = {}, action) => {
  switch (action.type) {
    case FETCH_INDICATORS: {
      return {
        ...state,
        ...action.response.entities.indicators,
      };
    }
    default:
      return state;
  }
};
const ids = (state = [], action) => {
  switch (action.type) {
    case FETCH_INDICATORS:
      return action.response.result;
    default:
      return state;
  }
};
const isFetching = (state = true, action) => {
  switch (action.type) {
    case FETCH_INDICATORS:
      return false;
    default:
      return state;
  }
};
export default combineReducers({
  byId,
  ids,
  isFetching,
});
// ACCESSORS AKA SELECTORS
export const getIndicator = (state, id) => state[reducerMountPoint].byId[id];
const getIndicatorsIds = state => state[reducerMountPoint].ids;
const getIndicatorsById = state => state[reducerMountPoint].byId;
export const getIndicators = createSelector(
  [getIndicatorsIds, getIndicatorsById],
  (indicatorsIds, indicatorsById) => indicatorsIds.map(id => indicatorsById[id])
);
export const getIsFetchingIndicators = (state) => state[reducerMountPoint].isFetching;
// ACTION CREATOR VALIDATORS
// ACTION CREATORS
export const fetchIndicators = () => (dispatch) => {
  dispatch({
    type: FETCH_INDICATORS,
    response: normalize(window.indicators, indicatorsSchema),
  });
};
