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

export {changeVideo, changeClickthrough, changePlayState};
