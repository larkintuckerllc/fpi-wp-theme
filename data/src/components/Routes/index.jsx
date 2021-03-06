import React, { PropTypes } from 'react';
import { hashHistory, IndexRoute, Route, Router } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import Explorer from './Explorer';
import ExplorerCustom from './ExplorerCustom';

const Routes = (props, { store }) => (
  <Router history={syncHistoryWithStore(hashHistory, store)}>
    <Route path="/">
      <IndexRoute component={Explorer} />
      <Route path="sort/:column/:direction" component={Explorer} />
      <Route
        path="sort/custom/:direction/:ecological/:economic/:community"
        component={ExplorerCustom}
      />
    </Route>
  </Router>
);
Routes.contextTypes = {
  store: PropTypes.object.isRequired,
};
export default Routes;
