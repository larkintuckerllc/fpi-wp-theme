import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { compose, pure, setDisplayName, setPropTypes } from 'recompose';
import * as fromDemo from '../../ducks/demo';
import { LAYERS } from '../../strings';
import Layer from './Layer';

const enhance = compose(
  connect(
    (state) => ({
      demo: fromDemo.getDemo(state),
    }),
    {
      setDemo: fromDemo.setDemo,
    }
  ),
  pure,
  setPropTypes({
    demo: PropTypes.bool.isRequired,
    setDemo: PropTypes.func.isRequired,
  }),
  setDisplayName('App')
);
export default enhance(({ demo, setDemo }) => (
  <div>
    <div style={{ color: demo ? 'red' : 'black' }}>Hello App</div>
    <button onClick={() => setDemo(!demo)} >Toggle</button>
    <ul>
      <Layer id={0} name={LAYERS[0].name} />
      <Layer id={1} name={LAYERS[1].name} />
    </ul>
  </div>
));
