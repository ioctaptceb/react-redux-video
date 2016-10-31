import React from 'react';
import {connect} from 'react-redux';
import {toggleMute} from '../actions';

const MuteButton = ({dispatch}) => {
  const onToggleMute = () => dispatch(toggleMute());
  return (
    <button onClick={onToggleMute}>mute/unmute</button>
  );
};

export default connect()(MuteButton);


