import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as fromIndicators from '../../ducks/indicators';
import Routes from '../Routes';

class App extends Component {
  componentWillMount() {
    this.setState({ initialProps: true });
  }
  componentDidMount() {
    const { fetchIndicators } = this.props;
    fetchIndicators();
  }
  componentWillReceiveProps() {
    this.setState({ initialProps: false });
  }
  render() {
    const { initialProps } = this.state;
    if (initialProps) return null;
    return <Routes />;
  }
}
App.propTypes = {
  fetchIndicators: PropTypes.func.isRequired,
  isFetchingIndicators: PropTypes.bool.isRequired,
};
export default connect(
  (state) => ({
    isFetchingIndicators: fromIndicators.getIsFetchingIndicators(state),
  }),
  {
    fetchIndicators: fromIndicators.fetchIndicators,
  }
)(App);
