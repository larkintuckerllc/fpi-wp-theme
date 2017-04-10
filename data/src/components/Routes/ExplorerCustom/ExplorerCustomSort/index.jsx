import React, { PropTypes } from 'react';
import styles from './index.scss';
import { HIGH, AVG, LOW, NO } from '../../../../strings';

const ExplorerCustomSort = ({
  community,
  ecological,
  economic,
}) => (
  <table id={styles.root}>
    <thead>
      <tr>
        <th colSpan="4">Importance</th>
      </tr>
      <tr>
        <th>high</th>
        <th>avg.</th>
        <th>low</th>
        <th>no</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th colSpan="4">Ecological {ecological}</th>
      </tr>
      <tr>
        <td>
          <input
            type="radio"
            name={styles.rootEcological}
            value={HIGH}
            aria-label={HIGH}
            checked={ecological === HIGH}
          />
        </td>
        <td>
          <input
            type="radio"
            name={styles.rootEcological}
            value={AVG}
            aria-label={AVG}
            checked={ecological === AVG}
          />
        </td>
        <td>
          <input
            type="radio"
            name={styles.rootEcological}
            value={LOW}
            aria-label={LOW}
            checked={ecological === LOW}
          />
        </td>
        <td>
          <input
            type="radio"
            name={styles.rootEcological}
            value={NO}
            aria-label={NO}
            checked={ecological === NO}
          />
        </td>
      </tr>
      <tr>
        <th colSpan="4">Economic {economic}</th>
      </tr>
      <tr>
        <td><input type="radio" aria-label="X" /></td>
        <td><input type="radio" aria-label="X" /></td>
        <td><input type="radio" aria-label="X" /></td>
        <td><input type="radio" aria-label="X" /></td>
      </tr>
      <tr>
        <th colSpan="4">Community {community}</th>
      </tr>
      <tr>
        <td><input type="radio" aria-label="X" /></td>
        <td><input type="radio" aria-label="X" /></td>
        <td><input type="radio" aria-label="X" /></td>
        <td><input type="radio" aria-label="X" /></td>
      </tr>
    </tbody>
  </table>
);
ExplorerCustomSort.propTypes = {
  community: PropTypes.string.isRequired,
  ecological: PropTypes.string.isRequired,
  economic: PropTypes.string.isRequired,
};
export default ExplorerCustomSort;
