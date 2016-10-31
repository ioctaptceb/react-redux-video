const reducer = (state = {}, action) => {
  switch(action.type) {
  case 'SET_VIDEO_URL':
    return {...state, videoInput: action.url, currentPosition: 0, duration: 0, totalTime: 0};
  case 'SET_CLICKTHROUGH_URL':
    return {...state, clickthrough: action.url};
  case 'TOGGLE_PLAYSTATE':
    return {...state, play: !state.play};
  case 'TOGGLE_MUTESTATE':
    return {...state, mute: !state.mute};
  case 'TOGGLE_FULLSCREEN':
    return {...state, fullscreen: action.fullscreen};
  case 'UPDATE_VOLUME':
    return {...state, volume: action.volume};
  case 'UPDATE_TOTAL_TIME':
    return {...state, totalTime: state.totalTime + 1};
  case 'UPDATE_CURRENT_POSITION':
    return {...state, currentPosition: action.currentPosition};
  case 'UPDATE_BUFFERING':
    return {...state, buffering: action.buffering};
  case 'SET_DURATION':
    return {...state, duration: action.duration};
  default:
    return state;
  }
};

export default reducer;
