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

const togglePlay = () => {
  return ({
    type: 'TOGGLE_PLAYSTATE',
  });
};

const toggleMute = () => {
  return ({
    type: 'TOGGLE_MUTESTATE',
  });
};

const toggleFullscreen = (fullscreen) => {
  return ({
    type: 'TOGGLE_FULLSCREEN',
    fullscreen
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

const updateTotalTime = () => {
  return ({
    type: 'UPDATE_TOTAL_TIME',
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
  togglePlay,
  toggleMute,
  toggleFullscreen,
  setDuration,
  updateCurrentPosition,
  updateVolume,
  updateBuffering
};
