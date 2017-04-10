import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as fromReactRouterRedux from 'react-router-redux';
import { getIndicators } from '../../../ducks/indicators';
import { CUSTOM } from '../../../strings';
import ExplorerSort from '../../ExplorerSort';
import ExplorerList from '../../ExplorerList';
import ExplorerCustomSort from './ExplorerCustomSort';
import styles from './index.scss';

class Explorer extends Component {
  constructor() {
    super();
    this.setSortColumn = this.setSortColumn.bind(this);
    this.setSortCustom = this.setSortCustom.bind(this);
    this.setSortDirection = this.setSortDirection.bind(this);
  }
  setSortCustom(ecological, economic, community) {
    const {
      params: {
        direction,
      },
      push,
    } = this.props;
    push(`/sort/${CUSTOM}/${direction}/${ecological}/${economic}/${community}`);
  }
  setSortColumn(sortColumn) {
    const {
      params: {
        community,
        direction,
        ecological,
        economic,
      },
      push,
    } = this.props;
    if (sortColumn === CUSTOM) {
      push(`/sort/${sortColumn}/${direction}/${ecological}/${economic}/${community}`);
      return;
    }
    push(`/sort/${sortColumn}/${direction}`);
  }
  setSortDirection(sortDirection) {
    const {
      params: {
        community,
        ecological,
        economic,
      },
      push,
    } = this.props;
    push(`/sort/${CUSTOM}/${sortDirection}/${ecological}/${economic}/${community}`);
  }
  render() {
    const {
      indicators,
      params: {
        community,
        direction,
        ecological,
        economic,
      },
    } = this.props;
    return (
      <div id={styles.root}>
        <div id={styles.rootLeft}>
          <ExplorerSort
            sortColumn={CUSTOM}
            sortDirection={direction}
            setSortColumn={this.setSortColumn}
            setSortDirection={this.setSortDirection}
          />
          <ExplorerCustomSort
            community={community}
            ecological={ecological}
            economic={economic}
            setSortCustom={this.setSortCustom}
          />
        </div>
        <div id={styles.rootRight}>
          <ExplorerList
            community={community}
            ecological={ecological}
            economic={economic}
            indicators={indicators}
            sortColumn={CUSTOM}
            sortDirection={direction}
          />
        </div>
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
