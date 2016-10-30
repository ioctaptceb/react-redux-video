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

const seekTo = (seekPosition) => {
  return ({
    type: 'SEEK',
    seekPosition
  });
};

export {
  changeVideo,
  changeClickthrough,
  changePlayState,
  setDuration,
  updateCurrentPosition,
  seekTo
};
