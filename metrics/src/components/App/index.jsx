import React from 'react';
import { compose, pure, setDisplayName } from 'recompose';
import { LAYERS } from '../../strings';
import Layer from './Layer';
import styles from './index.css';

const enhance = compose(
  pure,
  setDisplayName('App')
);
export default enhance(() => (
  <ul id={styles.root}>
    <Layer id={0} name={LAYERS[0].name} depth={0} />
    <Layer id={1} name={LAYERS[1].name} depth={0} />
    <Layer id={1} name={LAYERS[1].name} depth={0} />
  </ul>
));
