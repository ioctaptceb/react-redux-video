import { createStore } from 'redux';
import reducer from './reducers/reducer.js';

const initialState = {
  videoInput: 'https://archive.org/download/bacteria_friend_and_foe/bacteria_friend_and_foe_512kb.mp4',
  duration: 0,
  playState: 'pause',
  buffering: false,
  currentPosition: 0
};

const mapStateToProps = (state) => ({
  videoInput: state.videoInput,
  duration: state.duration,
  currentPosition: state.currentPosition,
  buffering: state.buffering,
  playState: state.playState
});

const store = createStore(reducer, initialState);

export { mapStateToProps, store };

