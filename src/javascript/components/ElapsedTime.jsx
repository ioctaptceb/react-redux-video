import React from 'react';
import {connect} from 'react-redux';
import {mapStateToProps} from '../store.js';

const ElapsedTime = ({currentPosition, duration}) => {
  const secondsToMinutes = (time) => {
    const adjustedSeconds = Math.floor(time);
    const minutes = Math.floor(adjustedSeconds / 60);
    let seconds = adjustedSeconds - (minutes * 60);
    if (seconds < 10) seconds = `0${seconds}`;
    return `${minutes}:${seconds}`;
  };

  return (
    <div>
      {secondsToMinutes(currentPosition)} / {secondsToMinutes(duration)}
    </div>
  );
};

export default connect(mapStateToProps)(ElapsedTime);
