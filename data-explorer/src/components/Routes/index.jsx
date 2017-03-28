import React, { PropTypes } from 'react';
import { hashHistory, Route, Router } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import Explorer from './Explorer';

const Routes = (props, { store }) => (
  <Router history={syncHistoryWithStore(hashHistory, store)}>
    <Route path="/" component={Explorer} />
  </Router>
);
Routes.contextTypes = {
  store: PropTypes.object.isRequired,
};
export default Routes;
