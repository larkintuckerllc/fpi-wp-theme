import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { compose, pure, setDisplayName, setPropTypes } from 'recompose';
import * as fromIsOpen from '../../ducks/isOpen';
import { LAYERS } from '../../strings';

const enhance = compose(
  connect(
    (state, { id }) => ({
      isOpen: fromIsOpen.getIsOpen(state, id),
    }),
    {
      toggleIsOpen: fromIsOpen.toggleIsOpen,
    }
  ),
  pure,
  setPropTypes({
    id: PropTypes.number.isRequired,
    isOpen: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    toggleIsOpen: PropTypes.func.isRequired,
  }),
  setDisplayName('Layer')
);
const Layer = enhance(({ id, isOpen, name, toggleIsOpen }) => (
  <li>
    <span onClick={() => toggleIsOpen(id)}>{name}</span>
    {isOpen &&
      <ul>
        {LAYERS
        .filter(o => o.parent === id)
        .map(o => <Layer key={o.id} id={o.id} name={o.name} />)
        }
      </ul>
    }
  </li>
));
export default Layer;
