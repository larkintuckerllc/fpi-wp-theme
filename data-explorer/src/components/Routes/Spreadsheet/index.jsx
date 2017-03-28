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
      <div id={styles.rootScroll}>
        <div id={styles.rootScrollOpen}>
          <table className={styles.rootScrollOpenTable}>
            <thead>
              <tr>
                <th
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
                </th>
                <th
                  onClick={() => {
                    if (sortColumn === fromSortColumn.SPECIES) {
                      toggleSortDirection();
                    } else {
                      setSortColumn(fromSortColumn.SPECIES);
                    }
                  }}
                >
                  Species
                  <div className={speciesClass} />
                </th>
                <th
                  onClick={() => {
                    if (sortColumn === fromSortColumn.COUNTRY) {
                      toggleSortDirection();
                    } else {
                      setSortColumn(fromSortColumn.COUNTRY);
                    }
                  }}
                >
                  Country
                  <div className={countryClass} />
                </th>
                <th
                  onClick={() => {
                    if (sortColumn === fromSortColumn.ECOLOGICAL) {
                      toggleSortDirection();
                    } else {
                      setSortColumn(fromSortColumn.ECOLOGICAL);
                    }
                  }}
                >
                  Ecological
                  <div className={ecologicalClass} />
                </th>
                <th
                  onClick={() => {
                    if (sortColumn === fromSortColumn.ECONOMIC) {
                      toggleSortDirection();
                    } else {
                      setSortColumn(fromSortColumn.ECONOMIC);
                    }
                  }}
                >
                  Economic
                  <div className={economicClass} />
                </th>
                <th
                  onClick={() => {
                    if (sortColumn === fromSortColumn.COMMUNITY) {
                      toggleSortDirection();
                    } else {
                      setSortColumn(fromSortColumn.COMMUNITY);
                    }
                  }}
                >
                  Community
                  <div className={communityClass} />
                </th>
                <th />
              </tr>
            </thead>
          </table>
          <div id={styles.rootScrollOpenScroll}>
            <table className={styles.rootScrollOpenTable}>
              <tbody>
                {indicators.map(o => (
                  <tr key={o.id}>
                    <td>{o.name}</td>
                    <td>{o.species}</td>
                    <td>{o.country}</td>
                    <td
                      style={{ backgroundColor: colorScale(Number(o.ecological)) }}
                    >
                      {Number(o.ecological).toFixed(2)}
                    </td>
                    <td
                      style={{ backgroundColor: colorScale(Number(o.economic)) }}
                    >
                      {Number(o.economic).toFixed(2)}
                    </td>
                    <td
                      style={{ backgroundColor: colorScale(Number(o.community)) }}
                    >
                      {Number(o.community).toFixed(2)}
                    </td>
                    <td />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
