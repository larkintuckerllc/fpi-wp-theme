import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { getIndicators } from '../../../ducks/indicators';
import * as fromSortDirection from '../../../ducks/sortDirection';
import * as fromSortColumn from '../../../ducks/sortColumn';
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
const Spreadsheet = ({
  indicators,
  setSortColumn,
  setSortDirection,
  sortColumn,
  sortDirection,
}) => {
  const toggleSortDirection = () => {
    if (sortDirection === fromSortDirection.ASCENDING) {
      setSortDirection(fromSortDirection.DESCENDING);
    } else {
      setSortDirection(fromSortDirection.ASCENDING);
    }
  };
  const compareLookup = {
  };
  compareLookup[fromSortColumn.FISHERY] = 'name';
  compareLookup[fromSortColumn.COUNTRY] = 'country';
  compareLookup[fromSortColumn.ECOLOGICAL] = 'ecological';
  compareLookup[fromSortColumn.ECONOMIC] = 'economic';
  compareLookup[fromSortColumn.COMMUNITY] = 'community';
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
  const compare = sortDirection === fromSortDirection.ASCENDING ?
    compareAsc :
    compareDesc;
  indicators.sort(compare);
  let fisheryClass = styles.noArrow;
  let countryClass = styles.noArrow;
  let ecologicalClass = styles.noArrow;
  let economicClass = styles.noArrow;
  let communityClass = styles.noArrow;
  const arrowClass = sortDirection === fromSortDirection.ASCENDING ?
    styles.upArrow :
    styles.downArrow;
  switch (sortColumn) {
    case fromSortColumn.FISHERY:
      fisheryClass = arrowClass;
      break;
    case fromSortColumn.COUNTRY:
      countryClass = arrowClass;
      break;
    case fromSortColumn.ECOLOGICAL:
      ecologicalClass = arrowClass;
      break;
    case fromSortColumn.ECONOMIC:
      economicClass = arrowClass;
      break;
    case fromSortColumn.COMMUNITY:
      communityClass = arrowClass;
      break;
    default:
  }
  return (
    <div id={styles.root}>
      <div
        id={styles.rootFixedFishery}
        className={styles.rootFixed}
      >
        <div
          onClick={() => {
            if (sortColumn === fromSortColumn.FISHERY) {
              toggleSortDirection();
            } else {
              setSortColumn(fromSortColumn.FISHERY);
            }
          }}
        >
          Fishery
          <div className={fisheryClass} />
        </div>
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
        <div
          onClick={() => {
            if (sortColumn === fromSortColumn.COUNTRY) {
              toggleSortDirection();
            } else {
              setSortColumn(fromSortColumn.COUNTRY);
            }
          }}
        >Country
          <div className={countryClass} />
        </div>
        {indicators.map(o => (
          <div
            key={o.id}
          >Country</div>
        ))}
      </div>
      <div className={styles.rootFlexible}>
        <div
          onClick={() => {
            if (sortColumn === fromSortColumn.ECOLOGICAL) {
              toggleSortDirection();
            } else {
              setSortColumn(fromSortColumn.ECOLOGICAL);
            }
          }}
        >Ecological
          <div className={ecologicalClass} />
        </div>
        {indicators.map(o => (
          <div
            key={o.id}
            style={{ backgroundColor: colorScale(o.ecological) }}
          >{o.ecological.toString()}</div>
        ))}
      </div>
      <div className={styles.rootFlexible}>
        <div
          onClick={() => {
            if (sortColumn === fromSortColumn.ECONOMIC) {
              toggleSortDirection();
            } else {
              setSortColumn(fromSortColumn.ECONOMIC);
            }
          }}
        >Economic
          <div className={economicClass} />
        </div>
        {indicators.map(o => (
          <div
            key={o.id}
            style={{ backgroundColor: colorScale(o.economic) }}
          >{o.economic.toString()}</div>
        ))}
      </div>
      <div className={styles.rootFlexible}>
        <div
          onClick={() => {
            if (sortColumn === fromSortColumn.COMMUNITY) {
              toggleSortDirection();
            } else {
              setSortColumn(fromSortColumn.COMMUNITY);
            }
          }}
        >Community
          <div className={communityClass} />
        </div>
        {indicators.map(o => (
          <div
            key={o.id}
            style={{ backgroundColor: colorScale(o.community) }}
          >{o.community.toString()}</div>
        ))}
      </div>
    </div>
  );
};
Spreadsheet.propTypes = {
  indicators: PropTypes.array.isRequired,
  setSortColumn: PropTypes.func.isRequired,
  setSortDirection: PropTypes.func.isRequired,
  sortColumn: PropTypes.string.isRequired,
  sortDirection: PropTypes.string.isRequired,
};
export default connect(state => ({
  indicators: getIndicators(state),
  sortColumn: fromSortColumn.getSortColumn(state),
  sortDirection: fromSortDirection.getSortDirection(state),
}), {
  setSortColumn: fromSortColumn.setSortColumn,
  setSortDirection: fromSortDirection.setSortDirection,
}
)(Spreadsheet);
