import { createStore } from 'redux';
import reducer from './reducers/reducer.js';

const initialState = {
  videoInput: 'https://archive.org/download/bacteria_friend_and_foe/bacteria_friend_and_foe_512kb.mp4',
  duration: 0,
  volume: 50,
  totalTime: 0,
  play: false,
  buffering: false,
  currentPosition: 0
};

const mapStateToProps = (state) => ({
  videoInput: state.videoInput,
  clickthrough: state.clickthrough,
  duration: state.duration,
  currentPosition: state.currentPosition,
  totalTime: state.totalTime,
  volume: state.volume,
  buffering: state.buffering,
  fullscreen: state.fullscreen,
  mute: state.mute,
  play: state.play
});

const store = createStore(reducer, initialState);

export { mapStateToProps, store };

