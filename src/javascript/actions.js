const changeVideo = (url) => ({
  type: 'SET_VIDEO_URL',
  url
});

const changeClickthrough = (url) => ({
  type: 'SET_CLICKTHROUGH_URL',
  url
});

export {changeVideo, changeClickthrough};
