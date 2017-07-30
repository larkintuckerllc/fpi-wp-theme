import React from 'react';
import { compose, pure, setDisplayName } from 'recompose';
import { LAYERS } from '../../strings';
import Layer from './Layer';

const enhance = compose(
  pure,
  setDisplayName('App')
);
export default enhance(() => (
  <ul>
    <Layer id={0} name={LAYERS[0].name} />
    <Layer id={1} name={LAYERS[1].name} />
  </ul>
));
