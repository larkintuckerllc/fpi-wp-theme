import React, { PropTypes } from 'react';
import {
  ASCENDING,
  FISHERY,
  SPECIES,
  COUNTRY,
  ECOLOGICAL,
  ECONOMIC,
  COMMUNITY,
} from '../../../../strings';
import ExplorerListIndicator from './ExplorerListIndicator';
import styles from './index.scss';

const ExplorerList = ({ indicators, sortColumn, sortDirection }) => {
  const compareLookup = {
  };
  compareLookup[FISHERY] = 'name';
  compareLookup[SPECIES] = 'species';
  compareLookup[COUNTRY] = 'country';
  compareLookup[ECOLOGICAL] = 'ecological';
  compareLookup[ECONOMIC] = 'economic';
  compareLookup[COMMUNITY] = 'community';
  const compareAsc = (a, b) => {
    if (a[compareLookup[sortColumn]] < b[compareLookup[sortColumn]]) {
      return -1;
    }
    if (a[compareLookup[sortColumn]] > b[compareLookup[sortColumn]]) {
      return 1;
    }
    return 0;
  };
  const compareDesc = (a, b) => {
    if (a[compareLookup[sortColumn]] < b[compareLookup[sortColumn]]) {
      return 1;
    }
    if (a[compareLookup[sortColumn]] > b[compareLookup[sortColumn]]) {
      return -1;
    }
    return 0;
  };
  const compare = sortDirection === ASCENDING ?
    compareAsc :
    compareDesc;
  indicators.sort(compare);
  for (let i = 0; i < indicators.length; i += 1) {
    const indicator = indicators[i];
    if (sortDirection === ASCENDING) {
      indicator.index = indicators.length - i - 1;
    } else {
      indicator.index = i;
    }
  }
  return (
    <div id={styles.root}>
      {indicators.map(o => (
        <ExplorerListIndicator
          key={o.id}
          indicator={o}
          count={indicators.length}
          sortColumn={sortColumn}
        />
      ))}
    </div>
  );
};
ExplorerList.propTypes = {
  indicators: PropTypes.array.isRequired,
  sortColumn: PropTypes.string.isRequired,
  sortDirection: PropTypes.string.isRequired,
};
export default ExplorerList;