import {changeVideo, changeClickthrough, changePlayState} from './actions.js';

it('changes the playState', () => {
  expect(changePlayState('play').playState).toBe('pause');
  expect(changePlayState('pause').playState).toBe('play');
});
