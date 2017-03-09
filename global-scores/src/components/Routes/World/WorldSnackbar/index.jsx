import React, { PropTypes } from 'react';
import styles from './index.scss';

const scaleWidth = v => 100 * ((v - 1) / 5);
const scaleColor = v => {
  if (v >= 4) return 'green';
  if (v >= 3) return 'yellow';
  return 'red';
};
const WorldSnackbar = ({ indicator }) => (
  <div
    id={styles.root}
  >
    <div id={styles.rootContainer}>
      <div
        id={styles.rootContainerLeft}
        style={{ backgroundImage: `url(${indicator.image})` }}
      />
      <div id={styles.rootContainerRight}>
        <div id={styles.rootContainerRightTitle}>
          <a href={indicator.link}>{indicator.name}</a>
        </div>
        <div className={styles.rootContainerRightIndicator}>
          <div className={styles.rootContainerRightIndicatorTitle}>Ecological</div>
          <div className={styles.rootContainerRightIndicatorValue}>
            <div
              className={styles.rootContainerRightIndicatorValueScale}
              style={{
                width: `${scaleWidth(Number(indicator.ecological))}%`,
                backgroundColor: scaleColor(Number(indicator.ecological)),
              }}
            />
          </div>
        </div>
        <div className={styles.rootContainerRightIndicator}>
          <div className={styles.rootContainerRightIndicatorTitle}>Economic</div>
          <div className={styles.rootContainerRightIndicatorValue}>
            <div
              className={styles.rootContainerRightIndicatorValueScale}
              style={{
                width: `${scaleWidth(Number(indicator.economic))}%`,
                backgroundColor: scaleColor(Number(indicator.economic)),
              }}
            />
          </div>
        </div>
        <div className={styles.rootContainerRightIndicator}>
          <div className={styles.rootContainerRightIndicatorTitle}>Community</div>
          <div className={styles.rootContainerRightIndicatorValue}>
            <div
              className={styles.rootContainerRightIndicatorValueScale}
              style={{
                width: `${scaleWidth(Number(indicator.community))}%`,
                backgroundColor: scaleColor(Number(indicator.community)),
              }}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);
WorldSnackbar.propTypes = {
  indicator: PropTypes.object,
};
export default WorldSnackbar;
