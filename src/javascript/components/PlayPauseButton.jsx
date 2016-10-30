import React from 'react';
import {connect} from 'react-redux';
import {changePlayState} from '../actions';

const PlayPauseButton = ({dispatch}) => {
  const togglePlayPause = () => dispatch(changePlayState());
  return (
    <button onClick={togglePlayPause}>Play/Pause</button>
  );
};

export default connect()(PlayPauseButton);

