const reducer = (state = {}, action) => {
  switch(action.type) {
  case 'SET_VIDEO_URL':
    return {...state, videoInput: action.url};
  default:
    return state;
  }
};

export default reducer;
