import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { compose, pure, setDisplayName, setPropTypes, withProps } from 'recompose';
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
  withProps(({ id }) => ({ children: LAYERS.filter(o => o.parent === id) })),
  setPropTypes({
    children: PropTypes.array.isRequired,
    depth: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    isOpen: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    toggleIsOpen: PropTypes.func.isRequired,
  }),
  setDisplayName('Layer')
);
const Layer = enhance(({ children, depth, id, isOpen, name, toggleIsOpen }) => (
  <li className={`${styles.root} ${depth === 0 ? styles.rootZero : ''}`}>
    <div
      className={`${styles.rootName} ${styles[`rootName${depth.toString()}`]}`}
      onClick={() => {
        if (children.length === 0) return;
        toggleIsOpen(id);
      }}
    >
      <div className={styles.rootNameText}>{name}</div>
      {children.length !== 0
      // eslint-disable-next-line
      && <div className={`${styles.rootNameToggle} ${isOpen ? styles.rootNameToggleOpen : styles.rootNameToggleClosed}`} />
      }
    </div>
    {children.length !== 0 && isOpen &&
      <ul className={styles.rootChildren}>
        {children
        .map(o => <Layer key={o.id} id={o.id} name={o.name} depth={depth + 1} />)
        }
      </ul>
    }
  </li>
));
export default Layer;
