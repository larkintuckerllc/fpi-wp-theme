import React, { PropTypes } from 'react';
import { ASCENDING, DESCENDING } from '../../../strings';
import styles from './index.scss';

const ExplorerSortColumn = ({
  id,
  setSortColumn,
  setSortDirection,
  sortColumn,
  sortDirection,
  title,
}) => {
  let rootArrow = styles.noArrow;
  let handleClick = () => setSortColumn(id);
  if (sortColumn === id) {
    if (sortDirection === ASCENDING) {
      rootArrow = styles.upArrow;
      handleClick = () => setSortDirection(DESCENDING);
    } else {
      rootArrow = styles.downArrow;
      handleClick = () => setSortDirection(ASCENDING);
    }
  }
  return (
    <div onClick={handleClick} >
      <div id={rootArrow} />
      <div id={styles.rootTitle}>{title}</div>
    </div>
  );
};
ExplorerSortColumn.propTypes = {
  id: PropTypes.string.isRequired,
  setSortColumn: PropTypes.func.isRequired,
  setSortDirection: PropTypes.func.isRequired,
  sortColumn: PropTypes.string.isRequired,
  sortDirection: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default ExplorerSortColumn;
