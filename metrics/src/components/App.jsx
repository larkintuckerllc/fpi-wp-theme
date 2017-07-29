import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import * as fromDemo from '../ducks/demo';

const App = ({ demo, setDemo }) => (
  <div>
    <div style={{ color: demo ? 'red' : 'black' }}>Hello App</div>
    <button onClick={() => setDemo(!demo)} >Toggle</button>
  </div>
);
App.propTypes = {
  demo: PropTypes.bool.isRequired,
  setDemo: PropTypes.func.isRequired,
};
export default connect(
  (state) => ({
    demo: fromDemo.getDemo(state),
  }),
  {
    setDemo: fromDemo.setDemo,
  }
)(App);
