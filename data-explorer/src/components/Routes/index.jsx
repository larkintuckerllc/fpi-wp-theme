import React, { PropTypes } from 'react';
import { hashHistory, Route, Router } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import Spreadsheet from './Spreadsheet';

const Routes = (props, { store }) => (
  <Router history={syncHistoryWithStore(hashHistory, store)}>
    <Route path="/" component={Spreadsheet} />
  </Router>
);
Routes.contextTypes = {
  store: PropTypes.object.isRequired,
};
export default Routes;
