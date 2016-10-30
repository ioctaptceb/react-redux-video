import React from 'react';
import {connect} from 'react-redux';
import {updateVolume} from '../actions';
import {mapStateToProps} from '../store.js';

const VolumeSlider = ({volume, dispatch}) => {
  const onVolumeChange = (event) => {
    const newVolume = parseInt(event.target.value);
    dispatch(updateVolume(newVolume));
  };

  return (
    <input
      type='range'
      onChange={onVolumeChange}
      value={volume}
      max={100}
    />
  );
};

export default connect(mapStateToProps)(VolumeSlider);

