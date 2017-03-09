import React, { PropTypes } from 'react';
import { hashHistory, IndexRoute, Route, Router } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import World from './World';
// import Indicator from './Indicator';

const Routes = (props, { store }) => (
  <Router history={syncHistoryWithStore(hashHistory, store)}>
    <Route path="/">
      <IndexRoute component={World} />
      <Route path="indicators/:id" component={World} />
    </Route>
  </Router>
);
Routes.contextTypes = {
  store: PropTypes.object.isRequired,
};
export default Routes;
