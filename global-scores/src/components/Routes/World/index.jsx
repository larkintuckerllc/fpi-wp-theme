import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { getIndicators } from '../../../ducks/indicators';
import * as fromRotation from '../../../ducks/rotation';
import * as fromScale from '../../../ducks/scale';
import * as fromSelected from '../../../ducks/selected';
import WorldView from './WorldView';
import WorldDrawing from './WorldDrawing';
import WorldControls from './WorldControls';
import WorldSnackbar from './WorldSnackbar';

const World = ({
  indicators,
  removeSelected,
  rotation,
  scale,
  selected,
  setRotation,
  setScale,
  setSelected,
}) => (
  <WorldView>
    <WorldDrawing
      indicators={indicators}
      removeSelected={removeSelected}
      rotation={rotation}
      scale={scale}
      selected={selected}
      setRotation={setRotation}
      setScale={setScale}
      setSelected={setSelected}
    />
    <WorldControls
      removeSelected={removeSelected}
      scale={scale}
      setScale={setScale}
    />
    <WorldSnackbar
      selected={selected}
    />
  </WorldView>
);
World.propTypes = {
  indicators: PropTypes.array.isRequired,
  removeSelected: PropTypes.func.isRequired,
  rotation: PropTypes.array.isRequired,
  setRotation: PropTypes.func.isRequired,
  scale: PropTypes.number.isRequired,
  selected: PropTypes.number,
  setScale: PropTypes.func.isRequired,
  setSelected: PropTypes.func.isRequired,
};
export default connect(
  (state) => ({
    indicators: getIndicators(state),
    rotation: fromRotation.getRotation(state),
    scale: fromScale.getScale(state),
    selected: fromSelected.getSelected(state),
  }),
  {
    removeSelected: fromSelected.removeSelected,
    setRotation: fromRotation.setRotation,
    setScale: fromScale.setScale,
    setSelected: fromSelected.setSelected,
  }
)(World);
