import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { getIndicators } from '../../../ducks/indicators';
import * as fromSortDirection from '../../../ducks/sortDirection';
import * as fromSortColumn from '../../../ducks/sortColumn';
import ExplorerSort from './ExplorerSort';
import ExplorerList from './ExplorerList';
import styles from './index.scss';

const Explorer = ({
  indicators,
  setSortColumn,
  setSortDirection,
  sortColumn,
  sortDirection,
}) => (
  <div id={styles.root}>
    <ExplorerSort
      sortColumn={sortColumn}
      sortDirection={sortDirection}
      setSortColumn={setSortColumn}
      setSortDirection={setSortDirection}
    />
    <ExplorerList
      indicators={indicators}
      sortColumn={sortColumn}
      sortDirection={sortDirection}
    />
  </div>
);
Explorer.propTypes = {
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
})(Explorer);
