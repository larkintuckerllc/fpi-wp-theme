import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { getIndicators } from '../../../ducks/indicators';
import * as fromSortDirection from '../../../ducks/sortDirection';
import * as fromSortColumn from '../../../ducks/sortColumn';
import * as fromFilterContinent from '../../../ducks/filterContinent';
import ExplorerSort from './ExplorerSort';

const Explorer = ({
  setSortColumn,
  setSortDirection,
  sortColumn,
  sortDirection,
}) => (
  <div>
    <ExplorerSort
      sortColumn={sortColumn}
      sortDirection={sortDirection}
      setSortColumn={setSortColumn}
      setSortDirection={setSortDirection}
    />
  </div>
);
Explorer.propTypes = {
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
)(Explorer);
