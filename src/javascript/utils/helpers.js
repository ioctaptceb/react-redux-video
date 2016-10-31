const hasChanged = (value, oldValue) => {
  return value !== oldValue;
};

const hasSeeked = (currentPosition, oldPosition) => {
  return Math.abs(currentPosition - oldPosition) > 10;
};

const getFullscreen = (player) =>
  player.requestFullScreen || player.mozRequestFullScreen || player.webkitRequestFullScreen;

export {hasChanged, hasSeeked, getFullscreen};

