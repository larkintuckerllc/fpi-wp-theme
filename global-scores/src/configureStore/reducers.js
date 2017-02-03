import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import indicators from '../ducks/indicators';
import rotation from '../ducks/rotation';
import scale from '../ducks/scale';
import selected from '../ducks/selected';

export default combineReducers({
  // TODO: RECONSIDER REMOVING FORM
  form: formReducer,
  // TODO: RECONSIDER REMOVING ROUTING
  routing: routerReducer,
  indicators,
  rotation,
  scale,
  selected,
});
