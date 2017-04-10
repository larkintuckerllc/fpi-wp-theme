import React, { PropTypes } from 'react';
import {
  ASCENDING,
  FISHERY,
  SPECIES,
  COUNTRY,
  ECOLOGICAL,
  ECONOMIC,
  COMMUNITY,
  CUSTOM,
  HIGH,
  AVG,
  LOW,
  NO,
} from '../../strings';
import ExplorerListIndicator from './ExplorerListIndicator';
import styles from './index.scss';

const CUSTOM_SCALE = {
};
CUSTOM_SCALE[HIGH] = 2;
CUSTOM_SCALE[AVG] = 1;
CUSTOM_SCALE[LOW] = 0.5;
CUSTOM_SCALE[NO] = 0;
const ExplorerList = ({
  community,
  ecological,
  economic,
  indicators,
  sortColumn,
  sortDirection,
}) => {
  const compareLookup = {
  };
  compareLookup[FISHERY] = 'name';
  compareLookup[SPECIES] = 'species';
  compareLookup[COUNTRY] = 'country';
  compareLookup[ECOLOGICAL] = 'ecological';
  compareLookup[ECONOMIC] = 'economic';
  compareLookup[COMMUNITY] = 'community';
  compareLookup[CUSTOM] = 'name';
  const compareFallback = (a, b) => {
    const aCompare = a.name;
    const bCompare = b.name;
    if (aCompare < bCompare) {
      return -1;
    }
    if (aCompare > bCompare) {
      return 1;
    }
    return 0;
  };
  const compareColumn = (a, b) => {
    const aCompare = a[compareLookup[sortColumn]];
    const bCompare = b[compareLookup[sortColumn]];
    if (sortColumn === FISHERY || sortColumn === SPECIES || sortColumn === COUNTRY) {
      if (aCompare < bCompare) {
        return sortDirection === ASCENDING ? -1 : 1;
      }
      if (aCompare > bCompare) {
        return sortDirection === ASCENDING ? 1 : -1;
      }
    } else {
      return sortDirection === ASCENDING ?
        Number(aCompare) - Number(bCompare) :
        Number(bCompare) - Number(aCompare);
    }
    return 0;
  };
  const combinedIndicator = (indicator) => (
    (CUSTOM_SCALE[ecological] * Number(indicator.ecological)) +
    (CUSTOM_SCALE[economic] * Number(indicator.economic)) +
    (CUSTOM_SCALE[community] * Number(indicator.community))
  );
  const compareCustom = (a, b) => (
    sortDirection === ASCENDING ?
      combinedIndicator(a) - combinedIndicator(b) :
      combinedIndicator(b) - combinedIndicator(a)
  );
  let compare;
  if (sortColumn !== CUSTOM) {
    compare = compareColumn;
  } else if (
      ecological === NO &&
      economic === NO &&
      community === NO
  ) {
    compare = compareFallback;
  } else {
    compare = compareCustom;
  }
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
  community: PropTypes.string,
  ecological: PropTypes.string,
  economic: PropTypes.string,
  indicators: PropTypes.array.isRequired,
  sortColumn: PropTypes.string.isRequired,
  sortDirection: PropTypes.string.isRequired,
};
export default ExplorerList;
