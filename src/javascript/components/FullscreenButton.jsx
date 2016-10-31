import React from 'react';
import {connect} from 'react-redux';
import {toggleFullscreen} from '../actions/control';

const FullscreenButton = ({dispatch}) => {
  const onToggleFullscreen = () => dispatch(toggleFullscreen(true));
  document.addEventListener('fullscreenchange', () => dispatch(toggleFullscreen(false)));
  document.addEventListener('webkitfullscreenchange', () => dispatch(toggleFullscreen(false)));
  document.addEventListener('mozfullscreenchange', () => dispatch(toggleFullscreen(false)));
  return (
    <button onClick={onToggleFullscreen}>toggle fullscreen</button>
  );
};

export default connect()(FullscreenButton);
