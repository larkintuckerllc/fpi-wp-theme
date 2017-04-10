import React, { PropTypes } from 'react';
import styles from './index.scss';
import { HIGH, AVG, LOW, NO } from '../../../../strings';

const ExplorerCustomSort = ({
  community,
  ecological,
  economic,
  setSortCustom,
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
        <th colSpan="4">Ecological</th>
      </tr>
      <tr>
        <td>
          <input
            type="radio"
            name={styles.rootEcological}
            value={HIGH}
            aria-label={HIGH}
            checked={ecological === HIGH}
            onChange={() => {
              setSortCustom(HIGH, economic, community);
            }}
          />
        </td>
        <td>
          <input
            type="radio"
            name={styles.rootEcological}
            value={AVG}
            aria-label={AVG}
            checked={ecological === AVG}
            onChange={() => {
              setSortCustom(AVG, economic, community);
            }}
          />
        </td>
        <td>
          <input
            type="radio"
            name={styles.rootEcological}
            value={LOW}
            aria-label={LOW}
            checked={ecological === LOW}
            onChange={() => {
              setSortCustom(LOW, economic, community);
            }}
          />
        </td>
        <td>
          <input
            type="radio"
            name={styles.rootEcological}
            value={NO}
            aria-label={NO}
            checked={ecological === NO}
            onChange={() => {
              setSortCustom(NO, economic, community);
            }}
          />
        </td>
      </tr>
      <tr>
        <th colSpan="4">Economic</th>
      </tr>
      <tr>
        <td>
          <input
            type="radio"
            name={styles.rootEconomic}
            value={HIGH}
            aria-label={HIGH}
            checked={economic === HIGH}
            onChange={() => {
              setSortCustom(ecological, HIGH, community);
            }}
          />
        </td>
        <td>
          <input
            type="radio"
            name={styles.rootEconomic}
            value={AVG}
            aria-label={AVG}
            checked={economic === AVG}
            onChange={() => {
              setSortCustom(ecological, AVG, community);
            }}
          />
        </td>
        <td>
          <input
            type="radio"
            name={styles.rootEconomic}
            value={LOW}
            aria-label={LOW}
            checked={economic === LOW}
            onChange={() => {
              setSortCustom(ecological, LOW, community);
            }}
          />
        </td>
        <td>
          <input
            type="radio"
            name={styles.rootEconomic}
            value={NO}
            aria-label={NO}
            checked={economic === NO}
            onChange={() => {
              setSortCustom(ecological, NO, community);
            }}
          />
        </td>
      </tr>
      <tr>
        <th colSpan="4">Community</th>
      </tr>
      <tr>
        <td>
          <input
            type="radio"
            name={styles.rootCommunity}
            value={HIGH}
            aria-label={HIGH}
            checked={community === HIGH}
            onChange={() => {
              setSortCustom(ecological, economic, HIGH);
            }}
          />
        </td>
        <td>
          <input
            type="radio"
            name={styles.rootCommunity}
            value={AVG}
            aria-label={AVG}
            checked={community === AVG}
            onChange={() => {
              setSortCustom(ecological, economic, AVG);
            }}
          />
        </td>
        <td>
          <input
            type="radio"
            name={styles.rootCommunity}
            value={LOW}
            aria-label={LOW}
            checked={community === LOW}
            onChange={() => {
              setSortCustom(ecological, economic, LOW);
            }}
          />
        </td>
        <td>
          <input
            type="radio"
            name={styles.rootCommunity}
            value={NO}
            aria-label={NO}
            checked={community === NO}
            onChange={() => {
              setSortCustom(ecological, economic, NO);
            }}
          />
        </td>
      </tr>
    </tbody>
  </table>
);
ExplorerCustomSort.propTypes = {
  community: PropTypes.string.isRequired,
  ecological: PropTypes.string.isRequired,
  economic: PropTypes.string.isRequired,
  setSortCustom: PropTypes.func.isRequired,
};
export default ExplorerCustomSort;
