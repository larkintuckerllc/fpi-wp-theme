import React, { PropTypes } from 'react';
import { colorScale, scaleWidth } from '../../../../../util/misc';
import styles from './index.scss';

const ExplorerListIndicator = ({ indicator }) => (
  <div className="panel panel-default">
    <div className="panel-body">
      <div id={styles.rootContainer}>
        {/*
        <div
          id={styles.rootContainerLeft}
          style={{ backgroundImage: `url(${indicator.image})` }}
        />
        */}
        <div id={styles.rootContainerRight}>
          <div id={styles.rootContainerRightTitle}>
            <a href={indicator.link}>{indicator.name}</a>
          </div>
          <div id={styles.rootContainerRightSpecies}>
            {indicator.species}
          </div>
          <div id={styles.rootContainerRightCountry}>
            {indicator.country}
          </div>
          <div className={styles.rootContainerRightIndicator}>
            <div className={styles.rootContainerRightIndicatorTitle}>Ecological</div>
            <div className={styles.rootContainerRightIndicatorValue}>
              <div
                className={styles.rootContainerRightIndicatorValueScale}
                style={{
                  width: `${scaleWidth(Number(indicator.ecological))}%`,
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
                  width: `${scaleWidth(Number(indicator.economic))}%`,
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
                  width: `${scaleWidth(Number(indicator.community))}%`,
                  backgroundColor: colorScale(Number(indicator.community)),
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
ExplorerListIndicator.propTypes = {
  indicator: PropTypes.object.isRequired,
};
export default ExplorerListIndicator;
