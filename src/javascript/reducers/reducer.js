const reducer = (state = {}, action) => {
  switch(action.type) {
  case 'SET_VIDEO_URL':
    return {...state, videoInput: action.url};
  case 'SET_CLICKTHROUGH_URL':
    return {...state, clickthrough: action.url};
  case 'TOGGLE_PLAYSTATE':
    return {...state, playState: action.playState};
  case 'SET_DURATION':
    return {...state, duration: action.duration};
  case 'SEEK':
    return {...state, seekPosition: state.duration * (action.seekPosition / 100)};
  default:
    return state;
  }
};

export default reducer;
