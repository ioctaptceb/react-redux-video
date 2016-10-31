import React from 'react';
import {connect} from 'react-redux';
import {togglePlay} from '../actions';

const PlayPauseButton = ({dispatch}) => {
  const onTogglePlay = () => dispatch(togglePlay());
  return (
    <button onClick={onTogglePlay}>Play/Pause</button>
  );
};

export default connect()(PlayPauseButton);

