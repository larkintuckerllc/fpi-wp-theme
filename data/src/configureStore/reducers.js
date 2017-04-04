import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import indicators from '../ducks/indicators';

export default combineReducers({
  form: formReducer,
  routing: routerReducer,
  indicators,
});
