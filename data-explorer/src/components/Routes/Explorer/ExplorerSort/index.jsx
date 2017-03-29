import React, { PropTypes } from 'react';
import {
  FISHERY,
  SPECIES,
  COUNTRY,
  ECOLOGICAL,
  ECONOMIC,
  COMMUNITY,
} from '../../../../strings';
import ExplorerSortColumn from './ExplorerSortColumn';
import styles from './index.scss';

const columnsIds = [
  FISHERY,
  SPECIES,
  COUNTRY,
  ECOLOGICAL,
  ECONOMIC,
  COMMUNITY,
];
const columnsById = {
  FISHERY: { id: FISHERY, title: 'Fishery' },
  SPECIES: { id: SPECIES, title: 'Species' },
  COUNTRY: { id: COUNTRY, title: 'Country' },
  ECOLOGICAL: { id: ECOLOGICAL, title: 'Ecological' },
  ECONOMIC: { id: ECONOMIC, title: 'Economic' },
  COMMUNITY: { id: COMMUNITY, title: 'Community' },
};
const ExplorerSort = ({ setSortColumn, setSortDirection, sortColumn, sortDirection }) => (
  <div id={styles.root}>
    {columnsIds.map(o => {
      const column = columnsById[o];
      return (
        <ExplorerSortColumn
          key={column.id}
          id={column.id}
          setSortColumn={setSortColumn}
          setSortDirection={setSortDirection}
          sortColumn={sortColumn}
          sortDirection={sortDirection}
          title={column.title}
        />
      );
    })}
  </div>
);
ExplorerSort.propTypes = {
  sortColumn: PropTypes.string.isRequired,
  sortDirection: PropTypes.string.isRequired,
  setSortColumn: PropTypes.func.isRequired,
  setSortDirection: PropTypes.func.isRequired,
};
export default ExplorerSort;
