import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { getIndicators } from '../../../ducks/indicators';
import styles from './index.scss';

const colorScale = (value) => {
  if (value <= 1.5) return 'rgb(255,0,0)';
  if (value <= 2.0) return 'rgb(255,80,0)';
  if (value <= 2.5) return 'rgb(255,127,0)';
  if (value <= 3) return 'rgb(255,160,0)';
  if (value <= 3.5) return 'rgb(255,255,0)';
  if (value <= 4) return 'rgb(160,255,0)';
  if (value <= 4.5) return 'rgb(80,255,0)';
  return 'rgb(0,255,0)';
};
const Spreadsheet = ({ indicators }) => (
  <div id={styles.root}>
    <div
      id={styles.rootFixedFishery}
      className={styles.rootFixed}
    >
      <div>Fishery</div>
      {indicators.map(o => (
        <div
          key={o.id}
        >{o.name}</div>
      ))}
    </div>
    <div
      id={styles.rootFixedCountry}
      className={`${styles.rootFixed} ${styles.rootFixedLast}`}
    >
      <div>Country</div>
      {indicators.map(o => (
        <div
          key={o.id}
        >Country</div>
      ))}
    </div>
    <div className={styles.rootFlexible}>
      <div>Ecological</div>
      {indicators.map(o => (
        <div
          key={o.id}
          style={{ backgroundColor: colorScale(o.ecological) }}
        >{o.ecological.toString()}</div>
      ))}
    </div>
    <div className={styles.rootFlexible}>
      <div>Economic</div>
      {indicators.map(o => (
        <div
          key={o.id}
          style={{ backgroundColor: colorScale(o.economic) }}
        >{o.economic.toString()}</div>
      ))}
    </div>
    <div className={styles.rootFlexible}>
      <div>Community</div>
      {indicators.map(o => (
        <div
          key={o.id}
          style={{ backgroundColor: colorScale(o.community) }}
        >{o.community.toString()}</div>
      ))}
    </div>
  </div>
);
Spreadsheet.propTypes = {
  indicators: PropTypes.array.isRequired,
};
export default connect(state => ({
  indicators: getIndicators(state),
}),
null
)(Spreadsheet);
