import React from 'react';
import {connect} from 'react-redux';
import {changeMuteState} from '../actions';

const MuteButton = ({dispatch}) => {
  const toggleMute = () => dispatch(changeMuteState());
  return (
    <button onClick={toggleMute}>mute/unmute</button>
  );
};

export default connect()(MuteButton);


