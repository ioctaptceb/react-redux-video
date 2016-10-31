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

export {
  changeVideo,
  changeClickthrough
};
