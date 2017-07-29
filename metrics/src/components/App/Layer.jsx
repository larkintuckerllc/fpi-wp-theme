import React from 'react';
import { PropTypes } from 'prop-types';
import { compose, pure, setDisplayName, setPropTypes } from 'recompose';
import { LAYERS } from '../../strings';

const enhance = compose(
  pure,
  setPropTypes({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }),
  setDisplayName('Layer')
);
const Layer = enhance(({ id, name }) => (
  <li>
    {name}
    <ul>
      {LAYERS
      .filter(o => o.parent === id)
      .map(o => <Layer key={o.id} id={o.id} name={o.name} />)
      }
    </ul>
  </li>
));
export default Layer;
