const changeVideo = (url) => {
  if (!url) return;
  return ({
    type: 'SET_VIDEO_URL',
    url
  });
};

const changeClickthrough = (url) => {
  if (!url) return;

  return ({
    type: 'SET_CLICKTHROUGH_URL',
    url
  });
};

const changePlayState = () => {
  return ({
    type: 'TOGGLE_PLAYSTATE',
  });
};

const changeMuteState = () => {
  return ({
    type: 'TOGGLE_MUTESTATE',
  });
};

const setDuration = (duration) => {
  return ({
    type: 'SET_DURATION',
    duration
  });
};

const updateCurrentPosition = (currentPosition) => {
  return ({
    type: 'UPDATE_CURRENT_POSITION',
    currentPosition
  });
};

const updateVolume = (volume) => {
  return ({
    type: 'UPDATE_VOLUME',
    volume
  });
};

const updateBuffering = (buffering) => {
  return ({
    type: 'UPDATE_BUFFERING',
    buffering
  });
};

export {
  changeVideo,
  changeClickthrough,
  changePlayState,
  changeMuteState,
  setDuration,
  updateCurrentPosition,
  updateVolume,
  updateBuffering
};
