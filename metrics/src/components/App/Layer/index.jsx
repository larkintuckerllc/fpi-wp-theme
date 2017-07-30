import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { compose, pure, setDisplayName, setPropTypes } from 'recompose';
import * as fromIsOpen from '../../../ducks/isOpen';
import { LAYERS } from '../../../strings';
import styles from './index.css';

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
    depth: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    isOpen: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    toggleIsOpen: PropTypes.func.isRequired,
  }),
  setDisplayName('Layer')
);
const Layer = enhance(({ depth, id, isOpen, name, toggleIsOpen }) => (
  <li className={styles.root}>
    <div
      className={`${styles.rootName} ${styles[`rootName${depth.toString()}`]}`}
      onClick={() => toggleIsOpen(id)}
    >
      {name}
    </div>
    {isOpen &&
      <ul className={styles.rootChildren}>
        {LAYERS
        .filter(o => o.parent === id)
        .map(o => <Layer key={o.id} id={o.id} name={o.name} depth={depth + 1} />)
        }
      </ul>
    }
  </li>
));
export default Layer;
