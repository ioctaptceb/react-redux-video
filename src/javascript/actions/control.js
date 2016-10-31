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

const updateVolume = (volume) => {
  return ({
    type: 'UPDATE_VOLUME',
    volume
  });
};

export {
  togglePlay,
  toggleMute,
  toggleFullscreen,
  updateVolume
};
