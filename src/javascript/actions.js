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

const changePlayState = (currentPlayState) => {
  const playState = currentPlayState === 'play' ? 'pause' : 'play';
  return ({
    type: 'TOGGLE_PLAYSTATE',
    playState: playState
  });
};

const setDuration = (duration) => {
  return ({
    type: 'SET_DURATION',
    duration
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
  seekTo
};
