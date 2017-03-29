import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as fromReactRouterRedux from 'react-router-redux';
import { getIndicators } from '../../../ducks/indicators';
import { FISHERY, ASCENDING } from '../../../strings';
import ExplorerSort from './ExplorerSort';
import ExplorerList from './ExplorerList';
import styles from './index.scss';

class Explorer extends Component {
  constructor() {
    super();
    this.setSortColumn = this.setSortColumn.bind(this);
    this.setSortDirection = this.setSortDirection.bind(this);
  }
  setSortColumn(sortColumn) {
    const {
      params: {
        direction,
      },
      push,
    } = this.props;
    const sortDirection = direction !== undefined ? direction : ASCENDING;
    push(`/sort/${sortColumn}/${sortDirection}`);
  }
  setSortDirection(sortDirection) {
    const {
      params: {
        column,
      },
      push,
    } = this.props;
    const sortColumn = column !== undefined ? column : FISHERY;
    push(`/sort/${sortColumn}/${sortDirection}`);
  }
  render() {
    const {
      indicators,
      params: {
        column,
        direction,
      },
    } = this.props;
    const sortColumn = column !== undefined ? column : FISHERY;
    const sortDirection = direction !== undefined ? direction : ASCENDING;
    return (
      <div id={styles.root}>
        <ExplorerSort
          sortColumn={sortColumn}
          sortDirection={sortDirection}
          setSortColumn={this.setSortColumn}
          setSortDirection={this.setSortDirection}
        />
        <ExplorerList
          indicators={indicators}
          sortColumn={sortColumn}
          sortDirection={sortDirection}
        />
      </div>
    );
  }
}
Explorer.propTypes = {
  indicators: PropTypes.array.isRequired,
  params: PropTypes.object.isRequired,
  push: PropTypes.func.isRequired,
};
export default connect(state => ({
  indicators: getIndicators(state),
}), {
  push: fromReactRouterRedux.push,
}
)(Explorer);
