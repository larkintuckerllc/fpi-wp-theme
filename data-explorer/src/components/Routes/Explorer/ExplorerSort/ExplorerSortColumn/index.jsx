import React, { PropTypes } from 'react';
import { ASCENDING, DESCENDING } from '../../../../../ducks/sortDirection';

const ExplorerSortColumn = ({
  id,
  setSortColumn,
  setSortDirection,
  sortColumn,
  sortDirection,
  title,
}) => (
  <div
    onClick={() => {
      if (sortColumn === id) {
        if (sortDirection === ASCENDING) {
          setSortDirection(DESCENDING);
        } else {
          setSortDirection(ASCENDING);
        }
      } else {
        setSortColumn(id);
      }
    }}
  >{title}</div>
);
ExplorerSortColumn.propTypes = {
  id: PropTypes.string.isRequired,
  setSortColumn: PropTypes.func.isRequired,
  setSortDirection: PropTypes.func.isRequired,
  sortColumn: PropTypes.string.isRequired,
  sortDirection: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default ExplorerSortColumn;
