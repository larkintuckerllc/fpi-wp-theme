import React, { Component, PropTypes } from 'react';
import { colorScale } from '../../../../util/misc.js';
import styles from './index.scss';

const scaleWidth = v => 100 * ((v - 1) / 5);
class WorldSnackbar extends Component {
  constructor() {
    super();
    this.state = { mounted: false };
  }
  componentDidMount() {
    window.setTimeout(() => {
      this.setState({ mounted: true });
    }, 500);
  }
  render() {
    const { indicator } = this.props;
    const { mounted } = this.state;
    return (
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
                    width: mounted ? `${scaleWidth(Number(indicator.ecological))}%` : '0px',
                    backgroundColor: colorScale(Number(indicator.ecological)),
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
                    width: mounted ? `${scaleWidth(Number(indicator.economic))}%` : '0px',
                    backgroundColor: colorScale(Number(indicator.economic)),
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
                    width: mounted ? `${scaleWidth(Number(indicator.community))}%` : '0px',
                    backgroundColor: colorScale(Number(indicator.community)),
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
WorldSnackbar.propTypes = {
  indicator: PropTypes.object,
};
export default WorldSnackbar;
