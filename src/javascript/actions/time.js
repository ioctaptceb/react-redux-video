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

const updateTotalTime = () => {
  return ({
    type: 'UPDATE_TOTAL_TIME',
  });
};

export {
  setDuration,
  updateCurrentPosition,
  updateTotalTime
};

