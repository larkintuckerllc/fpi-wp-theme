import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { getIndicator } from '../../../../ducks/indicators';
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
    style={{ transform: indicator === null ? 'translateY(130px)' : 'translateY(0px)' }}
  >
    { indicator !== null &&
      <div id={styles.rootContainer}>
        <img
          id={styles.rootContainerLeft}
          width="165"
          height="110"
          src={indicator.image}
          alt="thumbnail"
        />
        <div id={styles.rootContainerRight}>
          <div id={styles.rootContainerRightTitle}>
            {indicator.title}
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
    }
  </div>
);
WorldSnackbar.propTypes = {
  indicator: PropTypes.object,
};
export default connect(
  (state, ownProps) => ({
    indicator: ownProps.selected !== null ?
      getIndicator(state, ownProps.selected) :
      null,
  }),
  null
)(WorldSnackbar);
