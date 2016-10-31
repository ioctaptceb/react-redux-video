import React from 'react';
import {connect} from 'react-redux';
import {updateCurrentPosition} from '../actions/time';
import {mapStateToProps} from '../store.js';

const Seekbar = ({currentPosition, duration, dispatch}) => {
  const onSeek = (event) => {
    const newTime = parseInt(event.target.value);
    dispatch(updateCurrentPosition(newTime));
  };

  return (
    <input
      type='range'
      onChange={onSeek}
      value={currentPosition}
      max={duration || 100}
    />
  );
};

export default connect(mapStateToProps)(Seekbar);

