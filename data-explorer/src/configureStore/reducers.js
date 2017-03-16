import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import indicators from '../ducks/indicators';
import sortDirection from '../ducks/sortDirection';
import sortColumn from '../ducks/sortColumn';
import filterContinent from '../ducks/filterContinent';

export default combineReducers({
  form: formReducer,
  routing: routerReducer,
  indicators,
  sortDirection,
  sortColumn,
  filterContinent,
});
