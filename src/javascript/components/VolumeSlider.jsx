import React from 'react';
import {connect} from 'react-redux';
import {updateVolume} from '../actions/control';
import {mapStateToProps} from '../store';

const VolumeSlider = ({volume, dispatch}) => {
  const onVolumeChange = (event) => {
    const newVolume = parseInt(event.target.value);
    dispatch(updateVolume(newVolume));
  };

  return (
    <label>
      Volume:
      <input
        type='range'
        onChange={onVolumeChange}
        value={volume}
        max={100}
      />
    </label>
  );
};

export default connect(mapStateToProps)(VolumeSlider);

