import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as fromReactRouterRedux from 'react-router-redux';
import { getIndicator, getIndicators } from '../../../ducks/indicators';
import * as fromRotation from '../../../ducks/rotation';
import * as fromScale from '../../../ducks/scale';
import WorldView from './WorldView';
import WorldDrawing from './WorldDrawing';
import WorldControls from './WorldControls';
import WorldSnackbar from './WorldSnackbar';

const World = ({
  indicator,
  indicators,
  push,
  rotation,
  scale,
  setRotation,
  setScale,
}) => (
  <WorldView>
    <WorldDrawing
      indicator={indicator}
      indicators={indicators}
      push={push}
      rotation={rotation}
      scale={scale}
      setRotation={setRotation}
      setScale={setScale}
    />
    <WorldControls
      push={push}
      scale={scale}
      setScale={setScale}
    />
    {indicator !== undefined && <WorldSnackbar indicator={indicator} />}
  </WorldView>
);
World.propTypes = {
  indicator: PropTypes.object,
  indicators: PropTypes.array.isRequired,
  push: PropTypes.func.isRequired,
  rotation: PropTypes.array.isRequired,
  setRotation: PropTypes.func.isRequired,
  scale: PropTypes.number.isRequired,
  setScale: PropTypes.func.isRequired,
};
export default connect(
  (state, ownProps) => ({
    indicator: getIndicator(state, ownProps.params.id),
    indicators: getIndicators(state),
    rotation: fromRotation.getRotation(state),
    scale: fromScale.getScale(state),
  }),
  {
    push: fromReactRouterRedux.push,
    setRotation: fromRotation.setRotation,
    setScale: fromScale.setScale,
  }
)(World);
