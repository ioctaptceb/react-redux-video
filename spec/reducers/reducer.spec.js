import reducer from '../../src/javascript/reducers/reducer';

it('returns the state if no action is sent', () => {
  const initialState = {};
  expect(reducer(initialState, {})).toBe(initialState);
});

it('handles a SET_VIDEO_URL event', () => {
  const initialState = {videoUrl: 'oldUrl', otherState: 'otherState'};
  const newState = reducer(initialState, {type: 'SET_VIDEO_URL', url: 'newUrl'});
  expect(newState.videoInput).toBe('newUrl');
  expect(newState.otherState).toBe(initialState.otherState);
});

it('handles a SET_VIDEO_URL event', () => {
  const initialState = {videoUrl: 'oldUrl', otherState: 'otherState'};
  const newState = reducer(initialState, {type: 'SET_VIDEO_URL', url: 'newUrl'});
  expect(newState.videoInput).toBe('newUrl');
  expect(newState.otherState).toBe(initialState.otherState);
});
