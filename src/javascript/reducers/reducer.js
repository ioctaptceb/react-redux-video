const reducer = (state = {}, action) => {
  switch(action.type) {
  case 'SET_VIDEO_URL':
    return {...state, videoInput: action.url};
  case 'SET_CLICKTHROUGH_URL':
    return {...state, clickthrough: action.url};
  case 'TOGGLE_PLAYSTATE':
    return {...state, playState: action.playState};
  default:
    return state;
  }
};

export default reducer;
