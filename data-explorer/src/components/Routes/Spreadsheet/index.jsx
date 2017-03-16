import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { getIndicators } from '../../../ducks/indicators';
import * as fromSortDirection from '../../../ducks/sortDirection';
import * as fromSortColumn from '../../../ducks/sortColumn';
import * as fromFilterContinent from '../../../ducks/filterContinent';
import { colorScale } from '../../../util/misc.js';
import styles from './index.scss';

// const onlyUnique = (value, index, self) => self.indexOf(value) === index;
const Spreadsheet = ({
  indicators,
  setSortColumn,
  setSortDirection,
  sortColumn,
  sortDirection,
}) => {
  // const continents = indicators.map(o => o.continent).filter(onlyUnique).sort();
  // TODO: WIRE IN FILTER
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
  compareLookup[fromSortColumn.SPECIES] = 'species';
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
  let speciesClass = styles.noArrow;
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
    case fromSortColumn.SPECIES:
      speciesClass = arrowClass;
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
    <div>
      {/*
      <form
        id={styles.rootForm}
        className="form-inline"
      >
        <div className="form-group">
          <select
            className="form-control"
            onChange={(e) => {
              window.console.log(e);
            }}
          >
            <option>Show All Continents</option>
            {continents.map(o => (
              <option>{o}</option>
            ))}
          </select>
        </div>
      </form>
      */}
      <div id={styles.rootTable}>
        <div
          id={styles.rootTableFixedFishery}
          className={styles.rootTableFixed}
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
            <div key={o.id}>
              <a href={o.link}>{o.name}</a>
            </div>
          ))}
        </div>
        <div
          id={styles.rootTableFixedSpecies}
          className={styles.rootTableFixed}
        >
          <div
            onClick={() => {
              if (sortColumn === fromSortColumn.SPECIES) {
                toggleSortDirection();
              } else {
                setSortColumn(fromSortColumn.SPECIES);
              }
            }}
          >Species
            <div className={speciesClass} />
          </div>
          {indicators.map(o => (
            <div
              key={o.id}
            >{o.species}</div>
          ))}
        </div>
        <div
          id={styles.rootTableFixedCountry}
          className={`${styles.rootTableFixed} ${styles.rootTableFixedLast}`}
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
            >{o.country}</div>
          ))}
        </div>
        <div className={styles.rootTableFlexible}>
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
        <div className={styles.rootTableFlexible}>
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
        <div className={styles.rootTableFlexible}>
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
    </div>
  );
};
Spreadsheet.propTypes = {
  filterContent: PropTypes.string,
  indicators: PropTypes.array.isRequired,
  setFilterContinent: PropTypes.func.isRequired,
  setSortColumn: PropTypes.func.isRequired,
  setSortDirection: PropTypes.func.isRequired,
  sortColumn: PropTypes.string.isRequired,
  sortDirection: PropTypes.string.isRequired,
};
export default connect(state => ({
  indicators: getIndicators(state),
  filterContent: fromFilterContinent.getFilterContinent(state),
  sortColumn: fromSortColumn.getSortColumn(state),
  sortDirection: fromSortDirection.getSortDirection(state),
}), {
  setFilterContinent: fromFilterContinent.setFilterContinent,
  setSortColumn: fromSortColumn.setSortColumn,
  setSortDirection: fromSortDirection.setSortDirection,
}
)(Spreadsheet);
